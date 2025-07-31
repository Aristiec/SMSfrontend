import React from "react";
import Header from "../../components/faculty/dashboard/Header";
import Cards from "../../components/faculty/dashboard/Cards";
import TodaySchedule from "../../components/faculty/dashboard/TodaySchedule";
import Notification from "../../components/faculty/dashboard/Notification";
import Course from "../../components/faculty/dashboard/Course";
import StudentQueries from "../../components/faculty/dashboard/StudentQueries";
const Dashboard = () => {
  return (
    <>
      <section className="p-10 flex flex-col gap-10 h-full">
        <Header />
        <Cards />
        <div className="w-full flex gap-10  h-[58vh]">
          <div className="flex  w-[60%]">
            <TodaySchedule />
          </div>
          <div className="w-[40%] flex overflow-hidden ">
            <Notification />
          </div>
        </div>
        <div className="w-full flex gap-10 ">
          <div className="flex  w-[60%]">
            <Course />
          </div>
          <div className="w-[40%] flex overflow-hidden ">
            <StudentQueries />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
