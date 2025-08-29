import React, { useEffect, useState } from "react";
import { Book, Users } from "lucide-react";
import SyllabusIcon from "../../assets/Syllabus.svg";

const Courses = () => {
  const [subjects, setSubjects] = useState([]);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    
    const fetchCourses = async () => {
      try {
      
        await new Promise((res) => setTimeout(res, 500));

        
        const mockProfile = {
          data: {
            firstName: "Tanishtha",
            lastName: "Mahajan",
            course: {
              id: "COURSE123",
              name: "Computer Science",
            },
          },
        };

        // Mock subjects data
        const mockSubjects = {
          data: [
            {
              subjects: [
                {
                  name: "Data Structures",
                  code: "CS201",
                  credit: 4,
                  faculties: [{ name: "Dr. Sharma" }, { name: "Prof. Mehta" }],
                },
                {
                  name: "Operating Systems",
                  code: "CS301",
                  credit: 3,
                  faculties: [{ name: "Dr. Gupta" }],
                },
                {
                  name: "Computer Networks",
                  code: "CS305",
                  credit: 3,
                  faculties: [],
                },
              ],
            },
          ],
        };

       
        setStudentName(
          `${mockProfile.data.firstName} ${mockProfile.data.lastName}`
        );

        
        setSubjects(mockSubjects.data[0]?.subjects || []);
      } catch (error) {
        console.error("Error fetching course subjects:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleDownload = (courseName) => {
    alert(`Downloading syllabus for: ${courseName}`);
  };

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-7 mt-4">
        {/* Header */}
        <header className="sticky top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-4 text-[#FAFCFD]">
          <h1 className="text-[20px] md:text-[24px] font-bold [Montserrat]">
            Courses Enrolled - {studentName}
          </h1>
        </header>

        {/* Table Header */}
        <div className="bg-[#FAFCFD] rounded-2xl overflow-hidden mt-[12px] w-full mx-auto px-4">
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

          {/* Dynamic Course Cards */}
          <div className="flex flex-col items-center space-y-4 px-2 md:px-2 py-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="w-full  bg-[#FAFCFD] rounded-[12px] px-4 md:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg"
              >
                {/* Subject Info */}
                <div className="flex items-start md:items-center space-x-3 flex-1 mb-4 md:mb-0">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#E9EEF4] flex items-center justify-center mt-1 md:mt-0">
                    <Book className="w-[16px] h-[16px] text-[#04203E]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1F1D1D]">{subject.name}</p>
                    <p className="text-sm font-bold text-[#1F1D1D]">
                      {subject.code} | Credits: {subject.credit}
                    </p>
                  </div>
                </div>

                {/* Professors */}
                <div className="flex items-center flex-1 text-sm text-[#1F1D1D] lg:ml-30">
                  <div className="min-w-[40px] flex justify-center">
                    <div className="w-[28px] h-[28px] rounded-full bg-[#FFF4ED] flex items-center justify-center">
                      <Users className="h-[16px] w-[16px] text-[#F97316]" />
                    </div>
                  </div>
                  <div className="text-[#1F1D1D] text-[16px] font-normal font-[Inter] pl-2">
                    {subject.faculties?.length > 0
                      ? subject.faculties.map((f) => f.name).join(", ")
                      : "Not Assigned"}
                  </div>
                </div>

                {/* Syllabus Download */}
                <div className="flex justify-end items-center flex-1 mt-4 md:mt-0 md:justify-end">
                  <button
                    onClick={() => handleDownload(subject.name)}
                    className="flex items-center gap-[12px] text-[16px] text-[#04203E] mb-1"
                  >
                    <img
                      src={SyllabusIcon}
                      alt="Syllabus"
                      className="w-[28px] h-[28px] rounded-full bg-[#FEF2F2] p-1"
                    />
                    <span className="pb-[2px] border-b-[1px] border-[#04203E]">
                      Download Pdf
                    </span>
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
