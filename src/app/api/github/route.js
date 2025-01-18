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
  // const rateLimit = data.data.rateLimit;

  let currentStreak = 0;
  const today = new Date().toISOString().split("T")[0];
  let lastContributionDate = null;
  const contributionCountsByDay = {};

  for (let i = days.length - 1; i >= 0; i--) {
    const { date, contributionCount } = days[i];

    if (contributionCount > 0 && !lastContributionDate) {
      lastContributionDate = date;
    }

    if (new Date(date) <= new Date(today)) {
      if (contributionCount > 0) {
        currentStreak++;
      } else if (new Date(date).toISOString().split("T")[0] !== today) {
        break;
      }
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
  });
}
