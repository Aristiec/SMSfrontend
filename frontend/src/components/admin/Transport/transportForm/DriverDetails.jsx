import React from "react";
import {
  Phone,
  Mail,
  Droplet,
  Calendar,
  Clock,
  FileText,
  MapPin,
} from "lucide-react";

const DriverDetails = ({ driverData }) => {
  // Use driverData if provided, otherwise fallback to default data
  const driver = driverData || {
    id: "DRV001",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.k@example.com",
    bloodGroup: "O+",
    experience: "8 yrs exp",
    assignedVehicle: {
      id: "UP-32-4591",
      type: "Bus",
      route: "Route A",
    },
  };
  return (
    <>
      <h1 className="text-2xl font-semibold text-[#1F1D1D]">Driver Details</h1>
      <div className=" mx-auto bg-white  p-6  ">
        {/* Header */}

        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            {/* Profile Image Placeholder */}
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center">
              {/* <span className="text-gray-400">IMG</span> */}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#1F1D1D]">
                {driver.name}
              </h2>
              <p className="text-gray-500">Driver ID: {driver.id}</p>
            </div>
          </div>
          {/* <button className="text-gray-400 hover:text-gray-600 text-xl">✕</button> */}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="p-2 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              Contact Information
            </h3>

            {/* Primary Phone */}
            <div className="mb-4 flex items-start">
              <Phone className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Primary Phone
                </p>
                <p className="text-[#1F1D1D]">{driver.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4 flex items-start">
              <Mail className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Email Address
                </p>
                <p className="text-[#1F1D1D]">{driver.email}</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Emergency Contact
                </p>
                <p className="text-[#1F1D1D]">+91 87654 32109</p>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-3">
              Personal Details
            </h3>

            <div className="mb-4 flex items-start">
              {/* <Droplet className="w-5 h-5 text-black mr-3 mt-2" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                className=" text-gray-500 mr-3 mt-2"
                viewBox="0 0 16 18"
                fill="none"
              >
                <g clip-path="url(#clip0_4935_25625)">
                  <path
                    d="M10.668 3.66668H16.0012M13.3346 1V6.33336"
                    stroke="#717171"
                    stroke-width="1.96923"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.3332 1.88881L6.00785 1.31014C5.92441 1.21286 5.82091 1.13478 5.70446 1.08125C5.58801 1.02772 5.46137 1 5.3332 1C5.20504 1 5.07839 1.02772 4.96194 1.08125C4.84549 1.13478 4.742 1.21286 4.65855 1.31014L5.3332 1.88881ZM5.3332 1.88881L4.65855 1.31014L4.65766 1.31192L4.65322 1.31548C4.58404 1.3962 4.51647 1.47829 4.45056 1.5617C3.68211 2.52565 2.97922 3.54008 2.34661 4.59816C1.21508 6.50217 0 9.11818 0 11.6666L5.3332 16.1111C5.3332 14.0578 6.67956 9.19064 7.7702 7.35596C8.35925 6.37089 5.11869 3.57692 5.83363 2.67904L5.99896 2.47815L6.00607 2.46926L6.00785 2.46748L5.3332 1.88881ZM10.6664 11.6666C10.6664 9.11818 9.45132 6.50217 8.3198 4.59816C7.68719 3.54008 6.98429 2.52565 6.21585 1.5617L6.01319 1.31548L6.00963 1.31192L6.00785 1.31014L5.3332 1.88881L4.65855 2.46748L4.66033 2.46926L4.66744 2.47815C4.72377 2.5441 4.77889 2.61107 4.83277 2.67904C5.54771 3.57692 6.20189 4.52154 6.79095 5.50661C7.8807 7.34128 4.45056 8.79281 4.45056 10.8462L10.6664 11.6666ZM4.45056 10.8462C4.45056 11.7892 3.01339 12.0255 2.34661 12.6923C1.67983 13.3591 6.27617 15.2222 5.3332 15.2222V17C6.74766 17 8.10418 16.4381 9.10435 15.4379C10.1045 14.4377 10.6664 13.0811 10.6664 11.6666L4.45056 10.8462ZM5.3332 15.2222C4.39023 15.2222 3.48589 14.8476 2.81911 14.1808C2.15233 13.514 5.3332 17.0541 5.3332 16.1111L0 11.6666C0 13.0811 0.561889 14.4377 1.56206 15.4379C2.56223 16.4381 3.91875 17 5.3332 17V15.2222Z"
                    fill="#717171"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4935_25625">
                    <rect width="16" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-600">Blood Group</p>
                <p className="text-[#1F1D1D]">{driver.bloodGroup}</p>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <Calendar className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Date of Birth
                </p>
                <p className="text-[#1F1D1D]">May 15, 1985</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Driving Experience
                </p>
                <p className="text-[#1F1D1D]">{driver.experience}</p>
              </div>
            </div>
          </div>

          {/* License Information */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              License Information
            </h3>

            <div className="mb-4 flex items-start">
              <FileText className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  License Number
                </p>
                <p className="text-[#1F1D1D]">DL-0420110012345</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  License Expiry Date
                </p>
                <p className="text-[#1F1D1D]">April 30, 2026</p>
              </div>
            </div>
          </div>

          {/* Assignment */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              Assignment
            </h3>

            <div className="mb-4 flex items-start">
              <FileText className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Vehicle Number
                </p>
                <p className="text-[#1F1D1D]">
                  {driver.assignedVehicle
                    ? driver.assignedVehicle.id
                    : "Not Assigned"}
                </p>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Assigned Route
                </p>
                <p className="text-[#1F1D1D]">
                  {driver.assignedVehicle
                    ? driver.assignedVehicle.route
                    : "Not Assigned"}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="w-5 h-5 flex items-center justify-center mr-3 mt-2">
                <span className="w-4 h-4 rounded-full bg-[#10B981]"></span>
              </span>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Assignment Status
                </p>
                <p
                  className={`font-medium ${
                    driver.assignedVehicle ? "text-[#1F1D1D]" : "text-gray-500"
                  }`}
                >
                  {driver.assignedVehicle ? "Active" : "Unassigned"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverDetails;
