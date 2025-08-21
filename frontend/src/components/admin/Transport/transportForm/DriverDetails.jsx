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
      route: "Route A"
    }
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
              <Phone className="w-5 h-5 text-gray-500 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Primary Phone
                </p>
                <p className="text-[#1F1D1D]">{driver.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4 flex items-start">
              <Mail className="w-5 h-5 text-gray-500 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Email Address
                </p>
                <p className="text-[#1F1D1D]">{driver.email}</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-gray-500 mr-3 mt-2" />
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
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              Personal Details
            </h3>

            <div className="mb-4 flex items-start">
              <Droplet className="w-5 h-5 text-black mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">Blood Group</p>
                <p className="text-[#1F1D1D]">{driver.bloodGroup}</p>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <Calendar className="w-5 h-5 text-gray-500 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Date of Birth
                </p>
                <p className="text-[#1F1D1D]">May 15, 1985</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-gray-500 mr-3 mt-2" />
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
              <FileText className="w-5 h-5 text-gray-500 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  License Number
                </p>
                <p className="text-[#1F1D1D]">DL-0420110012345</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-gray-500 mr-3 mt-2" />
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
              <FileText className="w-5 h-5 text-gray-500 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Vehicle Number
                </p>
                <p className="text-[#1F1D1D]">
                  {driver.assignedVehicle ? driver.assignedVehicle.id : 'Not Assigned'}
                </p>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Assigned Route
                </p>
                <p className="text-[#1F1D1D]">
                  {driver.assignedVehicle ? driver.assignedVehicle.route : 'Not Assigned'}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="w-5 h-5 flex items-center justify-center mr-3 mt-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </span>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Assignment Status
                </p>
                <p className={`font-medium ${driver.assignedVehicle ? 'text-green-600' : 'text-gray-500'}`}>
                  {driver.assignedVehicle ? 'Active' : 'Unassigned'}
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