// src/data/mockNotices.js
export const mockNotices = [
  {
    id: 1,
    type: "Alert",
    iconType: "alert", // 🔑 store type, not JSX
    labelColor: "text-[#EF4444]",
    date: "May 20, 2023",
    title: "Fee Payment Due",
    plaindescription:
      "Final deadline for Semester 4 tuition fee payment is June 25, 2025. Students with pending dues must pay before the deadline to avoid fines or restrictions. Contact accounts@university.edu for queries.",
    bgColor: "bg-[#FEF2F2]",
    postedBy: "Accounts Department",
  },
  {
    id: 2,
    type: "General",
    iconType: "general",
    labelColor: "text-[#1D4ED8]",
    date: "May 20, 2023",
    title: "End of Semester Exams Schedule",
    plaindescription:
      "Semester 4 exams will be held from July 10 to July 24, 2025. Timetable will be uploaded by June 20. Contact exams@university.edu for conflicts or accommodations.",
    bgColor: "bg-[#F4F7FA]",
    postedBy: "Examination Cell",
  },
  {
    id: 3,
    type: "Event",
    iconType: "event",
    labelColor: "text-[#059669]",
    date: "May 20, 2023",
    title: "Interclass Football Competition",
    plaindescription:
      "Annual Interclass Football Tournament from Aug 5–10, 2025 at Main Sports Ground. Register by July 25 under Events section. Contact sports@university.edu for details.",
    bgColor: "bg-[#ECFDF7]",
    postedBy: "Sports Department",
  },
];
