import React from "react";
import Header from "./components/student/Header";
import Navbar from "./components/student/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <Header />
      <div className="flex">
        <Navbar />
        <main className="flex-1 p-6">Your dashboard content here</main>
      </div>
    </div>
  );
}

export default App;
