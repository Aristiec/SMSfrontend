import React, { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Mcq from "./Mcq";
import SubjectiveQuestion from "./SubjectiveQuestion";
import FullPaperPreview from "./FullPaperPreview";

const OnlineExam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const examData = location.state?.examData;
  
  // Default data if no exam data is passed
  const defaultExamData = {
    subject: "Physics",
    code: "CSE01", 
    date: "2024-01-25",
    duration: "2 hours",
    marks: "Total Marks: 100"
  };
  
  const currentExam = examData || defaultExamData;
  
  const [sections, setSections] = useState([
    {
      id: 1,
      selectedOption: null,
      inputValue: null,
      marks: null,
      isStarted: false,
      questions: [] // Store actual question data
    }
  ]);
  const [showFullPreview, setShowFullPreview] = useState(false);

  const handleCreateFirstQuestion = useCallback((sectionId) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === sectionId && section.selectedOption && section.inputValue && section.marks
          ? { ...section, isStarted: true }
          : section
      )
    );
  }, []);

  const handleAddNewSection = useCallback(() => {
    const newSection = {
      id: sections.length + 1,
      selectedOption: null,
      inputValue: null,
      marks: null,
      isStarted: false,
      questions: []
    };
    setSections(prevSections => [...prevSections, newSection]);
  }, [sections.length]);

  const updateSectionData = useCallback((sectionId, field, value) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? { ...section, [field]: value }
          : section
      )
    );
  }, []);

  const updateQuestionData = useCallback((sectionId, questionIndex, questionData) => {
    setSections(prevSections =>
      prevSections.map(section => {
        if (section.id === sectionId) {
          const newQuestions = [...(section.questions || [])];
          newQuestions[questionIndex] = questionData;
          return { ...section, questions: newQuestions };
        }
        return section;
      })
    );
  }, []);

  const renderQuestions = (section, sectionIndex) => {
    if (!section.isStarted || !section.inputValue) return null;

    const numQuestions = parseInt(section.inputValue);
    const questions = [];

    for (let i = 1; i <= numQuestions; i++) {
      const isLastQuestion = i === numQuestions;
      const questionIndex = i - 1;
      
      if (section.selectedOption === "MCQ") {
        questions.push(
          <Mcq 
            key={`section-${section.id}-mcq-${i}`} 
            questionNumber={i} 
            totalQuestions={numQuestions}
            isLastQuestion={isLastQuestion}
            isLastSection={sectionIndex === sections.length - 1}
            onAddNewSection={handleAddNewSection}
            onFullPaperPreview={() => setShowFullPreview(true)}
            onQuestionDataChange={(data) => updateQuestionData(section.id, questionIndex, data)}
            initialData={section.questions?.[questionIndex]}
          />
        );
      } else if (section.selectedOption === "Subjective") {
        questions.push(
          <SubjectiveQuestion 
            key={`section-${section.id}-subjective-${i}`} 
            questionNumber={i} 
            totalQuestions={numQuestions}
            isLastQuestion={isLastQuestion}
            isLastSection={sectionIndex === sections.length - 1}
            onAddNewSection={handleAddNewSection}
            onFullPaperPreview={() => setShowFullPreview(true)}
            onQuestionDataChange={(data) => updateQuestionData(section.id, questionIndex, data)}
            initialData={section.questions?.[questionIndex]}
          />
        );
      }
    }

    return questions;
  };

  return (
    <section className="flex pt-6 px-4 sm:px-8 lg:px-14 gap-6 sm:gap-8 lg:gap-12 bg-[#fafcfd] border border-[#fafcfd] rounded-[8px] w-full min-h-screen justify-center">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-8 w-full max-w-6xl">
        {/* Back Button */}
        <div className="flex items-center">
          <button
            onClick={() => navigate('/faculty/exam')}
            className="flex items-center gap-2 px-4 py-2 text-[#04203E] hover:bg-[#04203E] hover:text-white rounded-[8px] border border-[#04203E] transition-colors font-[Inter] font-medium"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current"
            >
              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back to Online Exams
          </button>
        </div>
        
        {/* Exam Info Header - Show only once */}
        <div className="flex flex-col sm:flex-row  font-[Inter] text-[#04203E] rounded-[8px] border border-[gray] font-[600] text-sm sm:text-base lg:text-lg xl:text-xl leading-[100%] tracking-normal overflow-hidden">
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 flex items-center justify-center flex-1 border-b sm:border-b-0 sm:border-r border-[gray]">
            <p className="whitespace-nowrap text-center">{currentExam.subject} - {currentExam.code}</p>
          </div>
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-[gray] flex items-center justify-center flex-1">
            <p className="whitespace-nowrap text-center">Date - {currentExam.date}</p>
          </div>
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-[gray] flex items-center justify-center flex-1">
            <p className="whitespace-nowrap text-center">Duration - {currentExam.duration}</p>
          </div>
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 flex items-center justify-center flex-1">
            <p className="whitespace-nowrap text-center">Marks - {currentExam.marks.replace('Total Marks: ', '')}</p>
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={section.id} className="flex flex-col gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {/* Section Header */}
            {index > 0 && (
              <div className="flex items-center justify-center py-4">
                <h2 className="text-xl sm:text-2xl font-medium text-[#1F1D1D] font-[Inter]">
                  Section {section.id}
                </h2>
              </div>
            )}
            
            <Header 
              selectedOption={section.selectedOption}
              setSelectedOption={(value) => updateSectionData(section.id, 'selectedOption', value)}
              inputValue={section.inputValue}
              setInputValue={(value) => updateSectionData(section.id, 'inputValue', value)}
              marks={section.marks}
              setMarks={(value) => updateSectionData(section.id, 'marks', value)}
              isStarted={section.isStarted}
              onCreateFirstQuestion={() => handleCreateFirstQuestion(section.id)}
              showExamHeader={false}
              isFirstSection={index === 0}
            />
            
            {renderQuestions(section, index)}
          </div>
        ))}
      </div>
      
      {showFullPreview && (
        <FullPaperPreview
          sections={sections}
          examData={currentExam}
          onClose={() => setShowFullPreview(false)}
        />
      )}
    </section>
  );
};

export default OnlineExam;