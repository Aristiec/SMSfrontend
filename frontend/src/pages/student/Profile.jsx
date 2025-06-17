import React from "react";
import profileIcon from "../../assets/profile_profile.svg";
import courseIcon from "../../assets/courseIcon_icon_profile.svg";
import pencil from "../../assets/pencil.svg";
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

const DetailCard = ({ icon, label, value, showRequestUpdate = false }) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
      className="flex flex-col sm:flex-row justify-between rounded-[12px] px-[16px] sm:px-[24px] py-[12px] gap-[12px] bg-[#FAFCFD] items-start sm:items-center"
    >
      <div className="flex gap-[12px] items-center">
        <img className="w-[12px] h-[16px]" src={icon} />
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
      {showRequestUpdate && (
        <button className="flex gap-[12px]">
          <img className="w-[16px] h-[16px] " src={pencil} />
          <div className="font-[Inter] font-medium tracking-[0] leading-[18px] text-[12px] flex justify-center items-center text-[#04203E]">
            <p className="">Request Update</p>
          </div>
        </button>
      )}
    </div>
  );
};
const details = [
  { icon: calendar, label: "Date of Birth", value: "15 May 2008" },
  { icon: gender, label: "Gender", value: "Female" },
  {
    icon: mail,
    label: "Aadhar",
    value: "1111 2222 3333 4444",
    showRequestUpdate: true,
  },
  { icon: blood, label: "Blood Group", value: "O+" },
  {
    icon: phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    showRequestUpdate: true,
  },
  {
    icon: mail,
    label: "Email",
    value: "alex.johnson@example.com",
    showRequestUpdate: true,
  },
  {
    icon: home,
    label: "Address",
    value: "123 School Lane, Education City, EC 12345",
    showRequestUpdate: true,
  },
];

const guardianDetails = [
  { icon: guardian, label: "Guardian Name", value: "Vijay Singh" },
  { icon: guardian, label: "Guardian Relation", value: "Father" },
  { icon: calendar, label: "Date of Birth", value: "15 May 2008" },
  { icon: gender, label: "Occupation", value: "Government employee" },
  {
    icon: phone,
    label: "Guardian Phone",
    value: "8089878685",
    showRequestUpdate: true,
  },
  {
    icon: mail,
    label: "Guardian Email",
    value: "vijaysingh2008@example.com",
    showRequestUpdate: true,
  },
  {
    icon: home,
    label: "Address",
    value: "123 School Lane, Education City, EC 12345",
    showRequestUpdate: true,
  },
];

const guardianDetails2 = [
  { icon: mail, label: "Guardian Name", value: "Sarah Singh" },
  { icon: phone, label: "Guardian Relation", value: "Mother" },
  { icon: calendar, label: "Date of Birth", value: "03 May 2012" },
  { icon: phone, label: "Occupation", value: "Government employee" },
  {
    icon: mail,
    label: "Guardian Phone",
    value: "8089878685",
    showRequestUpdate: true,
  },
  {
    icon: mail,
    label: "Guardian Email",
    value: "sarahsingh@example.com",
    showRequestUpdate: true,
  },
  {
    icon: home,
    label: "Address",
    value: "123 School Lane, Education City, EC 12345",
    showRequestUpdate: true,
  },
];

const AcademicDetails = [
  { icon: admission, label: "Admission Date", value: "05 September 2029" },
  { icon: admission, label: "Start Date", value: "03 November 2029" },
  { icon: school, label: "Previous School", value: "Lincoln Middle  School" },
  { icon: school, label: "Board", value: "CBSE" },
  { icon: admission, label: "Year of Completion", value: "2029" },
  { icon: grade, label: "Grade", value: "88%" },
  {
    icon: home,
    label: "Address",
    value: "123 School Lane, Education City, EC 12345",
  },
];

const Profile = () => {
  const isOdd = details.length % 2 !== 0;
  const lastIndex = details.length - 1;

  return (
    <>
      <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
        <div className="flex flex-col px-4  mt-4">
          {/* Header */}
          <div className="w-full h-[64px] bg-[#04203E] rounded-[12px] px-[24px] py-[18px] flex items-center">
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
                Asha Singh
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
                  Course: Computer Science
                </span>
                <span
                  className="text-[#FAFCFD] text-[14px] md:text-[16px]
 font-normal font-inter"
                >
                  Student ID: 2023BT01
                </span>
              </div>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="w-full h-[52px] bg-[#04203E] rounded-[12px] p-[12px] mt-[24px] shadow-[0px_4px_8px_0px_#00000033] flex items-center">
            <div
              className="w-[126px] h-[28px] text-[#FAFCFD] font-inter font-semibold text-[14px] md:text-[16px]
 leading-[28px]"
            >
              Personal Details
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-5 mb-5">
            {details.map((detail, idx) => {
              const isLastOddItem = isOdd && idx === lastIndex;
              return (
                <div key={idx} className={isLastOddItem ? "md:col-span-2" : ""}>
                  <DetailCard {...detail} />
                </div>
              );
            })}
          </div>
          {/*  Guardian Details Section */}

          <div className="w-full h-auto bg-[#04203E] rounded-[12px] p-[12px] mt-[24px] shadow-md flex items-center">
            <div className="text-[#FAFCFD] font-semibold text-[16px] md:text-[18px] leading-[28px]">
              Guardian Details
            </div>
          </div>

          {/* map  guardian1 */}

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-5 mb-5">
            {guardianDetails.map((detail, idx) => {
              const isLastOddItem = isOdd && idx === lastIndex;
              return (
                <div key={idx} className={isLastOddItem ? "md:col-span-2" : ""}>
                  <DetailCard {...detail} />
                </div>
              );
            })}
          </div>

          <hr className="text-[#04203E33]" />

          {/* gaurdian2  */}

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

          <div
            className="w-full
 h-[52px] bg-[#04203E] rounded-[12px] p-[12px] mt-[24px] shadow-[0px_4px_8px_0px_#00000033] flex items-center"
          >
            <div className="w-full h-[28px] text-[#FAFCFD] font-[inter] font-semibold text-[16px] leading-[28px]">
              Academic Details
            </div>
          </div>

          {/* academic details */}

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-5 mb-5">
            {AcademicDetails.map((detail, idx) => {
              const isLastOddItem = isOdd && idx === lastIndex;
              return (
                <div key={idx} className={isLastOddItem ? "md:col-span-2" : ""}>
                  <DetailCard {...detail} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
