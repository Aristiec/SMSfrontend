import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import Dropdown from './Dropdown';

function EditVehicleForm({ onClose, onUpdateVehicle, vehicleData }) {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    vehicleType: 'Bus',
    capacity: '',
    assignRoute: 'Route A'
  });

  const vehicleTypeOptions = ['Bus', 'Van', 'Mini Bus'];
  const routeOptions = ['Route A', 'Route B', 'Route C'];

  // Pre-fill form with vehicle data when component mounts
  useEffect(() => {
    if (vehicleData) {
      // Extract capacity number from "32/40 Students" format
      const capacityMatch = vehicleData.capacity.match(/(\d+)\/(\d+)/);
      const maxCapacity = capacityMatch ? capacityMatch[2] : '';
      
      setFormData({
        vehicleNumber: vehicleData.id || '',
        vehicleType: vehicleData.type || 'Bus',
        capacity: maxCapacity,
        assignRoute: vehicleData.assignedRoute || 'Route A'
      });
    }
  }, [vehicleData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create updated vehicle object
    const updatedVehicle = {
      ...vehicleData, // Keep existing data like capacityValue, isAtCapacity, etc.
      id: formData.vehicleNumber,
      type: formData.vehicleType,
      capacity: `${vehicleData.capacity.split('/')[0]}/${formData.capacity} Students`, // Keep current occupancy
      assignedRoute: formData.assignRoute,
    };
    
    console.log('Edit form submitted with vehicle:', updatedVehicle);
    console.log('onUpdateVehicle function:', onUpdateVehicle);
    
    // Pass the updated vehicle to parent component if handler exists
    if (onUpdateVehicle && typeof onUpdateVehicle === 'function') {
      onUpdateVehicle(vehicleData.id, updatedVehicle); // Pass original ID and new data
      console.log('Vehicle updated successfully');
    } else {
      console.error('onUpdateVehicle function not available or not a function');
    }
    
    onClose();
  };

  return (
    <div 
      className="w-[720px] max-w-[90vw] h-auto bg-[#FAFCFD] gap-10 flex flex-col relative shadow-lg overflow-y-auto"
      style={{
        borderRadius: "12px",
        padding: "24px",
        opacity: 1
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 max-sm:top-4 max-sm:right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>

      <div className="w-full flex flex-col gap-[24px]">
        <h2 className="font-[Inter] font-semibold text-[20px] text-[#1F1D1D]">Edit Vehicle</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* First Row - Vehicle Number and Vehicle Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {/* Vehicle Number */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] text-[14px] text-[#717171]">Vehicle Number</label>
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleInputChange}
                placeholder="e.g. UP-32-4591"
                className="w-full h-[48px] rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
                required
              />
            </div>

            {/* Vehicle Type */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] text-[14px] text-[#717171]">Vehicle Type</label>
              <Dropdown
                options={vehicleTypeOptions}
                selected={formData.vehicleType}
                onSelect={(option) => setFormData(prev => ({ ...prev, vehicleType: option }))}
                placeholder="Select Vehicle Type"
                className="w-full border border-[#E5E5E5] rounded-[8px] px-3 py-3 text-[14px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#04203e]"
              />
            </div>
          </div>

          {/* Second Row - Capacity and Assign Route */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {/* Capacity */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] text-[14px] text-[#717171]">Capacity</label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
                placeholder="40"
                min="1"
                max="100"
                className="w-full h-[48px] rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
                required
              />
            </div>

            {/* Assign Route */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-[Inter] text-[14px] text-[#717171]">Assign Route</label>
              <Dropdown
                options={routeOptions}
                selected={formData.assignRoute}
                onSelect={(option) => setFormData(prev => ({ ...prev, assignRoute: option }))}
                placeholder="Select Route"
                className="w-full border border-[#E5E5E5] rounded-[8px] px-3 py-3 text-[14px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#04203e]"
              />
            </div>
          </div>

          {/* Upload Documents and Submit Buttons */}
          <div className="flex justify-between items-center gap-4">
            <input
              type="file"
              id="edit-vehicle-documents"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => {
                // Handle file upload logic here
                console.log('Files selected:', e.target.files);
              }}
            />
            <label
              htmlFor="edit-vehicle-documents"
              className="w-auto px-6 h-[48px] rounded-[8px] border border-[#717171] text-[14px] text-[#717171] cursor-pointer hover:border-[#04203e] transition-colors flex items-center justify-center gap-2"
            >
              Upload Documents
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-auto px-6 h-[48px] rounded-[8px] bg-[#04203E] text-white font-medium text-[14px] hover:bg-[#052a4d] transition-all flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditVehicleForm;
