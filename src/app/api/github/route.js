import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "Algoture") {           
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
          rateLimit {
            limit
            cost
            remaining
            used
          }
        }
      `,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }

  const data = await response.json();

  const allWeeks =
    data.data.user.contributionsCollection.contributionCalendar.weeks;

  const days = allWeeks.flatMap((week) => week.contributionDays);

  let currentStreak = 0;
  let highestStreak = 0;
  let highestStreakStart = null;
  let highestStreakEnd = null;

  let streakStart = null;
  let lastContributionDate = null;
  const contributionCountsByDay = {};

  for (let i = 0; i < days.length; i++) {
    const { date, contributionCount } = days[i];
    const formattedDate = new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "-");

    if (contributionCount > 0) {
      if (currentStreak === 0) {
        streakStart = formattedDate;
      }
      currentStreak++;

      if (currentStreak > highestStreak) {
        highestStreak = currentStreak;
        highestStreakStart = streakStart;
        highestStreakEnd = formattedDate;
      }

      lastContributionDate = formattedDate;
    } else {
      currentStreak = 0;
    }

    const dayOfWeek = new Date(date).toLocaleString("en-US", {
      weekday: "long",
    });
    contributionCountsByDay[dayOfWeek] =
      (contributionCountsByDay[dayOfWeek] || 0) + contributionCount;
  }

  const mostActiveDay = Object.entries(contributionCountsByDay).reduce(
    (maxDay, currentDay) => (currentDay[1] > maxDay[1] ? currentDay : maxDay),
    ["", 0]
  )[0];

  return NextResponse.json({
    totalContributions:
      data.data.user.contributionsCollection.contributionCalendar
        .totalContributions,
    currentStreak,
    lastContributionDate,
    mostActiveDay,
    highestStreak,
    highestStreakStart,
    highestStreakEnd,
  });
}
