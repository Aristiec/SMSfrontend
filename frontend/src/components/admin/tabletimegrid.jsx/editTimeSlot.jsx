import React, { useState } from "react";
import { Trash, Save } from "lucide-react";
import Dropdown from "../../utils/Dropdown";

const EditTimeSlot = () => {
  const [semester, setSemester] = useState("");
  const [faculty, setFaculty] = useState("");

  return (
    <div className="max-w-md mx-auto p-1 bg-white ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Time Slot</h1>

      <div className="space-y-6">
        {/* Day and Time */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Monday</h2>
          <p className="text-gray-600">9:30 - 10:15 AM</p>
        </div>

        {/* Semester Dropdown */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Semester</h2>
          <Dropdown
            options={["Semester 1", "Semester 2", "Semester 3", "Semester 4"]}
            onSelect={(value) => setSemester(value)}
            placeholder="Select Semester"
            selected={semester}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            spanClassName="truncate"
          />
        </div>

        {/* Faculty Dropdown */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Faculty</h2>
          <Dropdown
            options={[
              "Prof. Sharma",
              "Prof. Gupta",
              "Prof. Iyer",
              "Prof. Khan",
            ]}
            onSelect={(value) => setFaculty(value)}
            placeholder="Select Faculty"
            selected={faculty}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            spanClassName="truncate"
          />
        </div>

        {/* Room Input (Optional) */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">
            Room (Optional)
          </h2>
          <input
            type="text"
            placeholder="e.g., Room 101, Lab A"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4">
          <button className="px-4 py-2 text-gray-700 font-medium border items-center justify-center border-gray-300 rounded-md hover:bg-gray-50">
            <Trash size={22} className="inline mr-2" />
            Clear Slot
          </button>
          <button className="px-4 py-2 bg-[#0A2A47] text-white font-medium rounded-md hover:bg-[#0A2A47]">
            <Save size={22} className="inline mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTimeSlot;

// import React from "react";
// import {
//   Phone,
//   Mail,
//   Droplet,
//   Calendar,
//   Clock,
//   FileText,
//   MapPin,
// } from "lucide-react";

// const DriverDetails = () => {
//   return (
//     <>
//       <h1 className="text-2xl font-semibold text-[#1F1D1D]">Driver Details</h1>
//       <div className=" mx-auto bg-white  p-6  ">
//         {/* Header */}

//         <div className="flex items-start justify-between mb-6">
//           <div className="flex items-center space-x-4">
//             {/* Profile Image Placeholder */}
//             <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center">
//               {/* <span className="text-gray-400">IMG</span> */}
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-[#1F1D1D]">
//                 Rajesh Kumar
//               </h2>
//               <p className="text-gray-500">Driver ID: DRV001</p>
//             </div>
//           </div>
//           {/* <button className="text-gray-400 hover:text-gray-600 text-xl">✕</button> */}
//         </div>

//         {/* Details Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <div className="p-2 bg-gray-50 rounded-lg">
//             <h3 className="text-sm font-medium text-gray-500 mb-3">
//               Contact Information
//             </h3>

//             {/* Primary Phone */}
//             <div className="mb-4 flex items-start">
//               <Phone className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Primary Phone
//                 </p>
//                 <p className="text-[#1F1D1D]">+91 98765 43210</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-4 flex items-start">
//               <Mail className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Email Address
//                 </p>
//                 <p className="text-[#1F1D1D]">rajesh@gmail.com</p>
//               </div>
//             </div>

//             {/* Emergency Contact */}
//             <div className="flex items-start">
//               <Phone className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Emergency Contact
//                 </p>
//                 <p className="text-[#1F1D1D]">+91 87654 32109</p>
//               </div>
//             </div>
//           </div>

//           {/* Personal Details */}
//           <div className="p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-sm font-medium text-gray-500 mb-3">
//               Personal Details
//             </h3>

//             <div className="mb-4 flex items-start">
//               <Droplet className="w-5 h-5 text-black mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Blood Group</p>
//                 <p className="text-[#1F1D1D]">O+</p>
//               </div>
//             </div>

//             <div className="mb-4 flex items-start">
//               <Calendar className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Date of Birth
//                 </p>
//                 <p className="text-[#1F1D1D]">May 15, 1985</p>
//               </div>
//             </div>

//             <div className="flex items-start">
//               <Clock className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Driving Experience
//                 </p>
//                 <p className="text-[#1F1D1D]">8 years</p>
//               </div>
//             </div>
//           </div>

//           {/* License Information */}
//           <div className="p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-sm font-medium text-gray-500 mb-3">
//               License Information
//             </h3>

//             <div className="mb-4 flex items-start">
//               <FileText className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   License Number
//                 </p>
//                 <p className="text-[#1F1D1D]">DL-0420110012345</p>
//               </div>
//             </div>

//             <div className="flex items-start">
//               <Calendar className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   License Expiry Date
//                 </p>
//                 <p className="text-[#1F1D1D]">April 30, 2026</p>
//               </div>
//             </div>
//           </div>

//           {/* Assignment */}
//           <div className="p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-sm font-medium text-gray-500 mb-3">
//               Assignment
//             </h3>

//             <div className="mb-4 flex items-start">
//               <FileText className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Vehicle Number
//                 </p>
//                 <p className="text-[#1F1D1D]">UP-32-4591</p>
//               </div>
//             </div>

//             <div className="mb-4 flex items-start">
//               <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-2" />
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Assigned Route
//                 </p>
//                 <p className="text-[#1F1D1D]">Route A</p>
//               </div>
//             </div>

//             <div className="flex items-start">
//               <span className="w-5 h-5 flex items-center justify-center mr-3 mt-2">
//                 <span className="w-3 h-3 rounded-full bg-green-500"></span>
//               </span>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">
//                   Assignment Status
//                 </p>
//                 <p className="text-green-600 font-medium">Active</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DriverDetails;
