import React from "react";
import { Book, Users } from "lucide-react";
import SyllabusIcon from "../../assets/Syllabus.svg";

const courses = [
  {
    title: "Data Structures and Algorithms",
    code: "CS201",
    credits: 4,
    professor: "Prof. Kowshik",
  },
  {
    title: "Operating Systems",
    code: "CS204",
    credits: 3,
    professor: "Prof. Shalini",
  },
  {
    title: "Database Management System",
    code: "CS208",
    credits: 4,
    professor: "Prof. Rohit Kunwar",
  },
  {
    title: "Computer Networks",
    code: "CS212",
    credits: 3,
    professor: "Prof. Lakshimath Dev",
  },
  {
    title: "Software Engineering",
    code: "CS215",
    credits: 3,
    professor: "Prof. Shashank",
  },
  {
    title: "Artificial Intelligence",
    code: "CS301",
    credits: 4,
    professor: "Prof. Devshankar",
  },
  {
    title: "Web Development",
    code: "CS305",
    credits: 3,
    professor: "Prof. Rajavel",
  },
];

const Courses = () => {
  const handleDownload = (courseName) => {
    alert(`Downloading syllabus for: ${courseName}`);
  };

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-1 mt-4">
        {/* Header */}
        <header className="  sticky top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full  h-[68px] px-4  text-[#FAFCFD]  ">
          <h1 className="text-[20px] md:text-[24px] font-bold font-[Montserrat]">
            Courses Enrolled
          </h1>
        </header>

        {/* Table Header */}
        <div className="bg-[#FAFCFD] rounded-2xl overflow-hidden mt-[12px] w-full max-w-7xl mx-auto px-4">
          <div className="hidden md:block w-full">
            <div className="grid grid-cols-3 border-b border-[#1F1D1D] px-4 md:px-8 py-6">
              <div className="text-[#1F1D1D] font-semibold text-[16px]">
                Subjects
              </div>
              <div className="text-[#1F1D1D] font-semibold text-[16px] text-center">
                Professors Assigned
              </div>
              <div className="text-[#1F1D1D] font-semibold text-[16px] text-right pr-4 md:pr-[60px]">
                Syllabus
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="flex flex-col items-center space-y-4 px-2 md:px-2 py-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="w-full max-w-7xl bg-[#FAFCFD] rounded-[12px] px-4 md:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg"
              >
                {/* Subject Info */}
                <div className="flex items-start md:items-center space-x-3 flex-1 mb-4 md:mb-0">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#E9EEF4] flex items-center justify-center mt-1 md:mt-0">
                    <Book className="w-[16px] h-[16px] text-[#04203E]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1F1D1D]">{course.title}</p>
                    <p className="text-sm font-bold text-[#1F1D1D]">
                      {course.code} | Credits: {course.credits}
                    </p>
                  </div>
                </div>

                {/* Professor Info */}
                <div className="flex items-center flex-1 text-sm text-[#1F1D1D]  md:ml-20">
                  <div className="min-w-[40px] flex justify-center ">
                    <div className="w-[28px] h-[28px] rounded-full bg-[#FFF4ED] flex items-center justify-center  ">
                      <Users className="h-[16px] w-[16px] text-[#F97316] " />
                    </div>
                  </div>
                  <div className="text-[#1F1D1D] text-[16px] font-normal font-[Inter] pl-2">
                    {course.professor}
                  </div>
                </div>

                {/* Syllabus Download */}
                <div className="flex justify-end items-center flex-1 mt-4 md:mt-0 md:justify-end">
                  <button
                    onClick={() => handleDownload(course.title)}
                    className="flex items-center gap-[12px] text-[16px] text-[#04203E] underline"
                  >
                    <img
                      src={SyllabusIcon}
                      alt="Syllabus"
                      className="w-[28px] h-[28px] rounded-full bg-[#FEF2F2] p-1"
                    />
                    <span>Download Pdf</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
