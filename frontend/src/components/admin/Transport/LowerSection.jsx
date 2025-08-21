import React, { useState, useRef } from "react";
import { Route, MapPin, Car, Users, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Routes from "./Routes";
import Stoppages from "./Stoppages";
import Vehicles from "./Vehicle";
import Assign from "./Assign";
import Driver from "./Driver";
import AddRouteForm from "./transportForm/AddRouteForm";
import AddStoppageForm from "./transportForm/AddStoppageForm";
import AddVehicleForm from "./transportForm/AddVehicleForm";
import AddAssignForm from "./transportForm/AddAssignForm";
import AddDriverForm from "./transportForm/AddDriverForm";

const menuItems = [
  {
    title: "Routes",
  },
  {
    title: "Stoppages",
  },
  {
    title: "Vehicles",
  },
  {
    title: "Assign",
  },
  {
    title: "Driver",
  },
];

const LowerSection = ({ onTabChange, showAddForm, onCloseForm }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const vehiclesRef = useRef(null);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
    onTabChange(index);
  };

  // Function to add vehicle that will be passed to the form
  const handleAddVehicle = (newVehicle) => {
    console.log('LowerSection: Adding vehicle', newVehicle);
    if (vehiclesRef.current && vehiclesRef.current.addVehicle) {
      vehiclesRef.current.addVehicle(newVehicle);
      console.log('LowerSection: Vehicle added through ref');
    } else {
      console.error('LowerSection: Vehicle ref or addVehicle function not available');
    }
  };

  const renderAddForm = () => {
    switch (selectedIndex) {
      case 0: return <AddRouteForm onClose={onCloseForm} />;
      case 1: return <AddStoppageForm onClose={onCloseForm} />;
      case 2: return <AddVehicleForm onClose={onCloseForm} onAddVehicle={handleAddVehicle} />;
      case 3: return <AddAssignForm onClose={onCloseForm} />;
      case 4: return <AddDriverForm onClose={onCloseForm} />;
      default: return null;
    }
  };

  return (
    <>
      <section
        style={{ boxShadow: "0px 4px 8px 0px #0000003D" }}
        className="flex flex-col rounded-[12px] p-6 gap-6 bg-[#FAFCFD] w-full"
      >
        <div className="flex gap-8">
          {menuItems.map((item, index) => (
            <button
              onClick={() => handleTabChange(index)}
              className={`flex gap-2 rounded-[5px] p-1 font-medium text-[12px] leading-4 tracking-normal items-center transition-all duration-300 ease-in ${
                selectedIndex === index
                  ? "text-[#1F1D1D] border-b-1 border-[#1F1D1D]"
                  : "text-[#717171]"
              }`}
              key={index}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            key={selectedIndex}
          >
            {selectedIndex === 0 ? (
              <Routes />
            ) : selectedIndex === 1 ? (
              <Stoppages />
            ) : selectedIndex === 2 ? (
              <Vehicles ref={vehiclesRef} />
            ) : selectedIndex === 3 ? (
              <Assign />
            ) : selectedIndex === 4 ? (
              <Driver />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Add Form Overlay */}
      <AnimatePresence>
        {showAddForm && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div 
              className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40" 
              onClick={onCloseForm}
            ></div>
            <div className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {renderAddForm()}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LowerSection;