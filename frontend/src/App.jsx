import React from "react";
import Header from "./components/student/Header";
import Navbar from "./components/student/Navbar";

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

      <main
        className="flex-1 ml-64 p-6 overflow-auto"
        style={{ maxHeight: "calc(100vh - 72px)" }}
      >
        Your dashboard content here
      </main>
    </div>
  );
}

export default App;
