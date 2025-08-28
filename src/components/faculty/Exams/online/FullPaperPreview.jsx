import React from 'react';
import { X } from 'lucide-react';

const FullPaperPreview = ({ sections, examData, onClose }) => {
  if (!sections || sections.length === 0) return null;

  // Default exam data if not provided
  const defaultExamData = {
    subject: "Physics",
    code: "CSE01", 
    date: "2024-01-25",
    duration: "2 hours",
    marks: "Total Marks: 100"
  };
  
  const currentExam = examData || defaultExamData;

  // Helper function to get all questions data from sections
  const getAllQuestions = () => {
    const allQuestions = [];
    let questionCounter = 1;

    sections.forEach((section, sectionIndex) => {
      if (section.isStarted && section.inputValue) {
        const numQuestions = parseInt(section.inputValue);
        
        for (let i = 1; i <= numQuestions; i++) {
          allQuestions.push({
            sectionId: section.id,
            sectionNumber: sectionIndex + 1,
            questionNumber: questionCounter,
            localQuestionNumber: i,
            type: section.selectedOption,
            marks: section.marks
          });
          questionCounter++;
        }
      }
    });

    return allQuestions;
  };

  const allQuestions = getAllQuestions();

  return (
    <div className="fixed inset-0 flex items-center justify-end px-4 z-50">
      <div className="absolute inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
      <div className="relative z-50 bg-[#FAFCFD] w-full max-w-5xl rounded-[12px] overflow-y-auto shadow-xl max-h-[90vh] mt-28 mr-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
          <h2 className="text-xl sm:text-2xl font-medium text-[#1F1D1D] font-[Inter]">
            Full Paper Preview
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-[#717171]" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Exam Header */}
          <div className="mb-8 p-6 bg-[#04203E] rounded-[8px] text-[#FAFCFD]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <p className="font-medium">Subject</p>
                <p className="text-sm opacity-90">{currentExam.subject} - {currentExam.code}</p>
              </div>
              <div>
                <p className="font-medium">Date</p>
                <p className="text-sm opacity-90">{currentExam.date}</p>
              </div>
              <div>
                <p className="font-medium">Duration</p>
                <p className="text-sm opacity-90">{currentExam.duration}</p>
              </div>
              <div>
                <p className="font-medium">Total Marks</p>
                <p className="text-sm opacity-90">
                  {sections.reduce((total, section) => {
                    if (section.isStarted && section.marks && section.inputValue) {
                      return total + (parseInt(section.marks) * parseInt(section.inputValue));
                    }
                    return total;
                  }, 0)}
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section, sectionIndex) => {
            if (!section.isStarted || !section.inputValue) return null;

            const numQuestions = parseInt(section.inputValue);
            const sectionNumber = sectionIndex + 1;

            return (
              <div key={section.id} className="mb-8">
                {/* Section Header */}
                <div className="mb-4 p-4 bg-gray-50 rounded-[8px] border">
                  <h3 className="text-lg font-medium text-[#1F1D1D] font-[Inter]">
                    Section {sectionNumber} - {section.selectedOption} Questions
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {numQuestions} {numQuestions === 1 ? 'Question' : 'Questions'} × {section.marks} {parseInt(section.marks) === 1 ? 'Mark' : 'Marks'} = {parseInt(section.marks) * numQuestions} Total Marks
                  </p>
                </div>

                {/* Questions in this section */}
                <div className="space-y-6">
                  {Array.from({ length: numQuestions }, (_, i) => {
                    const questionNumber = allQuestions.findIndex(q => 
                      q.sectionId === section.id && q.localQuestionNumber === i + 1
                    ) + 1;
                    
                    const questionData = section.questions?.[i];

                    return (
                      <div key={i} className="border border-[#E0E0E0] rounded-[8px] p-4">
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-lg font-medium text-[#000000] mt-1">
                            {questionNumber}.
                          </span>
                          <div className="flex-1">
                            <div className="mb-2">
                              <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                [{section.marks} {parseInt(section.marks) === 1 ? 'Mark' : 'Marks'}]
                              </span>
                            </div>
                            <div className="text-base text-[#1F1D1D] font-[Inter] mb-3">
                              {questionData?.question || '[Question text will appear here when created]'}
                            </div>
                            
                            {section.selectedOption === 'MCQ' && (
                              <div>
                                <p className="text-sm text-gray-600 mb-2">Options:</p>
                                <div className="space-y-2">
                                  {questionData?.options?.length > 0 ? (
                                    questionData.options.map((option, optionIndex) => (
                                      option.trim() && (
                                        <div key={optionIndex} className="flex items-center gap-3">
                                          <div className="w-4 h-4 border-2 border-[#CCCCCC] rounded-full flex-shrink-0"></div>
                                          <span className="text-sm text-[#1F1D1D]">
                                            {option}
                                          </span>
                                        </div>
                                      )
                                    ))
                                  ) : (
                                    ['A', 'B', 'C', 'D'].map((letter) => (
                                      <div key={letter} className="flex items-center gap-3">
                                        <div className="w-4 h-4 border-2 border-[#CCCCCC] rounded-full flex-shrink-0"></div>
                                        <span className="text-sm text-gray-500">
                                          Option {letter} will appear here
                                        </span>
                                      </div>
                                    ))
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {section.selectedOption === 'Subjective' && (
                              <div>
                                {questionData?.description && (
                                  <div className="mb-3">
                                    <p className="text-sm text-gray-600 mb-2">Description:</p>
                                    <p className="text-sm text-[#1F1D1D] bg-gray-50 p-3 rounded border whitespace-pre-wrap">
                                      {questionData.description}
                                    </p>
                                  </div>
                                )}
                                <p className="text-sm text-gray-600 mb-2">Answer Space:</p>
                                <div className="border border-[#E0E0E0] rounded-[8px] p-4 h-24 bg-gray-50">
                                  <p className="text-sm text-gray-400 italic">
                                    Student will write their answer here...
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {allQuestions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No questions created yet</p>
              <p className="text-gray-400 text-sm mt-2">Create sections and questions to see the full paper preview</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-6 border-t border-[#E0E0E0]">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#04203E] text-white rounded-[8px] font-[Inter] font-medium hover:bg-[#062952] transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullPaperPreview;
