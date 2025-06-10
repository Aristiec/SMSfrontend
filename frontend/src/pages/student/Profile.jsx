import React from "react";
import profileIcon from '../../assets/profile_profile.png';
import courseIcon from '../../assets/courseIcon_icon_profile.png';
import pencil from "../../assets/pencil.png";
import mail from "../../assets/mail.png";
import blood from "../../assets/blood.png";
import calendar from "../../assets/calendar.png";
import gender from "../../assets/gender.png";
import home from "../../assets/home.png";
import phone from "../../assets/phone.png";
import guardian from "../../assets/guardian.png";


const DetailCard = ({ icon, label, value, showRequestUpdate = false }) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
      className="flex justify-between rounded-[12px] px-[24px] py-[12px] gap-[12px] bg-[#FAFCFD] items-start "
    >
      <div className="flex gap-[12px] items-center">
        <img className="w-[17px] h-[16px]" src={icon} />
        <div className="flex flex-col gap-[8px] font-[Inter] font-medium">
          <p className=" text-[12px] leading-[16px] tracking-[0] text-[#04203E]">
            {label}
          </p>
          <p className=" flex justify-start text-[16px] leading-[24px tracking-[0] text-center text-[#1F1D1D]">
            {value}
          </p>
        </div>
      </div>
      {showRequestUpdate && (
        <button className="flex gap-[12px]">
          <img className="w-[16px] h-[17px] " src={pencil} />
          <div className="font-[Inter] font-medium tracking-[0] leading-[18px] text-[12px] flex justify-center items-center ">
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
  { icon: calendar, label: "Date of Birth", value: "15 May 2008"},
  { icon: gender, label: "Occupation", value: "Government employee" },
  { icon: phone, label: "Guardian Phone", value: "8089878685",  showRequestUpdate: true,},
  { icon: mail, label: "Guardian Email", value: "vijaysingh2008@example.com",  showRequestUpdate: true,},
  { icon: home, label: "Address", value: "123 School Lane, Education City, EC 12345",  showRequestUpdate: true, },
]

const guardianDetails2 = [
  { icon: mail, label: "Guardian Name", value: "Sarah Singh" },
  { icon: phone, label: "Guardian Relation", value: "Mother" },
  { icon: calendar, label: "Date of Birth", value: "03 May 2012"},
  { icon: phone, label: "Occupation", value: "Government employee" },
  { icon: mail, label: "Guardian Phone", value: "8089878685",  showRequestUpdate: true,},
  { icon: mail, label: "Guardian Email", value: "sarahsingh@example.com",  showRequestUpdate: true,},
  { icon: home, label: "Address", value: "123 School Lane, Education City, EC 12345",  showRequestUpdate: true, },
]

const AcademicDetails = [
  { icon: mail, label: "Admission Date", value: "05 September 2029" },
  { icon: phone, label: "Start Date", value: "03 November 2029" },
  { icon: mail, label: "Previous School", value: "Lincoln Middle  School" },
  { icon: phone, label: "Board", value: "CBSE" },
  { icon: mail, label: "Year of Completion", value: "2029"},
  { icon: mail, label: "Grade", value: "88%"},
  { icon: home, label: "Address", value: "123 School Lane, Education City, EC 12345"},
]



const Profile = () => {

   const isOdd = details.length % 2 !== 0;
  const lastIndex = details.length - 1;

  return <>



   <div className="ml-[40px] mt-[40px] font-[Inter]">
      {/* Header */}
      <div className="w-[full] h-[64px] bg-[#04203E] rounded-[12px] px-[24px] py-[18px] flex items-center">
        <div className="text-white font-bold text-[24px] leading-[28px] font-[Inter]">
          Student Profile
        </div>
      </div>

      {/* Profile Card */}
      <div className="w-[full] h-[144px] bg-[#04203E] rounded-[12px] mt-[25px] p-[24px] flex items-center gap-[32px] shadow-[0px_4px_8px_0px_#00000033]">
        {/* Left Image */}
        <img
          src={profileIcon}
          alt="Profile Icon"
          className="w-[96px] h-[96px] rounded-full object-cover"
        />

        {/* Right Info */}
        <div className="flex flex-col gap-[12px]">
          {/* Name */}
          <div className="text-white font-bold text-[24px] leading-[36px] font-inter">
            Asha Singh
          </div>

          {/* Course and ID */}
          <div className="flex items-center gap-[12px]">
            <img src={courseIcon} alt="Course Icon" className="w-[24px] h-[24px]" />
            <span className="text-white text-[16px] font-normal font-inter">
              Course: Computer Science
            </span>
            <span className="text-white text-[16px] font-normal font-inter">
              Student ID: 2023BT01
            </span>
          </div>
        </div>
      </div>
      

      {/* Personal Details Section */}
<div className="w-[full] h-[52px] bg-[#04203E] rounded-[12px] p-[12px] mt-[24px] shadow-[0px_4px_8px_0px_#00000033] flex items-center">
  <div className="w-[126px] h-[28px] text-[#FAFCFD] font-inter font-semibold text-[16px] leading-[28px]">
    Personal Details
  </div>

</div>

  <div className="w-full grid grid-cols-2 gap-[24px] mt-5">
    {details.map((detail, idx) => {
          const isLastOddItem = isOdd && idx === lastIndex;
          return (
            <div
              key={idx}
              className={isLastOddItem ? "md:col-span-2" : ""}
            >
              <DetailCard {...detail} />
            </div>
          );
        })}
  </div>
{/*  Guardian Details Section */}

<div className="w-[full] h-[52px] bg-[#04203E] rounded-[12px] p-[12px] mt-[24px] shadow-[0px_4px_8px_0px_#00000033] flex items-center">
  <div className="w-[full] h-[28px] text-[#FAFCFD] font-inter font-semibold text-[16px] leading-[28px]">
    Guardian Details
  </div>

</div>

{/* map  guardian1 */}

<div className="w-full grid grid-cols-2 gap-[24px] mt-5 mb-5">
    {guardianDetails.map((detail, idx) => {
          const isLastOddItem = isOdd && idx === lastIndex;
          return (
            <div
              key={idx}
              className={isLastOddItem ? "md:col-span-2" : ""}
            >
              <DetailCard {...detail} />
            </div>
          );
        })}
  </div>

  <hr  className="text-gray-400"/>

{/* gaurdian2  */}

<div className="w-full grid grid-cols-2 gap-[24px] mt-5 mb-5">
    {guardianDetails2.map((detail, idx) => {
          const isLastOddItem = isOdd && idx === lastIndex;
          return (
            <div
              key={idx}
              className={isLastOddItem ? "md:col-span-2" : ""}
            >
              <DetailCard {...detail} />
            </div>
          );
        })}
  </div>

  <div className="w-[full] h-[52px] bg-[#04203E] rounded-[12px] p-[12px] mt-[24px] shadow-[0px_4px_8px_0px_#00000033] flex items-center">
  <div className="w-[full] h-[28px] text-[#FAFCFD] font-inter font-semibold text-[16px] leading-[28px]">
    Academic Details
  </div>

</div>

{/* academic details */}

<div className="w-full grid grid-cols-2 gap-[24px] mt-5 mb-5">
    {AcademicDetails.map((detail, idx) => {
          const isLastOddItem = isOdd && idx === lastIndex;
          return (
            <div
              key={idx}
              className={isLastOddItem ? "md:col-span-2" : ""}
            >
              <DetailCard {...detail} />
            </div>
          );
        })}
  </div>

    </div>
  </>;
};

export default Profile;
