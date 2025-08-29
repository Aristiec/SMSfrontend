import { Phone, Mail, MapPin, Clock, User } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   fetchHostelStaffByStudentId,
//   fetchEmergencyContacts,
// } from "../../../features/auth/authAPI";

export default function Contacts() {
  const [staffs, setStaffs] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);

  // const studentId = useSelector((state) => state.auth.user?.studentId);
  // const token = useSelector((state) => state.auth.user?.token);

  // 🔹 Mock Data
  const mockStaffs = [
    {
      fullName: "Mr. John Doe",
      designation: "Warden",
      phone: "+91 9876543210",
      email: "john.doe@hostel.edu",
      officeLocation: "Block A, Room 101",
      workingHours: "9 AM - 6 PM",
    },
    {
      fullName: "Ms. Priya Sharma",
      designation: "Assistant_Warden",
      phone: "+91 9123456780",
      email: "priya.sharma@hostel.edu",
      officeLocation: "Block B, Room 202",
      workingHours: "10 AM - 5 PM",
    },
  ];

  const mockEmergencyContacts = [
    {
      title: "Fire Department",
      description: "Call immediately in case of fire hazards.",
      phoneNumber: "101",
    },
    {
      title: "Ambulance",
      description: "Emergency medical services available 24/7.",
      phoneNumber: "102",
    },
    {
      title: "Police Station",
      description: "Report thefts, accidents or emergencies.",
      phoneNumber: "100",
    },
  ];

  useEffect(() => {
    // 🔹 Commented API calls
    // const fetchData = async () => {
    //   try {
    //     if (studentId && token) {
    //       const data = await fetchHostelStaffByStudentId(studentId, token);
    //       setStaffs(data);
    //     }
    //     if (token) {
    //       const emergency = await fetchEmergencyContacts(token);
    //       setEmergencyContacts(emergency);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchData();

    // 🔹 Use Mock Data
    setTimeout(() => {
      setStaffs(mockStaffs);
      setEmergencyContacts(mockEmergencyContacts);
    }, 500); // simulate loading
  }, []);

  return (
    <div className="w-full px-4 flex flex-col md:flex-row gap-6 flex-wrap justify-center">
      {/* Hostel Staffs */}
      <div className="w-full md:w-[48%] bg-[#FAFCFD] rounded-[8px] shadow-[0px_4px_8px_0px_#0000001F] p-6 flex flex-col gap-4">
        <h2 className="text-[16px] font-semibold">Hostel Staffs</h2>
        {staffs.length === 0 ? (
          <p>Loading...</p>
        ) : (
          staffs.map((staff, idx) => (
            <div
              key={idx}
              className="border border-[#71717166] rounded-[8px] p-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <User size={24} />
                <div>
                  <p className="text-[14px] font-medium">{staff.fullName}</p>
                  <p className="text-[12px] text-gray-500">
                    {staff.designation.replace("_", " ")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <span>{staff.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm break-words">
                <Mail size={16} />
                <span className="break-all">{staff.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                <span>{staff.officeLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>{staff.workingHours}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Emergency Contacts */}
      <div className="w-full md:w-[48%] bg-[#FAFCFD] rounded-[8px] shadow-[0px_4px_8px_0px_#0000001F] p-6 flex flex-col gap-4">
        <h2 className="text-[16px] font-semibold">Emergency Contacts</h2>

        {emergencyContacts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          emergencyContacts.map((contact, idx) => (
            <div
              key={idx}
              className="border border-[#71717166] rounded-[8px] p-6 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <p className="text-[14px] font-medium">{contact.title}</p>
                <span className="text-[12px] bg-[#FFEAEA] text-[#FF3B30] px-2 py-1 rounded-[4px]">
                  Emergency
                </span>
              </div>
              <p className="text-[12px] text-[#636363]">
                {contact.description}
              </p>
              <button className="w-fit bg-[#001F3F] text-white rounded-[8px] px-3 py-2 flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span className="truncate">{contact.phoneNumber}</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
