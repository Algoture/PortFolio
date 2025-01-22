import { NextResponse } from "next/server";
import {
  calculateStreaks,
  calculateTotalContributions,
  fetchGitHubData,
  formatDate,
} from "./utils";

export async function GET() {
  try {
    const data = await fetchGitHubData();
    const allWeeks =
      data.data.user.contributionsCollection.contributionCalendar.weeks;
    const days = allWeeks.flatMap((week) => week.contributionDays);
    days.sort((a, b) => new Date(a.date) - new Date(b.date));
    const totalContributions = calculateTotalContributions(days);
    const {
      highestStreak,
      highestStreakStart,
      highestStreakEnd,
      currentStreak,
    } = calculateStreaks(days);

    const lastContributionDate = days[days.length - 1]?.date;
    const formattedLastContributionDate = formatDate(lastContributionDate);
    const formattedHighestStreakStart = formatDate(highestStreakStart);
    const formattedHighestStreakEnd = formatDate(highestStreakEnd);

    return NextResponse.json({
      totalContributions,
      LastContributionDate: formattedLastContributionDate,
      highestStreak,
      currentStreak,
      highestStreakStart: formattedHighestStreakStart,
      highestStreakEnd: formattedHighestStreakEnd,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
