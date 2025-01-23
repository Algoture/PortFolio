export function formatDate(date) {
  return date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;
}
export function calculateStreaks(days) {
  let currentStreak = 0;
  let highestStreak = 0;
  let streakStart = null;
  let highestStreakStart = null;
  let highestStreakEnd = null;
  let lastContributionDate = null;
  let yesterdayContributed = false;
  days.forEach(({ date, contributionCount }) => {
    const currentDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (contributionCount > 0 || currentDate.getTime() === today.getTime()) {
      if (lastContributionDate) {
        const diffDays =
          (currentDate - lastContributionDate) / (1000 * 60 * 60 * 24);
        if (diffDays === 1) {
          currentStreak++;
        } else if (diffDays > 1) {
          if (currentStreak > highestStreak) {
            highestStreak = currentStreak;
            highestStreakStart = streakStart;
            highestStreakEnd = lastContributionDate;
          }
          currentStreak = 1;
          streakStart = currentDate;
        }
      } else {
        currentStreak = 1;
        streakStart = currentDate;
      }
      lastContributionDate = currentDate;
      yesterdayContributed = true;
    } else {
      if (yesterdayContributed) {
        if (currentStreak > highestStreak) {
          highestStreak = currentStreak;
          highestStreakStart = streakStart;
          highestStreakEnd = lastContributionDate;
        }
        currentStreak = 0;
      }
    }
  });
  if (currentStreak > highestStreak) {
    highestStreak = currentStreak;
    highestStreakStart = streakStart;
    highestStreakEnd = lastContributionDate;
  }
  return { highestStreak, highestStreakStart, highestStreakEnd, currentStreak };
}
export function calculateTotalContributions(days) {
  return days.reduce((sum, day) => sum + day.contributionCount, 0);
}
export async function fetchGitHubData() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "${process.env.GITHUB_USERNAME}") {           
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
    throw new Error("Failed to fetch data from GitHub");
  }
  return await response.json();
}
