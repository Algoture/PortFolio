"use client";
import React, { useEffect, useState } from "react";
import CountUp from "../Components/CountUp";
import { BlockchainIcon, FireIcon } from "../Components/Icons";

const Page = () => {
  const [data, setData] = useState({
    totalContributions: 0,
    currentStreak: 0,
    lastContributionDate: "",
    mostActiveDay: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res = await fetch("/api/github");
      const fetchedData = await res.json();
      setData(fetchedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative inline-flex">
          <div className="w-8 h-8 bg-accent rounded-full"></div>
          <div className="w-8 h-8 bg-accent rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-8 h-8 bg-accent rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
          <Count
            value={data.totalContributions}
            streak={false}
            title="Total Contributions"
          />
          <Count
            value={data.currentStreak}
            streak={true}
            title="Current Streak"
          />
          <StatCard
            title="Last Contribution Date"
            value={data.lastContributionDate}
          />
          <StatCard title="Most Active Day" value={data.mostActiveDay} />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <div className="dark:bg-white bg-gray-800 p-4 rounded-lg text-center">
      <BlockchainIcon className="inline-block size-12 fill-accent" />
      <p className="text-2xl font-bold text-white dark:text-gray-900">{value}</p>
      <h2 className="text-lg font-semibold text-gray-400">{title}</h2>
    </div>
  );
};

const Count = ({ value, title, streak }) => {
  return (
    <div className="dark:bg-white bg-gray-800 p-4 rounded-lg text-center">
      <FireIcon className="inline-block size-12 text-gray-900  fill-accent" />
      <p className="text-2xl font-bold text-white dark:text-gray-900">
        <CountUp to={value} from={0} duration={1} /> {streak ? "days" : ""}
      </p>
      <h2 className="text-lg font-semibold text-gray-500">{title}</h2>
    </div>
  );
};

export default Page;
