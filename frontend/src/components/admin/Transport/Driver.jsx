import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Edit,
  Trash2,
  Phone,
  Mail,
  Clock,
  Droplets,
  X,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DriverDetails from "./transportForm/DriverDetails";
import AddDriverForm from "./transportForm/AddDriverForm";

const initialDriversData = [
  {
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
    profileImage: null,
  },
  {
    id: "DRV008",
    name: "Rajeev Patel",
    phone: "+91 98765 43784",
    email: "rajeevpatel14@example.com",
    bloodGroup: "B+",
    experience: "5 yrs exp",
    assignedVehicle: {
      id: "UP-32-5555",
      type: "Bus",
      route: "Route C",
    },
    profileImage: null,
  },
  {
    id: "DRV003",
    name: "Naveen",
    phone: "+91 905748 38395",
    email: "naveen@example.com",
    bloodGroup: "A+",
    experience: "3 yrs exp",
    assignedVehicle: null,
    profileImage: null,
  },
];

const Driver = forwardRef((props, ref) => {
  const [showDriverDetails, setShowDriverDetails] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [driversData, setDriversData] = useState(initialDriversData);
  const [showConfirm, setShowConfirm] = useState(false);
  const [driverToDelete, setDriverToDelete] = useState(null);

  // Function to add a new driver
  const addDriver = (newDriver) => {
    console.log("Vehicles: addVehicle called with:", newDriver);
    if (newDriver && newDriver.id) {
      console.log("Vehicles: Adding vehicle to state");
      setDriversData((prev) => {
        // Check if vehicle with same ID already exists
        const exists = prev.some((driver) => driver.id === newDriver.id);
        if (exists) {
          console.warn("driver with this ID already exists");
          alert("A driver with this number already exists!");
          return prev;
        }

        // Add new vehicle at the beginning of the array
        const updated = [newDriver, ...prev];
        console.log("Drivers: Updated vehicles data:", updated);
        return updated;
      });
    } else {
      console.error("Driver: Invalid vehicle data:", newDriver);
    }
  };

  useImperativeHandle(ref, () => ({
    addDriver,
  }));

  // Handle view details button click

  const handleViewDetails = (driver) => {
    console.log("View details clicked for driver:", driver);
    setSelectedDriver(driver);
    setShowDriverDetails(true);
  };

  // Handle modal close
  const handleDetailsClose = () => {
    setShowDriverDetails(false);
    setSelectedDriver(null);
  };
  // 🔴 handle delete button
  const handleDeleteClick = (driver) => {
    setDriverToDelete(driver);
    setShowConfirm(true);
  };

  // 🔴 confirm delete
  const handleRemove = () => {
    setDriversData((prev) => prev.filter((d) => d.id !== driverToDelete.id));
    setShowConfirm(false);
    setDriverToDelete(null);
  };
  return (
    <div className="flex flex-col bg-[#FAFCFD] font-[Inter] rounded-[12px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#1F1D1D] font-[Inter]">
          Drivers
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-[23px] opacity-100">
        {driversData.map((driver, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-1/3 rounded-[8px] p-6 gap-3 opacity-100 border border-[#71717166] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] bg-white"
          >
            {/* Header with Driver Name and Action Icons */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                {/* Profile Picture Circle */}
                <div className="w-10 h-10 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center">
                  <span className="text-[#9CA3AF] text-xs font-medium">
                    {driver.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-[Inter] font-medium text-[16px] leading-[24px] text-[#1F1D1D]">
                    {driver.name}
                  </h3>
                  <span className="font-[Inter] text-[12px] leading-[16px] text-[#717171]">
                    ID: {driver.id}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-1">
                  <Edit size={16} className="text-[#0077FF]" />
                </button>
                <button className="p-1">
                  <Trash2
                    size={16}
                    className="text-[#FF3B30]"
                    onClick={() => handleDeleteClick(driver)}
                  />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-2">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#717171]" />
                <span className="font-[Inter] text-[12px] leading-[16px] text-[#717171]">
                  {driver.phone}
                </span>
                <div className="flex items-center gap-1 ml-auto">
                  <Clock size={12} className="text-[#717171]" />
                  <span className="font-[Inter] text-[10px] leading-[14px] text-[#717171]">
                    {driver.experience}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#717171]" />
                <span className="font-[Inter] text-[12px] leading-[16px] text-[#717171]">
                  {driver.email}
                </span>
              </div>
            </div>

            {/* Blood Group Badge */}
            <div className="flex items-center">
              <div className="flex flex-row gap-2 font-[Inter] font-medium text-[10px] leading-[14px] px-2 py-1 rounded-full text-[#DC2626] bg-[#FEE2E2] border border-[#FCA5A5]">
                <Droplets size={16} className="text-[#DC2626]" />{" "}
                {driver.bloodGroup} Blood Group
              </div>
            </div>

            {/* Assigned Vehicle Section */}
            <div className="flex flex-col gap-2 p-3 rounded-md bg-[#E9EEF4] border border-[#E5E7EB]">
              <span className="font-[Inter] font-medium text-[12px] leading-[16px] text-[#374151]">
                ASSIGNED VEHICLE
              </span>

              {driver.assignedVehicle ? (
                <div className="flex flex-col gap-1">
                  <span className="font-[Inter] font-medium text-[14px] leading-[20px] text-[#1F1D1D]">
                    {driver.assignedVehicle.id}
                  </span>
                  <span className="font-[Inter] text-[12px] leading-[16px] text-[#717171]">
                    {driver.assignedVehicle.type} •{" "}
                    {driver.assignedVehicle.route}
                  </span>
                </div>
              ) : (
                <span className="font-[Inter] text-[12px] leading-[16px] text-[#9CA3AF]">
                  NOT ASSIGNED TO ANY VEHICLE
                </span>
              )}
            </div>

            {/* View Full Details Button */}
            <button
              className="w-full py-2 px-4 mt-2 rounded-md border border-[#71717166] bg-white hover:bg-[#F0F8FF] transition-colors"
              onClick={() => handleViewDetails(driver)}
            >
              <span className="font-[Inter] font-medium text-[12px] leading-[16px] text-[#0077FF]">
                View Full Details
              </span>
            </button>
          </div>
        ))}
      </div>
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative">
            <button
              onClick={() => setShowConfirm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-red-500" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">
                Remove Driver
              </h2>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              Are you sure you want to remove driver{" "}
              <span className="font-medium">{driverToDelete?.name}</span>?
            </p>
            <p className="text-xs text-red-500 mb-4">
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleRemove}
                className="px-4 py-2 rounded-md bg-red-600 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Driver Details Modal */}
      <AnimatePresence>
        {showDriverDetails && selectedDriver && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"
              onClick={handleDetailsClose}
            ></div>
            <div className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={handleDetailsClose}
                  className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 text-xl leading-none bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                >
                  ×
                </button>

                {/* Driver Details Content */}
                <div className="p-6">
                  <DriverDetails driverData={selectedDriver} />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default Driver;
