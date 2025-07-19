import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import StudentRoutes from "./routes/StudentRoutes";
import FacultyRoutes from "./routes/FacultyRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/authSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);
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
