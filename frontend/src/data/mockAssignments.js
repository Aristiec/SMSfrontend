const mockAssignments = [
  {
    id: "1",
    title: "Literature Review",
    subject: "English Literature",
    description: "Analyze 3 authors’ styles.",
    dueDate: "2024-06-10",
    status: "overdue",
    files: ["literature_review.pdf", "guidelines.pdf"],
    maxMarks: 20,
    instructions:
      "Read the full play with focus on key scenes (witches, soliloquies, Lady Macbeth’s arc, final act). Choose a focus area:\n• Theme (e.g., ambition, guilt, fate vs free will)\n• Character (e.g., Macbeth, Lady Macbeth)\n• Literary device (e.g., symbolism, motifs, foreshadowing)\nReview at least 3 academic sources (books, journals, essays).\nSummarize and analyze the views of each critic.\nAdd your own interpretation and compare it with critics’ views.\nDiscuss modern relevance of the play or chosen theme/character.\nWrite 1000–1500 words, properly structured with intro, body, and conclusion.\nUse quotes from the play to support analysis.\nFollow formatting rules: Times New Roman, 12pt, 1.5 spacing, submit as PDF or Word.\nInclude references (MLA/APA/Chicago style).",
  },
  {
    id: "2",
    title: "Math Assignment",
    subject: "Mathematics",
    description: "Solve problems from Chapter 6.",
    dueDate: "2024-06-15",
    status: "pending",
    files: ["math_assignment.pdf", "formulas_sheet.pdf"],
    maxMarks: 50,
    instructions:
      "Complete problems 1 to 20 from Chapter 6: Probability and Statistics.\nShow all necessary steps and calculations clearly.\nUse scientific calculator for statistical calculations.\nAttach graphs for questions involving data distribution.\nEnsure neatness and correct units throughout.\nSubmit as a single PDF.",
  },
  {
    id: "3",
    title: "Science Report",
    subject: "Physics",
    description: "Lab observations and conclusion.",
    dueDate: "2024-06-01",
    status: "submitted",
    files: ["science_report.pdf", "experiment_photos.zip"],
    maxMarks: 20,
    instructions:
      "Document all lab experiment steps performed in the classroom.\nInclude observations, data tables, and graphs.\nAnalyze results and provide scientific reasoning.\nConclude with a discussion on experimental errors and future scope.\nSubmit in PDF format with diagrams labeled clearly.",
  },
];

export default mockAssignments;
