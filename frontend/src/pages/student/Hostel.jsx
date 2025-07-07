import React from "react";
import Header from "../../components/student/hostel/Header";
import LowerSection from "../../components/student/hostel/LowerSection.jsx";
const Hostel = () => {
  return (
    <div className="flex flex-col px-4 gap-7 mt-4  ">
      <Header />
      <LowerSection/>
    </div>
  );
};

export default Hostel;
