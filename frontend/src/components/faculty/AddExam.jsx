import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import Dropdown from '../utils/Dropdown';
import CustomCalendar from '../utils/CustomCalendar';

function Addexam({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    batch: '',
    date: '',
    startTime: '',
    endTime: '',
    roomNumber: '',
    totalStudents: '',
    totalMarks: '',
    semester: ''
  });

  const [showCalendar, setShowCalendar] = useState(false);

  const batchOptions = ['Batch A', 'Batch B', 'Batch C', 'Batch D', 'Batch E'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="w-[500px] h-[900px] rounded-[8px] bg-[#FFFFFF] p-[20px] gap-[10px] flex flex-col relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <X size={20} />
      </button>

      <div className="w-[460px] h-[801px] flex flex-col gap-[32px]">
        <h2 className="font-[Inter] font-semibold text-[20px] text-[#1F1D1D]">Schedule New Exams</h2>

        <div className="flex flex-col gap-[32px]">
          {/* Batch Dropdown */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[16px] text-[#1F1D1D]">Batch</label>
            <Dropdown
              options={batchOptions}
              onSelect={(selected) => setFormData({ ...formData, batch: selected })}
              placeholder="Select batch"
              selected={formData.batch}
              className="w-[460px] h-[43px]"
            />
          </div>

          {/* Date with CustomCalendar */}
          <div className="flex flex-col gap-[8px] relative">
            <label className="font-[Inter] text-[16px] text-[#1F1D1D]">Date</label>
            <div className="relative">
              <input
                type="text"
                value={formData.date}
                name="date"
                readOnly
                placeholder="Select date"
                className="w-[460px] h-[43px] rounded-[8px] border border-[#CCCCCC] px-[12px] py-[12px] pr-[40px] text-[14px] text-[#1F1D1D] placeholder-gray-400 cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setShowCalendar(true)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <Calendar size={18} />
              </button>
            </div>
            {showCalendar && (
              <div className="absolute top-[80px] z-10">
                <CustomCalendar setChooseDate={(val) => setFormData({ ...formData, date: val })} setShow={setShowCalendar} />
              </div>
            )}
          </div>

          {/* Time Fields */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[16px] text-[#1F1D1D]">Time</label>
            <div className="flex gap-[16px]">
              <input
                type="number"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                placeholder="Enter start time"
                className="w-[222px] h-[43px] rounded-[8px] border border-[#CCCCCC] px-[12px] py-[12px] text-[14px] placeholder-gray-400"
              />
              <input
                type="number"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                placeholder="Enter end time"
                className="w-[222px] h-[43px] rounded-[8px] border border-[#CCCCCC] px-[12px] py-[12px] text-[14px] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Other Fields */}
          {[
            { label: 'Room Number', name: 'roomNumber', placeholder: 'Enter room number' },
            { label: 'Total Students', name: 'totalStudents', placeholder: 'Enter total number of students', type: 'number' },
            { label: 'Total Marks', name: 'totalMarks', placeholder: 'Enter marks', type: 'number' },
            { label: 'Semester', name: 'semester', placeholder: 'Enter semester' }
          ].map(({ label, name, placeholder, type = 'text' }) => (
            <div className="flex flex-col gap-[8px]" key={name}>
              <label className="font-[Inter] text-[16px] text-[#1F1D1D]">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-[460px] h-[43px] rounded-[8px] border border-[#CCCCCC] px-[12px] py-[12px] text-[14px]"
              />
            </div>
          ))}

          <button
            type="button"
            className="w-[460px] h-[43px] rounded-[8px] bg-[#0077FF] text-white font-medium text-[16px] hover:bg-[#0066CC] transition-all"
          >
            Schedule New Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addexam;
