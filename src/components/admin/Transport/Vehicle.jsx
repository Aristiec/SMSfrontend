import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Edit, Trash2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EditVehicleForm from "./transportForm/EditVehicleForm";

const initialVehiclesData = [
  {
    id: "UP-32-4591",
    type: "Bus",
    capacity: "40/40 Students",
    capacityValue: 100, // 40/40 = 100%
    assignedRoute: "Route A",
    isAtCapacity: true,
  },
  {
    id: "UP-32-1234",
    type: "Bus",
    capacity: "32/40 Students", 
    capacityValue: 80, // 32/40 = 80%
    assignedRoute: "Route A",
    isAtCapacity: false,
  },
  {
    id: "UP-32-7823",
    type: "Van",
    capacity: "10/15 Students",
    capacityValue: 67, // 10/15 = 67%
    assignedRoute: "Route B",
    isAtCapacity: false,
  },
];

const Vehicles = forwardRef((props, ref) => {
  const [vehiclesData, setVehiclesData] = useState(initialVehiclesData);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingVehicle, setDeletingVehicle] = useState(null);

  // Function to add new vehicle
  const addVehicle = (newVehicle) => {
    console.log('Vehicles: addVehicle called with:', newVehicle);
    if (newVehicle && newVehicle.id) {
      console.log('Vehicles: Adding vehicle to state');
      setVehiclesData(prev => {
        // Check if vehicle with same ID already exists
        const exists = prev.some(vehicle => vehicle.id === newVehicle.id);
        if (exists) {
          console.warn('Vehicle with this ID already exists');
          alert('A vehicle with this number already exists!');
          return prev;
        }
        
        // Add new vehicle at the beginning of the array
        const updated = [newVehicle, ...prev];
        console.log('Vehicles: Updated vehicles data:', updated);
        return updated;
      });
    } else {
      console.error('Vehicles: Invalid vehicle data:', newVehicle);
    }
  };

  // Function to update existing vehicle
  const updateVehicle = (originalId, updatedVehicle) => {
    console.log('Vehicles: updateVehicle called with:', originalId, updatedVehicle);
    setVehiclesData(prev => {
      const updated = prev.map(vehicle => 
        vehicle.id === originalId ? updatedVehicle : vehicle
      );
      console.log('Vehicles: Updated vehicles data:', updated);
      return updated;
    });
  };

  // Handle edit button click
  const handleEditClick = (vehicle) => {
    console.log('Edit clicked for vehicle:', vehicle);
    setEditingVehicle(vehicle);
    setShowEditForm(true);
  };

  // Handle edit form close
  const handleEditClose = () => {
    setShowEditForm(false);
    setEditingVehicle(null);
  };

  // Handle delete button click
  const handleDeleteClick = (vehicle) => {
    console.log('Delete clicked for vehicle:', vehicle);
    setDeletingVehicle(vehicle);
    setShowDeleteModal(true);
  };

  // Handle delete confirmation
  const handleDeleteConfirm = () => {
    if (deletingVehicle) {
      setVehiclesData(prev => 
        prev.filter(vehicle => vehicle.id !== deletingVehicle.id)
      );
      console.log('Vehicle deleted:', deletingVehicle.id);
      handleDeleteClose();
    }
  };

  // Handle delete modal close
  const handleDeleteClose = () => {
    setShowDeleteModal(false);
    setDeletingVehicle(null);
  };

  // Expose the addVehicle function to parent components
  useImperativeHandle(ref, () => ({
    addVehicle
  }));

  return (
    <div className="flex flex-col bg-[#FAFCFD] font-[Inter] rounded-[12px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#1F1D1D] font-[Inter]">Vehicles</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-100">
        {vehiclesData && vehiclesData.length > 0 ? vehiclesData.map((vehicle, index) => (
          vehicle ? (
          <div
            key={vehicle.id || index} // Use vehicle.id as key for better React performance
            className={`flex flex-col w-full rounded-lg p-6 gap-3 opacity-100 border shadow-md bg-white ${
              vehicle.isAtCapacity ? 'border-[#F9731666]' : 'border-[#71717166]'
            }`}
          >
            {/* Header with Vehicle ID and Action Icons */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="font-[Inter] font-medium text-base leading-6 tracking-normal text-[#1F1D1D]">
                  {vehicle.id}
                </h3>
                {vehicle.isAtCapacity && (
                  <AlertTriangle size={16} className="text-[#FF8A00]" />
                )}
              </div>
              <div className="flex gap-2">
                <button 
                  className="p-1"
                  onClick={() => handleEditClick(vehicle)}
                >
                  <Edit size={16} className="text-[#0077FF]" />
                </button>
                <button 
                  className="p-1"
                  onClick={() => handleDeleteClick(vehicle)}
                >
                  <Trash2 size={16} className="text-[#FF3B30]" />
                </button>
              </div>
            </div>

            {/* Vehicle Type */}
            <div>
              <span className="font-[Inter] font-normal text-xs leading-4 tracking-normal px-2 py-1 rounded-md text-[#0077FF] bg-[#E6F3FF]">
                {vehicle.type}
              </span>
            </div>

            {/* Capacity Section */}
            <div className="flex flex-row justify-between opacity-100">
              <span className="font-[Inter] font-medium text-sm leading-5 tracking-normal text-[#717171]">
                Capacity
              </span>
              
              {/* Capacity Text */}
              <span className="font-[Inter] font-normal text-sm leading-5 tracking-normal text-[#1F1D1D]">
                {vehicle.capacity}
              </span>
              {/* Progress Bar */}
              
              
              
            </div>
            <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    vehicle.isAtCapacity ? 'bg-[#FF8A00]' : 'bg-[#0077FF]'
                  }`}
                  style={{ width: `${vehicle.capacityValue}%` }}
                ></div>
              </div>

            {/* Assigned Route */}
            <div className="flex flex-col gap-1">
              <span className="font-[Inter] font-medium text-sm leading-5 tracking-normal text-[#717171]">
                Assigned Route
              </span>
              <span className="font-[Inter] font-normal text-sm leading-5 tracking-normal text-[#1F1D1D]">
                {vehicle.assignedRoute}
              </span>
            </div>

            {/* Capacity Warning */}
            {vehicle.isAtCapacity && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-[#FFF4E6]">
                <AlertTriangle size={16} className="text-[#FF8A00]" />
                <span className="font-[Inter] font-normal text-xs leading-4 tracking-normal text-[#FF8A00]">
                  This vehicle is at capacity
                </span>
              </div>
            )}
          </div>
          ) : null
        )) : (
          <div className="text-center text-[#717171] font-[Inter]">No vehicles available</div>
        )}
      </div>

      {/* Edit Vehicle Modal */}
      <AnimatePresence>
        {showEditForm && editingVehicle && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40" onClick={handleEditClose}></div>
            <div className="relative z-50 flex items-start  justify-center min-h-screen px-4 pt-16 max-sm:py-2 max-sm:px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <EditVehicleForm 
                  onClose={handleEditClose}
                  onUpdateVehicle={updateVehicle}
                  vehicleData={editingVehicle}
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Vehicle Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && deletingVehicle && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40" onClick={handleDeleteClose}></div>
            <div className="relative z-50 flex items-start justify-center min-h-screen px-4 pt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[400px] max-w-[90vw] bg-white rounded-lg p-6 shadow-lg"
              >
                {/* Close Button */}
                <button
                  onClick={handleDeleteClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
                >
                  ×
                </button>

                {/* Warning Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#DC2626]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z" />
                    </svg>
                  </div>
                  <h3 className="font-[Inter] font-semibold text-lg text-[#1F1D1D]">
                    Remove Vehicle
                  </h3>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <p className="font-[Inter] text-sm text-[#717171] mb-3">
                    Are you sure you want to remove vehicle '{deletingVehicle?.id}'?
                  </p>
                  <p className="font-[Inter] text-xs text-[#DC2626] font-medium">
                    This action cannot be undone.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleDeleteClose}
                    className="px-4 py-2 border border-[#E5E5E5] text-[#717171] rounded-md font-[Inter] text-sm font-medium hover:bg-[#F4F7FA] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteConfirm}
                    className="px-6 py-2 bg-[#DC2626] text-white rounded-md font-[Inter] text-sm font-medium hover:bg-[#B91C1C] transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

Vehicles.displayName = 'Vehicles';

export default Vehicles;