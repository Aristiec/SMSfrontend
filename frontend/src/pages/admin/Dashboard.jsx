import React from "react";
import WelcomeBannerAdmin from "../../components/admin/dashboard/WelcomeBannerAdmin";
import StatsCardAdmin from "../../components/admin/dashboard/StatsCardAdmin";
import YearlyStudentDataAdmin from "../../components/admin/dashboard/YearlyStudentDataAdmin";
import CalendarAdmin from "../../components/admin/dashboard/CalendarAdmin";

const Dashboard = () => {
  return (
    <main className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-[32px] mt-4">
        <WelcomeBannerAdmin />
        <StatsCardAdmin />
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex-1">
            <YearlyStudentDataAdmin />
          </div>
          <div className="w-full xl:max-w-sm">
            <CalendarAdmin />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;