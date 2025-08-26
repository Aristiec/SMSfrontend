import React, { useMemo, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import Dropdown from "../utils/Dropdown";

const branchLabels = [
  "CSE",
  "Mech",
  "EE", 
  "EEE",
  "IT",
  "ETC",
  "Civil",
  "Chem",
  "Dip"
];

const yearlyData = {
  "2025": {
    thisYear: [14500, 10000, 8000, 4000, 9500, 13500, 8000, 8000, 8000],
    lastYear: [8000, 4000, 12000, 12000, 10000, 12000, 8000, 12000, 12000]
  },
  "2024": {
    thisYear: [12000, 9000, 7000, 3000, 8500, 12000, 7000, 7000, 7000],
    lastYear: [7000, 3000, 11000, 11000, 9000, 11000, 7000, 11000, 11000]
  }
};

const pieData = {
  studentQuery: [
    { label: "Solved", value: 68, color: "#22c55e" },
    { label: "Remaining", value: 32, color: "#fb923c" }
  ],
  staffAssigned: [
    { label: "Assigned", value: 88, color: "#22c55e" },
    { label: "Remaining", value: 12, color: "#fb923c" }
  ]
};

const YearlyStudentDataAdmin = () => {
  const [course, setCourse] = useState("Department");
  const [year, setYear] = useState("Select Year");

  const barData = useMemo(() => {
    const selectedYear = year === "Select Year" ? "2025" : year;
    const { thisYear, lastYear } = yearlyData[selectedYear];
    return branchLabels.map((branch, idx) => ({
      branch,
      thisYear: thisYear[idx],
      lastYear: lastYear[idx]
    }));
  }, [year]);

  const courseOptions = ["B Tech.", "M Tech."];
  const yearOptions = ["2025", "2024"];

  return (
    <div className="w-full bg-white rounded-[12px] border border-[#E5E5E5] p-6">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        
        {/* Left Column - Headers, Filters, and Legend + Bar Chart */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Top Left Grid - Heading, Filters, and Legend */}
          <div className=" rounded-[8px] p-4 ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-[18px] font-[Inter] font-medium text-[#1F1D1D] leading-tight">
                  Yearly Student Data
                </h2>
                <div className="flex gap-3">
                  <div className="w-[85px]">
                    <Dropdown
                      options={courseOptions}
                      selected={course === "Department" ? "" : course}
                      onSelect={(option) => setCourse(option)}
                      placeholder="B Tech."
                      className="text-[12px] py-1 px-2 h-[30px] rounded-[4px] border-[#E5E5E5] font-normal flex items-center"
                      spanClassName="text-[#717171] text-[12px]"
                    />
                  </div>
                  <div className="w-[110px]">
                    <Dropdown
                      options={yearOptions}
                      selected={year === "Select Year" ? "" : year}
                      onSelect={(option) => setYear(option)}
                      placeholder="Select Year"
                      className="text-[12px] py-1 px-2 h-[30px] rounded-[4px] border-[#E5E5E5] font-normal flex items-center"
                      spanClassName="text-[#717171] text-[12px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#04BFDA] inline-block"></span>
                  <span className="text-[14px] font-[Inter] font-normal text-[#1F1D1D]">This year</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFA84A] inline-block"></span>
                  <span className="text-[14px] font-[Inter] font-normal text-[#1F1D1D]">Last year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Grid - Bar Chart */}
          <div className="bg-white rounded-[8px]  p-4 flex-1">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={barData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                barCategoryGap={45}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                <XAxis 
                  dataKey="branch" 
                  tick={{ fontSize: 12, fill: '#717171', fontFamily: 'Inter' }} 
                  axisLine={false} 
                  tickLine={false}
                  interval={0}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#717171', fontFamily: 'Inter' }} 
                  tickFormatter={v => `${v / 1000}k`} 
                  domain={[0, 16000]} 
                  axisLine={false} 
                  tickLine={false}
                  ticks={[2000, 4000, 6000, 8000, 10000, 12000, 14000]}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: 8, 
                    border: '1px solid #E5E5E5', 
                    fontSize: 12,
                    fontFamily: 'Inter'
                  }} 
                />
                <Bar 
                  dataKey="thisYear" 
                  fill="#04BFDA" 
                  radius={[2.5, 2.5, 0, 0]} 
                  name="This year" 
                  barSize={5}
                />
                <Bar 
                  dataKey="lastYear" 
                  fill="#FFA84A" 
                  radius={[2.5, 2.5, 0, 0]} 
                  name="Last year" 
                  barSize={5}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column - Full Height Pie Charts */}
        <div className="lg:col-span-1 flex flex-col gap-4 h-full">
          <div className="bg-white rounded-[12px] p-4 flex flex-col items-center  flex-1">
            <h3 className="text-[16px] font-[Inter] font-medium text-[#1F1D1D] mb-4">
              Student query
            </h3>
            <div className="w-[126px] h-[126px] flex items-center justify-center mb-4 relative">
              <ResponsiveContainer width={126} height={126}>
                <PieChart>
                  <Pie
                    data={pieData.studentQuery}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={63}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {pieData.studentQuery.map((entry, idx) => (
                      <Cell key={`cell-sq-${idx}`} fill={idx === 0 ? "#22c55e" : "#fb923c"} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
            </div>
            <div className="flex justify-center items-center gap-4">
              <span className="text-[12px] font-[Inter] font-medium text-[#22c55e]">
                68% Solved
              </span>
              <span className="text-[12px] font-[Inter] font-medium text-[#fb923c]">
                32% Remaining
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-4 flex flex-col items-center  flex-1">
            <h3 className="text-[16px] font-[Inter] font-medium text-[#1F1D1D] mb-4">
              Staff Assigned
            </h3>
            <div className="w-[126px] h-[126px] flex items-center justify-center mb-4 relative">
              <ResponsiveContainer width={126} height={126}>
                <PieChart>
                  <Pie
                    data={pieData.staffAssigned}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={63}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {pieData.staffAssigned.map((entry, idx) => (
                      <Cell key={`cell-sa-${idx}`} fill={idx === 0 ? "#22c55e" : "#fb923c"} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
           
            </div>
            <div className="flex justify-center items-center gap-4">
              <span className="text-[12px] font-[Inter] font-medium text-[#22c55e]">
                88% Assigned
              </span>
              <span className="text-[12px] font-[Inter] font-medium text-[#fb923c]">
                12% Remaining
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyStudentDataAdmin;