import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid, Tooltip } from 'recharts';

const Performance = () => {
  // Custom tick component for multi-line text
  const CustomTick = (props) => {
    const { x, y, payload } = props;
    const lines = payload.value.split('\n');
    
    return (
      <g transform={`translate(${x},${y})`}>
        {lines.map((line, index) => (
          <text
            key={index}
            x={0}
            y={index * 16 + 16}
            textAnchor="start"
            fill="#4C4C4C"
            fontSize="15.13"
            fontFamily="Inter"
            fontWeight="500"
            letterSpacing="0px"
            fontVariant="small-caps"
          >
            {line}
          </text>
        ))}
        {/* Pointing line - positioned to align with grid */}
        <line
          x1={0}
          y1={-8}
          x2={0}
          y2={8}
          stroke="#1F1D1D"
          strokeWidth="1.26"
        />
      </g>
    );
  };

  // Sample data for Internal Assessment Marks
  const assessmentData = [
    { subject: 'Data\nStructures', marks: 35 },
    { subject: 'Web\nDevelopment', marks: 45 },
    { subject: 'Artificial\nIntelligence', marks: 95 },
    { subject: 'Software\nEngineering', marks: 45 },
    { subject: 'Computer\nNetworks', marks: 85 },
    { subject: 'Database\nManagement\nSystem', marks: 70 }
  ];

  // Sample data for Grade Distribution
  const gradeData = [
    { name: 'A', value: 3, percentage: 60 },
    { name: 'B', value: 2, percentage: 40 },
    { name: 'C', value: 1, percentage: 20 }
  ];

  // Colors for the pie chart
  const COLORS = {
    'A': '#04203E', // Dark blue
    'B': '#D9D9D9', // Light gray
    'C': '#E02F2F'  // Red
  };

  // Sample data for Current Semester Performance
  const semesterData = [
    { subject: 'Data Structures and Algorithms', percentage: 34, grade: 'C', credits: 4 },
    { subject: 'Operating Systems', percentage: 59, grade: 'B+', credits: 4 },
    { subject: 'Database Management System', percentage: 80, grade: 'A+', credits: 4 },
    { subject: 'Computer Networks', percentage: 80, grade: 'A+', credits: 4 },
    { subject: 'Software Engineering', percentage: 80, grade: 'A+', credits: 4 },
    { subject: 'Artificial Intelligence', percentage: 80, grade: 'A+', credits: 4 },
    { subject: 'Web Development', percentage: 80, grade: 'A+', credits: 4 }
  ];

  // Function to get grade color
  const getGradeColor = (grade) => {
    if (grade.includes('A')) return {
      background: '#ECFDF7',
      border: '0.5px solid #10B981',
      color: '#10B981'
    }; // Green
    if (grade.includes('B')) return {
      background: '#FFF4ED',
      border: '0.5px solid #F97316',
      color: '#F97316'
    }; // Orange
    if (grade.includes('C')) return {
      background: '#FEF2F2',
      border: '0.5px solid #EF4444',
      color: '#EF4444'
    }; // Red
    return {
      background: '#F3F4F6',
      border: '0.5px solid #6B7280',
      color: '#6B7280'
    }; // Gray
  };

  return (
    <main className="mx-auto bg-[#E9EEF4] flex flex-col gap-8  font-[Inter]">
      <div className="flex flex-col px-2 gap-[32px] mt-4">
        
        {/* Charts Container */}
        <div className="flex flex-col xl:flex-row gap-6">
          
          {/* Internal Assessment Marks Chart */}
          <div className="flex-1 bg-white rounded-lg shadow-sm">
            <div className="bg-[#04203E] text-white px-6 py-4 rounded-t-lg">
              <h3 className="text-lg font-semibold">Internal Assessment Marks</h3>
            </div>
            <div className="p-4 h-[420]">
              <ResponsiveContainer width="100%" height={440}>
                <LineChart data={assessmentData} margin={{ top: 20, right: 84, left: 20, bottom: 10 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0051A7" />
                      <stop offset="62.5%" stopColor="#e2e8f0" />
                      <stop offset="81.25%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#FF0000" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="#e2e8f0" 
                    horizontal={true} 
                    vertical={true}
                  />
                  <XAxis 
                    dataKey="subject" 
                    axisLine={{ stroke: '#1F1D1D', strokeWidth: 1.26 }}
                    tickLine={false}
                    tick={<CustomTick />}
                    height={90}
                    interval={0}
                  />
                  <YAxis 
                    domain={[20, 100]}
                    ticks={[20, 40, 60, 80, 100]}
                    axisLine={{ stroke: '#1F1D1D', strokeWidth: 1.26 }}
                    tickLine={{ stroke: '#1F1D1D', strokeWidth: 1.26 }}
                    tick={{ 
                      fontSize: 13.87, 
                      fill: '#949494', 
                      fontFamily: 'Roboto', 
                      fontWeight: 500,
                      letterSpacing: '1.26px',
                      fontVariant: 'small-caps'
                    }}
                    width={40}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value, name) => [value, 'Marks']}
                    labelFormatter={(label) => label.replace(/\n/g, ' ')}
                  />
                  <Line 
                    type="linear" 
                    dataKey="marks" 
                    stroke="url(#lineGradient)" 
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Grade Distribution Chart */}
          <div className="w-full xl:max-w-sm bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Grade Distribution</h3>
              
              {/* Pie Chart */}
              <div className="flex justify-center mb-10 mt-16">
                <div className="relative">
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie
                        data={gradeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                      >
                        {gradeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-1">
                {gradeData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: COLORS[item.name] }}
                      ></div>
                      <span className="font-medium text-gray-700">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{item.value}</div>
                      <div className="text-sm text-gray-500">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Current Semester Performance */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div 
            className="flex justify-start items-center"
            style={{
              opacity: 1,
              paddingTop: '12px',
              paddingRight: '24px',
              paddingBottom: '12px',
              paddingLeft: '24px',
              borderRadius: '12px 12px 0 0',
              background: '#04203E'
            }}
          >
            <h2 className="text-white text-xl font-semibold">Current Semester Performance</h2>
          </div>
          
          {/* Subject Cards */}
          <div className="p-6 space-y-3">
            {semesterData.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col"
                style={{
                  gap: '8px',
                  opacity: 1,
                  paddingTop: '12px',
                  paddingRight: '24px',
                  paddingBottom: '12px',
                  paddingLeft: '24px',
                  borderRadius: '8px',
                  background: '#FAFCFD',
                  boxShadow: '0px 4px 8px 0px #0000001F'
                }}
              >
                {/* First Line: Subject Name, Grade, and Percentage */}
                <div className="flex items-center justify-between">
                  <h3 
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0%',
                      verticalAlign: 'middle',
                      color: '#1F1D1D'
                    }}
                  >
                    {item.subject}
                  </h3>
                  
                  <div className="flex items-center gap-4">
                    {/* Grade Badge */}
                    <div 
                      className="text-center"
                      style={{ 
                        gap: '4px',
                        opacity: 1,
                        paddingTop: '2px',
                        paddingRight: '6px',
                        paddingBottom: '2px',
                        paddingLeft: '6px',
                        borderRadius: '10px',
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '100%',
                        letterSpacing: '0px',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        ...getGradeColor(item.grade),
                        border: getGradeColor(item.grade).border
                      }}
                    >
                      {item.grade}
                    </div>
                    
                    {/* Percentage */}
                    <div 
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '15px',
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        verticalAlign: 'middle',
                        color: '#1F1D1D'
                      }}
                    >
                      {item.percentage}%
                    </div>
                  </div>
                </div>

                {/* Second Line: Progress Bar and Credits */}
                <div className="flex items-center justify-between">
                  {/* Progress Bar */}
                  <div className="flex-1 mr-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${item.percentage}%`,
                          backgroundColor: '#04203E'
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Credits */}
                  <div 
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '20px',
                      letterSpacing: '0%',
                      verticalAlign: 'middle',
                      color: '#717171'
                    }}
                  >
                    {item.credits} Credits
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Performance;