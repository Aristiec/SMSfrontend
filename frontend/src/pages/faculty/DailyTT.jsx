import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const scheduleData = [
  {
    time: "9:00-10:00",
    subject: "Data Structure",
    code: "CS-4",
    instructor: "SK Shyamal",
    room: "Room - 101",
  },
  {
    time: "9:00-10:00",
    subject: "Data Structure",
    code: "CS-4",
    instructor: "SK Shyamal",
    room: "Room - 101",
  },
  {
    time: "9:00-10:00",
    subject: "Data Structure",
    code: "CS-4",
    instructor: "SK Shyamal",
    room: "Room - 101",
  },
  {
    time: "9:00-10:00",
    subject: "Data Structure",
    code: "CS-4",
    instructor: "SK Shyamal",
    room: "Room - 101",
  },
];

const DailyTT = () => {
  const [showModal, setShowModal] = useState(false);
  const [scheduleList, setScheduleList] = useState(scheduleData);
  const [formData, setFormData] = useState({
    classTiming: "",
    subject: "",
    professorName: "",
    roomNumber: "",
    batchName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Validate that all fields are filled
    if (
      !formData.classTiming ||
      !formData.subject ||
      !formData.professorName ||
      !formData.roomNumber ||
      !formData.batchName
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Create new schedule item
    const newScheduleItem = {
      time: formData.classTiming,
      subject: formData.subject,
      code: formData.batchName,
      instructor: formData.professorName,
      room: formData.roomNumber,
    };

    // Add to schedule list
    setScheduleList((prev) => [...prev, newScheduleItem]);

    // Close modal and reset form
    setShowModal(false);
    setFormData({
      classTiming: "",
      subject: "",
      professorName: "",
      roomNumber: "",
      batchName: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#E9EEF4] text-[#1F1D1D]  sm:mx-[20px] md:mx-[20px] lg:mx-[40px]">
      <header className="bg-[#04203e] flex justify-between items-center rounded-[12px] w-full max-w-7xl px-6 py-4 text-[#FAFCFD] font-[Inter] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather]">
          Daily Timetable
        </h1>
      </header>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#FAFCFD] rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#04203E] font-[Inter] text-[20px] font-semibold">
                Add Update
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#04203E] hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <input
                  type="text"
                  name="classTiming"
                  placeholder="Class timing"
                  value={formData.classTiming}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04203E] focus:border-transparent text-[#1F1D1D] placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04203E] focus:border-transparent text-[#1F1D1D] placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="professorName"
                  placeholder="Professor name"
                  value={formData.professorName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04203E] focus:border-transparent text-[#1F1D1D] placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="roomNumber"
                  placeholder="Room number"
                  value={formData.roomNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04203E] focus:border-transparent text-[#1F1D1D] placeholder-gray-500"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="batchName"
                  placeholder="Batch name"
                  value={formData.batchName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04203E] focus:border-transparent text-[#1F1D1D] placeholder-gray-500"
                />
              </div>
            </div>

            <button
              onClick={handleUpdate}
              className="w-full bg-[#04203E] text-[#FAFCFD] py-3 rounded-lg font-[Inter] font-semibold text-[16px] hover:bg-[#032a4a] transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-6 bg-[#FAFCFD] mt-5 rounded-lg">
        <div className="space-y-3">
          {scheduleList.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFCFD] rounded-lg border border-[#FAFCFD] p-4"
              style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-[#04203E] font-[Inter] text-[16px] font-bold min-w-20">
                    {item.time}
                  </div>
                  <div className="border-l border-[#717171] h-12 mx-4"></div>
                  <div className="flex flex-col">
                    <h3 className="text-[#04203E] font-[Inter] text-[16px] font-semibold">
                      {item.subject}
                    </h3>
                    <p className="text-[#04203E] font-[Inter] text-[16px] font-normal">
                      {item.code}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#04203E] font-[Inter] text-[16px] font-semibold">
                    {item.instructor}
                  </div>
                  <div className="text-[#04203E] font-[Inter] text-[16px] font-normal">
                    {item.room}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <header
        className="bg-[#04203e] flex justify-center items-center rounded-[12px] w-full max-w-7xl px-6 py-4 text-[#FAFCFD] font-[Inter] mx-auto h-[43px] mt-5 cursor-pointer hover:bg-[#032a4a] transition-colors"
        onClick={() => setShowModal(true)}
      >
        <Plus className="w-5 h-5 fill-[#FAFCFD]" />
        <h1 className="text-[16px] font-bold font-[Inter] ml-2"> Add Update</h1>
      </header>
    </div>
  );
};

export default DailyTT;
