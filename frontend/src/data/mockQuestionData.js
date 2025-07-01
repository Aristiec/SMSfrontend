export const mockQuestions = [
  {
    id: 1,
    status: "unanswered",
    question: "What is a primary key in a relational database?",
    options: [
      "A field that uniquely identifies each record in a table",
      "A field that can contain duplicate values",
      "A field that links two tables together",
      "A field that stores foreign key references",
    ],
    correctAnswer: 0,
    selectedAnswer: null,
  },
  {
    id: 2,
    status: "unanswered",
    question: "What is normalization in databases?",
    options: [
      "The process of increasing redundancy",
      "A way to speed up SQL queries",
      "The process of organizing data to reduce redundancy",
      "A method of encrypting data",
    ],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 3,
    status: "unanswered",
    question: "What is a foreign key?",
    options: [
      "A key that uniquely identifies a row",
      "A key used for indexing",
      "A key that links two tables",
      "A key used only in NoSQL databases",
    ],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 4,
    status: "unanswered",
    question: "Which of the following is NOT an ACID property?",
    options: ["Atomicity", "Consistency", "Isolation", "Duplication"],
    correctAnswer: 3,
    selectedAnswer: null,
  },
  {
    id: 5,
    status: "unanswered",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "System Query Language",
      "Simplified Query Language",
      "Sequential Query Language",
    ],
    correctAnswer: 0,
    selectedAnswer: null,
  },
  {
    id: 6,
    status: "unanswered",
    question: "What is the purpose of an index in a database?",
    options: [
      "To delete duplicate records",
      "To speed up data retrieval",
      "To enforce constraints",
      "To normalize data",
    ],
    correctAnswer: 1,
    selectedAnswer: null,
  },
  {
    id: 7,
    status: "unanswered",
    question: "Which SQL command is used to remove a table?",
    options: ["REMOVE", "DELETE", "DROP", "TRUNCATE"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 8,
    status: "unanswered",
    question: "What is a composite key?",
    options: [
      "A key made from multiple columns",
      "A key used in NoSQL databases",
      "A key used for encryption",
      "A key with foreign references",
    ],
    correctAnswer: 0,
    selectedAnswer: null,
  },
  {
    id: 9,
    status: "unanswered",
    question: "Which clause is used to filter rows in SQL?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    correctAnswer: 0,
    selectedAnswer: null,
  },
  {
    id: 10,
    status: "unanswered",
    question: "Which operation combines rows from two tables?",
    options: ["UNION", "JOIN", "MERGE", "INTERSECT"],
    correctAnswer: 1,
    selectedAnswer: null,
  },
  {
    id: 11,
    status: "unanswered",
    question: "Which SQL function returns the number of rows?",
    options: ["SUM()", "MAX()", "COUNT()", "LENGTH()"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 12,
    status: "unanswered",
    question: "Which is a DDL command?",
    options: ["INSERT", "UPDATE", "CREATE", "SELECT"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 13,
    status: "unanswered",
    question: "What is a view in SQL?",
    options: [
      "A physical table",
      "A stored procedure",
      "A virtual table based on a query",
      "A type of index",
    ],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 14,
    status: "unanswered",
    question: "Which of the following is a constraint?",
    options: ["SELECT", "WHERE", "UNIQUE", "JOIN"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 15,
    status: "unanswered",
    question: "Which key can have duplicate values?",
    options: ["Primary Key", "Foreign Key", "Unique Key", "Candidate Key"],
    correctAnswer: 1,
    selectedAnswer: null,
  },
  {
    id: 16,
    status: "unanswered",
    question:
      "What is the command to remove all rows from a table but keep the structure?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 17,
    status: "unanswered",
    question: "Which SQL statement is used to update data?",
    options: ["MODIFY", "ALTER", "UPDATE", "REPLACE"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 18,
    status: "unanswered",
    question: "Which clause is used with GROUP BY to filter grouped results?",
    options: ["WHERE", "HAVING", "ORDER BY", "JOIN"],
    correctAnswer: 1,
    selectedAnswer: null,
  },
  {
    id: 19,
    status: "unanswered",
    question: "Which level of data abstraction describes how data is stored?",
    options: ["Logical", "View", "Physical", "Conceptual"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 20,
    status: "unanswered",
    question: "What is a transaction in DBMS?",
    options: [
      "A command to save data",
      "A group of operations treated as a single unit",
      "A backup file",
      "A database trigger",
    ],
    correctAnswer: 1,
    selectedAnswer: null,
  },
  {
    id: 21,
    status: "unanswered",
    question: "Which of the following commands adds a new row?",
    options: ["INSERT", "ADD", "ALTER", "APPEND"],
    correctAnswer: 0,
    selectedAnswer: null,
  },
  {
    id: 22,
    status: "unanswered",
    question: "What does the SELECT statement do?",
    options: [
      "Modifies data",
      "Deletes a table",
      "Retrieves data",
      "Creates a schema",
    ],
    correctAnswer: 2,
    selectedAnswer: null,
  },
  {
    id: 23,
    status: "unanswered",
    question: "Which of the following is a valid SQL data type?",
    options: ["TEXT", "FLOAT", "DATE", "All of the above"],
    correctAnswer: 3,
    selectedAnswer: null,
  },
  {
    id: 24,
    status: "unanswered",
    question: "What does the DISTINCT keyword do?",
    options: [
      "Deletes duplicate rows",
      "Returns only unique values",
      "Sorts data",
      "Limits rows",
    ],
    correctAnswer: 1,
    selectedAnswer: null,
  },
  {
    id: 25,
    status: "unanswered",
    question: "Which command is used to define a new table?",
    options: ["DEFINE", "MAKE", "CREATE", "NEW"],
    correctAnswer: 2,
    selectedAnswer: null,
  },
];


export const mockSubjectiveQuestions = [
  {
    id: 1,
    question: "Explain the concept of normalization in relational databases.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 2,
    question: "Describe the various types of database relationships with examples.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 3,
    question: "What are the advantages and disadvantages of DBMS over traditional file systems?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 4,
    question: "Write a short note on ACID properties in database transactions.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 5,
    question: "Explain primary key, foreign key, and unique key with examples.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 6,
    question: "What is indexing in DBMS? How does it improve performance?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 7,
    question: "Describe the differences between clustered and non-clustered indexes.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 8,
    question: "Explain the architecture of a DBMS system.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 9,
    question: "What is a view in SQL? How is it different from a table?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 10,
    question: "Write an SQL query to find the second highest salary from the employee table.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 11,
    question: "Differentiate between DELETE, TRUNCATE, and DROP commands in SQL.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 12,
    question: "Explain the different types of joins in SQL with examples.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 13,
    question: "What is a transaction log and why is it important in DBMS?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 14,
    question: "Explain the difference between OLTP and OLAP.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 15,
    question: "Describe the life cycle of a database system.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 16,
    question: "What is a deadlock in DBMS? How can it be prevented?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 17,
    question: "What is data redundancy and how does DBMS handle it?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 18,
    question: "Describe different types of data models in DBMS.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 19,
    question: "What is a stored procedure? How is it different from a function?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 20,
    question: "Explain the importance of data integrity in a database.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 21,
    question: "What are triggers in SQL? Provide use cases.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 22,
    question: "What is an ER diagram? Explain its components.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 23,
    question: "Describe the concept of schema and instance in DBMS.",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 24,
    question: "What are the challenges in distributed databases?",
    answer: "",
    status: "unanswered",
    file:null
  },
  {
    id: 25,
    question: "Compare and contrast hierarchical, network, and relational database models.",
    answer: "",
    status: "unanswered",
    file:null
  },
];

