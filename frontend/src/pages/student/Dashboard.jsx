import React from "react";
import WelcomeBanner from "../../components/student/dashboard/WelcomeBanner";
import StatsCard from "../../components/student/dashboard/StatsCard";
import ExamsTable from "../../components/student/dashboard/ExamsTable";
import NoticesDashboard from "../../components/student/dashboard/NoticesDashboard";
const Dashboard = () => {
  return (
    <main className="p-6 bg-[#E9EEF4] flex flex-col gap-8 min-h-screen">
      <WelcomeBanner />
      <StatsCard />
      <div className="flex flex-row gap-6 ml-6">
        <div className="flex-1">
          <ExamsTable />
        </div>
        <div className="flex-1">
          <NoticesDashboard />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
