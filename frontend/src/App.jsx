
import React from "react";
import Header from "./components/student/Header";
import Navbar from "./components/student/Navbar";
import WelcomeBanner from "./components/student/dashboard/WelcomeBanner";
import StatsCard from "./components/student/dashboard/StatsCard";


function App() {
  return (
    <div
      className="min-h-screen bg-[#f5f7fa] flex"
      style={{ paddingTop: "72px" }}
    >
      <Header />
      <nav className="w-[240px] fixed left-0 bottom-0 bg-white shadow-md overflow-auto top-[72px] scrollbar-hide">
        <Navbar />

               </nav>
        <main className="flex-1 p-6">
          
          <WelcomeBanner/>
          <StatsCard/>
          </main>
          
    </div>
    
  );
}

export default App;
