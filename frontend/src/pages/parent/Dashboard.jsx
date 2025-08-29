import React from "react";
import ParentWelcome from "../../components/parent/dashbaord/ParentWelcome";
import ParentStats from "../../components/parent/dashbaord/ParentStats";
import ParentPerformance from "../../components/parent/dashbaord/ParentPerformance";
function Dashboard() {
  return (
    <main className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-[32px] mt-4">
        <ParentWelcome />
        <ParentStats />
        <ParentPerformance />
      </div>
    </main>
  );
}

export default Dashboard;
