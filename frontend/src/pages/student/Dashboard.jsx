import React from "react";
import WelcomeBanner from "../../components/student/dashboard/WelcomeBanner";
import StatsCard from "../../components/student/dashboard/StatsCard";
import ExamsTable from "../../components/student/dashboard/ExamsTable";
import NoticesDashboard from "../../components/student/dashboard/NoticesDashboard";
const Dashboard = () => {
  return (
    <main className="max-w-[1440px] px-4 p-4 lg:px-8 xl:px-12 mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen">
      <WelcomeBanner />
      <StatsCard />
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1">
          <ExamsTable />
        </div>
        <div className="w-full xl:max-w-sm">
          <NoticesDashboard />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
