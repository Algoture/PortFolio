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
  days.sort((a, b) => new Date(a.date) - new Date(b.date));

  const totalContributions = days.reduce(
    (sum, day) => sum + day.contributionCount,
    0
  );

  let currentStreak = 0;
  let highestStreak = 0;
  let streakStart = null;
  let lastContributionDate = null;

  for (let i = 0; i < days.length; i++) {
    const { date, contributionCount } = days[i];
    const currentDate = new Date(date);
    if (contributionCount > 0) {
      if (lastContributionDate) {
        const diffDays =
          (currentDate - lastContributionDate) / (1000 * 60 * 60 * 24);
        if (diffDays === 1) {
          currentStreak++;
        } else if (diffDays > 1) {
          highestStreak = Math.max(highestStreak, currentStreak);
          currentStreak = 1;
          streakStart = currentDate;
        }
      } else {
        currentStreak = 1;
        streakStart = currentDate;
      }
      lastContributionDate = currentDate;
    } else {
      highestStreak = Math.max(highestStreak, currentStreak);
      currentStreak = 0;
    }
  }

  highestStreak = Math.max(highestStreak, currentStreak);

  return NextResponse.json({
    totalContributions: totalContributions,
    // lastContributionDate: lastContributionDate,
    highestStreak: highestStreak,
    // currentStreak: currentStreak,
    // days: days,
    // highestStreakStart,
    // highestStreakEnd,
  });
}
