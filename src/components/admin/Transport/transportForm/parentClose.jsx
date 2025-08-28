import React, { useState } from "react";
import AddRoutePopup from "./AddRouteForm";
export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        + Add Route
      </button>

      {showPopup && <AddRoutePopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
