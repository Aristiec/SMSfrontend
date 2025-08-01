import React from "react";
import Header from "./Header";
import Mcq from "./Mcq";

const OnlineExam = () => {
  return (
    <section className="flex  pt-20 px-14 gap-12 bg-[#fafcfd] w-full h-full justify-center">
      <div className="flex flex-col gap-12">
        <Header />
        <Mcq />
      </div>
    </section>
  );
};

export default OnlineExam;
