import React from "react";
import WelcomeBanner from "../../components/student/dashboard/WelcomeBanner";
import StatsCard from "../../components/student/dashboard/StatsCard";

const Dashboard = () => {
  return (
    <main className="p-6 bg-[#f5f7fa] flex flex-col gap-8 min-h-screen">
      <WelcomeBanner />
      <StatsCard />
    </main>
  );
};

export default Dashboard;
