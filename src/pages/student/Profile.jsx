import React, { useState, useEffect } from "react";
import profileIcon from "../../assets/profile_profile.svg";
import courseIcon from "../../assets/courseIcon_icon_profile.svg";
import mail from "../../assets/mail.svg";
import blood from "../../assets/blood.svg";
import calendar from "../../assets/calendar.svg";
import gender from "../../assets/gender.svg";
import home from "../../assets/home.svg";
import phone from "../../assets/phone.svg";
import guardian from "../../assets/guardian.svg";
import admission from "../../assets/admission.svg";
import school from "../../assets/school.svg";
import grade from "../../assets/grade.svg";
import { fetchProfileByEmail } from "../../features/auth/authAPI";
const DetailCard = ({ icon, label, value = false }) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
      className="flex flex-col sm:flex-row justify-between rounded-[12px] px-[16px] sm:px-[24px] py-[12px] gap-[12px] bg-[#FAFCFD] items-start sm:items-center"
    >
      <div className="flex gap-[12px] items-center">
        <div className="flex flex-col gap-[8px] font-[Inter]">
          <p className=" text-[12px] leading-[16px] tracking-[0] text-[#04203E] font-medium">
            {label}
          </p>
          <p
            className=" flex justify-start text-[14px] md:text-[16px]
 leading-[24px] tracking-[0] text-center text-[#1F1D1D] font-normal"
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const [student, setStudent] = useState(null);
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email) {
      fetchProfileByEmail(email)
        .then((res) => setStudent(res.data))
        .catch((err) => console.error("Error fetching profile:", err));
    }
  }, [email]);

  if (!student) return <div className="text-center mt-10">Loading...</div>;
  const personalDetails = [
    { icon: calendar, label: "Date of Birth", value: student.dateOfBirth },
    { icon: gender, label: "Gender", value: student.gender },
    { icon: mail, label: "Aadhar", value: student.aadharNumber },
    { icon: blood, label: "Blood Group", value: student.bloodGroup },
    { icon: phone, label: "Phone", value: student.mobileNumber },
    { icon: mail, label: "Email", value: student.email },
    {
      icon: home,
      label: "Address",
      value: student.address?.[0]
        ? `${student.address[0].street}, ${student.address[0].city}, ${student.address[0].state}`
        : "N/A",
    },
  ];
  const guardianInfo = student.parentDetails;

  const guardianSections = [
    [
      { icon: guardian, label: "Father Name", value: guardianInfo?.fatherName },
      {
        icon: phone,
        label: "Father Contact",
        value: guardianInfo?.fatherContact,
      },
      { icon: mail, label: "Father Email", value: guardianInfo?.email },
      {
        icon: admission,
        label: "Father Occupation",
        value: guardianInfo?.fatherOccupation,
      },
    ],
    [
      { icon: guardian, label: "Mother Name", value: guardianInfo?.motherName },
      {
        icon: phone,
        label: "Mother Contact",
        value: guardianInfo?.motherContact,
      },
      {
        icon: admission,
        label: "Mother Occupation",
        value: guardianInfo?.motherOccupation,
      },
    ],
    [
      {
        icon: guardian,
        label: "Guardian Name",
        value: guardianInfo?.guardianName,
      },
      {
        icon: phone,
        label: "Guardian Contact",
        value: guardianInfo?.guardianContact,
      },
      {
        icon: mail,
        label: "Guardian Relation",
        value: guardianInfo?.guardianRelation,
      },
    ],
  ];

  const academicDetails = [
    {
      icon: admission,
      label: "Year",
      value: student.year,
    },
    {
      icon: admission,
      label: "Course",
      value: student.course?.courseName,
    },
    {
      icon: school,
      label: "Previous School",
      value: student.previousEducation?.[0]?.lastSchoolOrCollege,
    },
    {
      icon: school,
      label: "Board",
      value: student.previousEducation?.[0]?.boardOrUniversity,
    },
    {
      icon: admission,
      label: "Passing Year",
      value: student.previousEducation?.[0]?.passingYear,
    },
    {
      icon: grade,
      label: "Grade",
      value: `${student.previousEducation?.[0]?.percentage}%`,
    },
  ];

  return (
    <>
      <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
        <div className="flex flex-col px-4  mt-4">
          {/* Header */}
          <div className="sticky top-20 w-full h-[64px] bg-[#04203E] rounded-[12px] px-[24px] py-[18px] flex items-center">
            <div className="text-[#FAFCFD] font-bold text-[20px] md:text-[24px] leading-[28px]">
              Student Profile
            </div>
          </div>

          {/* Profile Card */}
          <div className="w-full h-[144px] bg-[#04203E] rounded-[12px] mt-[25px] p-[24px] flex items-center gap-[32px] shadow-[0px_4px_8px_0px_#00000033]">
            {/* Left Image */}
            <img
              src={profileIcon}
              className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] rounded-full object-cover"
            />

            {/* Right Info */}
            <div className="flex flex-col gap-[12px]">
              {/* Name */}
              <div className="text-[#FAFCFD] font-bold text-[24px] leading-[36px] font-inter">
                {student.firstName} {student.lastName}
              </div>

              {/* Course and ID */}
              <div className="flex items-center gap-[12px]">
                <img
                  src={courseIcon}
                  alt="Course Icon"
                  className="w-[24px] h-[24px]"
                />
                <span
                  className="text-[#FAFCFD] text-[14px] md:text-[16px]
 font-normal font-inter"
                >
                  Course: {student.course?.courseName}
                </span>
                <span
                  className="text-[#FAFCFD] text-[14px] md:text-[16px]
 font-normal font-inter"
                >
                  Student ID: {student.studentCode}
                </span>
                <span
                  className="text-[#FAFCFD] text-[14px] md:text-[16px]
 font-normal font-inter"
                >
                  Section: {student.section}
                </span>
                <span
                  className="text-[#FAFCFD] text-[14px] md:text-[16px]
 font-normal font-inter"
                >
                  Level: {student.level}
                </span>
                <span
                  className="text-[#FAFCFD] text-[14px] md:text-[16px]
 font-normal font-inter"
                >
                  Year of joining: {student.year}
                </span>
              </div>
            </div>
          </div>

          {/* Personal Details Section */}

          <div className="w-full h-[52px] bg-[#04203E] rounded-t-[12px] p-[12px] mt-[24px] shadow-[0px_4px_8px_0px_#00000033] flex items-center">
            <div className="text-[#FAFCFD] font-semibold text-[20px] md:text-[18px] leading-[28px]">
              Personal Details
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] bg-[#FAFCFD]  rounded-b-[12px] p-5 mb-5">
            {personalDetails.map((detail, idx) => (
              <div
                key={idx}
                className={detail.label === "Address" ? "md:col-span-2" : ""}
              >
                <DetailCard {...detail} />
              </div>
            ))}
          </div>

          {/*  Guardian Details Section */}

          <div className="w-full h-auto bg-[#04203E] rounded-t-[12px] p-[12px] mt-[24px] shadow-md flex items-center">
            <div className="text-[#FAFCFD] font-semibold text-[20px] md:text-[18px] leading-[28px]">
              Guardian Details
            </div>
          </div>

          {/* ✅ Loop through each guardian */}
          {guardianSections?.map((details, idx) => (
            <div
              key={idx}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px]   rounded-b-[12px] bg-[#FAFCFD] p-5"
            >
              {details.map((detail, detailIdx) => (
                <DetailCard key={detailIdx} {...detail} />
              ))}
              {/* Divider for multiple guardians */}
              {idx < guardianSections.length - 1 && (
                <hr className="col-span-2 border-t-1 border-[#04203E3] mt-3" />
              )}
            </div>
          ))}

          {/* <hr className="text-[#04203E33]" />


          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-5 mb-5">
            {guardianDetails2.map((detail, idx) => {
              const isLastOddItem = isOdd && idx === lastIndex;
              return (
                <div key={idx} className={isLastOddItem ? "md:col-span-2" : ""}>
                  <DetailCard {...detail} />
                </div>
              );
            })}
          </div>
          */}
          <div
            className="w-full
 h-[52px] bg-[#04203E] rounded-t-[12px] p-[12px] mt-[24px] shadow-[0px_4px_8px_0px_#00000033] flex items-center"
          >
            <div className="w-full h-[28px] text-[#FAFCFD] font-[inter] font-semibold text-[20px] leading-[28px]">
              Academic Details
            </div>
          </div>

          {/* academic details */}

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px]  bg-[#FAFCFD]  rounded-b-[12px] p-5 mb-5">
            {academicDetails.map((detail, idx) => (
              <div key={idx}>
                <DetailCard {...detail} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
