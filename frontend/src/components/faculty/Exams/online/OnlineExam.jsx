import React, { useState } from "react";
import Header from "./Header";
import Mcq from "./Mcq";

const OnlineExam = () => {
  const [option, setOption] = useState([]);
  const [mcqQuestions, setMcqQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  
  console.log(totalQuestions);

  return (
    <section className="flex  pt-15 px-14 gap-12 bg-[#fafcfd] w-full h-full justify-center">
      <div className="flex flex-col gap-12">
        <Header totalQuestions={totalQuestions} setTotalQuestions={setTotalQuestions} currentQuestionIndex={currentQuestionIndex} />
        <Mcq />
      </div>
    </section>
  );
};

export default OnlineExam;
