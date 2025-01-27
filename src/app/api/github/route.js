"use server";
import { NextResponse } from "next/server";
import { calculateStreaks, fetchGitHubData, formatDate } from "./utils.js";

export async function GET() {
  try {
    const data = await fetchGitHubData();

    const allWeeks =
      data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (!allWeeks) {
      throw new Error("Invalid data structure received from GitHub API");
    }

    const days = allWeeks.flatMap((week) => week.contributionDays);
    days.sort((a, b) => new Date(a.date) - new Date(b.date));

    const daysWithContributions = days.filter(
      (day) => day.contributionCount > 0
    );

    const lastContributionDate =
      daysWithContributions[daysWithContributions.length - 1]?.date || null;
    const formattedLastContributionDate = lastContributionDate
      ? formatDate(lastContributionDate)
      : null;

    const today = new Date().toISOString().split("T")[0];
    const todayHasContributions = days.some(
      (day) => day.date === today && day.contributionCount > 0
    );

    const streaks = calculateStreaks(daysWithContributions);
    const adjustedCurrentStreak = todayHasContributions
      ? streaks.currentStreak
      : calculateStreaks(
          daysWithContributions.filter(
            (day) => new Date(day.date) < new Date(today)
          )
        ).currentStreak;

    const formattedHighestStreakStart = streaks.highestStreakStart
      ? formatDate(streaks.highestStreakStart)
      : null;
    const formattedHighestStreakEnd = streaks.highestStreakEnd
      ? formatDate(streaks.highestStreakEnd)
      : null;

    const totalContributions =
      data.data.user.contributionsCollection.contributionCalendar
        .totalContributions;

    return NextResponse.json({
      totalContributions,
      lastContributionDate: formattedLastContributionDate,
      highestStreak: streaks.highestStreak,
      currentStreak: adjustedCurrentStreak,
      highestStreakStart: formattedHighestStreakStart,
      highestStreakEnd: formattedHighestStreakEnd,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
