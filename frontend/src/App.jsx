import React from "react";
import Header from "./components/student/Header";
import Navbar from "./components/student/Navbar";
import WelcomeBanner from "./components/student/dashboard/WelcomeBanner";
import StatsCard from "./components/student/dashboard/StatsCard";


function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <Header />
      <div className="flex">
        <Navbar />
         
        <main className="flex-1 p-6">
          
          <WelcomeBanner/>
          <StatsCard/>
          </main>
          
        
      </div>
     
    </div>
    
  );
}

export default App;
