export const studentData = {
  name: "Asha Singh",
  id: "TRUB203020",
  program: "Computer Science",
  semester: "IV",
  email: "ashasinghCS@university.ariestic.edu.in",
  phone: "+1 (555) 123-4567",
  attendance: 92,
  gpa: 7.9,
  examsLeft: 5,
  avatar:
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
};

export const ongoingExamData = {
  title: "Mid-Term Examination - Sem IV",
  subject: "Database Management System",
  duration: 150,
  questions: 45,
  totalMarks: 100,
  endTime: "12:30 PM",
  date: "Sat, Nov 25, 2024, 10:00 AM",
  timeLeft: 42,
  systemCheckComplete: false,
};

export const examUpdates = [
  {
    type: "live",
    title: "Exam is now live",
    message:
      "DBMS exam has began. All students are required to join immediately. You have until 12:30 PM to complete the paper.",
    time: "Today, 10:00 AM",
  },
  {
    type: "reminder",
    title: "Exam Reminder",
    message:
      "DBMS exam starts in 10 minutes. All students must complete the system check and be ready to start on time.",
    time: "Today, 9:50 AM",
  },
  {
    type: "reminder",
    title: "Exam Reminder",
    message:
      "DBMS exam starts in 10 minutes. All students must complete the system check and be ready to start on time.",
    time: "Today, 9:50 AM",
  },
  {
    type: "reminder",
    title: "Exam Reminder",
    message:
      "DBMS exam starts in 10 minutes. All students must complete the system check and be ready to start on time.",
    time: "Today, 9:50 AM",
  },
];

export const upcomingExams = [
  {
    title: "Mid-Term Examination - Sem IV",
    subject: "Data Structures",
    duration: 90,
    questions: 45,
    type: "Quiz",
    marks: 100,
    date: "Sat, Nov 25, 2024, 10:00 AM",
    status: "Starting soon",
    backlog: false,
  },
  {
    title: "Programming Practical - Sem II",
    subject: "Python",
    duration: 120,
    questions: 5,
    type: "Lab",
    marks: 50,
    date: "Tue, Nov 26, 2024, 10:00 AM",
    status: "Starting soon",
    backlog: true,
  },
  {
    title: "Programming Practical - Sem IV",
    subject: "Web Development",
    duration: 120,
    questions: 5,
    type: "Lab",
    marks: 50,
    date: "Thu, Nov 28, 2024, 10:00 AM",
    status: "Starting soon",
    backlog: false,
  },
];

export const completedExams = [
  {
    title: "Final Examination - Sem IV",
    subject: "Artificial Intelligence",
    duration: 90,
    questions: 45,
    type: "Summative",
    marks: 100,
    date: "Tue, Nov 20, 2024, 10:00 AM",
    status: "Completed",
    backlog: false,
    resultAvailable: false,
  },
  {
    title: "Final Examination - Sem IV",
    subject: "Data Structures and Algorithms",
    duration: 90,
    questions: 45,
    type: "Summative",
    marks: 100,
    date: "Thu, Nov 22, 2024, 10:00 AM",
    status: "Completed",
    backlog: false,
    resultAvailable: false,
  },
  {
    title: "Final Examination - Sem III",
    subject: "Operating Systems",
    duration: 20,
    questions: 45,
    type: "Summative",
    marks: 100,
    date: "Wed, Aug 30, 2024, 10:00 AM",
    status: "Completed",
    backlog: false,
    resultAvailable: true,
  },
];
