
import React from "react";
import Header from "./components/student/Header";
import Navbar from "./components/student/Navbar";
import WelcomeBanner from "./components/student/dashboard/WelcomeBanner";
import StatsCard from "./components/student/dashboard/StatsCard";


function App() {
  return (
    <div>
      
      <Header />

     
      <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-auto scrollbar-hide">
        <Navbar />
      </nav>

      <main className="pt-[72px] ml-[240px] p-6 min-h-screen bg-[#f5f7fa]">
        <WelcomeBanner />
        <StatsCard />
      </main>
    </div>
  );
}

export default App;
