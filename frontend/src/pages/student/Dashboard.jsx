import React from "react";
import WelcomeBanner from "../../components/student/dashboard/WelcomeBanner";
import StatsCard from "../../components/student/dashboard/StatsCard";
import ExamsTable from "../../components/student/dashboard/ExamsTable";
import NoticesDashboard from "../../components/student/dashboard/NoticesDashboard";
import Calendar from "../../components/student/dashboard/Calender";
const Dashboard = () => {
  return (
    <main className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-[32px] mt-4">
        <WelcomeBanner />
        <StatsCard />
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex-1">
            <ExamsTable />
          </div>
          <div className="w-full xl:max-w-sm">
            <Calendar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
