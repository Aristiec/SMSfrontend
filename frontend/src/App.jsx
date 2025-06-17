import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import StudentRoutes from "./routes/StudentRoutes";
import FacultyRoutes from "./routes/FacultyRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {StudentRoutes()}
        {FacultyRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
