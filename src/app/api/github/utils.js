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

  days.forEach(({ date }, index) => {
    const currentDate = new Date(date);
    const previousDate = index > 0 ? new Date(days[index - 1].date) : null;

    if (
      previousDate &&
      (currentDate - previousDate) / (1000 * 60 * 60 * 24) === 1
    ) {
      currentStreak++;
    } else {
      if (currentStreak > highestStreak) {
        highestStreak = currentStreak;
        highestStreakStart = streakStart;
        highestStreakEnd = previousDate;
      }
      currentStreak = 1;
      streakStart = currentDate;
    }
  });

  if (currentStreak > highestStreak) {
    highestStreak = currentStreak;
    highestStreakStart = streakStart;
    highestStreakEnd = new Date(days[days.length - 1].date);
  }
  return { highestStreak, highestStreakStart, highestStreakEnd, currentStreak };
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
