import React, { useState } from "react";
import Header from "../../components/admin/Transport/Header.jsx";
import LowerSection from "../../components/admin/Transport/LowerSection.jsx";

const Transport = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col px-4 gap-6 mt-4">
      <Header 
        currentTab={currentTab} 
        onAddClick={handleAddClick}
      />
      <LowerSection 
        onTabChange={setCurrentTab}
        showAddForm={showAddForm}
        onCloseForm={handleCloseForm}
      />
    </div>
  );
};

export default Transport;