import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Mcq from "./Mcq";
import SubjectiveQuestion from "./SubjectiveQuestion";
import FullPaperPreview from "./FullPaperPreview";

const OnlineExam = () => {
  const location = useLocation();
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

  const handleCreateFirstQuestion = (sectionId) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === sectionId && section.selectedOption && section.inputValue && section.marks
          ? { ...section, isStarted: true }
          : section
      )
    );
  };

  const handleAddNewSection = () => {
    const newSection = {
      id: sections.length + 1,
      selectedOption: null,
      inputValue: null,
      marks: null,
      isStarted: false,
      questions: []
    };
    setSections(prevSections => [...prevSections, newSection]);
  };

  const updateSectionData = (sectionId, field, value) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? { ...section, [field]: value }
          : section
      )
    );
  };

  const updateQuestionData = (sectionId, questionIndex, questionData) => {
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
  };

  const renderQuestions = (section) => {
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
            onAddNewSection={handleAddNewSection}
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
            onAddNewSection={handleAddNewSection}
            onQuestionDataChange={(data) => updateQuestionData(section.id, questionIndex, data)}
            initialData={section.questions?.[questionIndex]}
          />
        );
      }
    }

    return questions;
  };

  return (
    <section className="flex pt-8 sm:pt-12 lg:pt-20 px-4 sm:px-8 lg:px-14 gap-6 sm:gap-8 lg:gap-12 bg-[#fafcfd] w-full min-h-screen justify-center">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl">
        {/* Exam Info Header - Show only once */}
        <div className="flex flex-col sm:flex-row rounded-[8px] bg-[#04203E] font-[Inter] text-[#FAFCFD] font-[600] text-sm sm:text-base lg:text-lg xl:text-xl leading-[100%] tracking-normal overflow-hidden">
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 flex items-center justify-center flex-1 border-b sm:border-b-0 sm:border-r border-[#ffffff20]">
            <p className="whitespace-nowrap text-center">{currentExam.subject} - {currentExam.code}</p>
          </div>
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-[#ffffff20] flex items-center justify-center flex-1">
            <p className="whitespace-nowrap text-center">Date - {currentExam.date}</p>
          </div>
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-[#ffffff20] flex items-center justify-center flex-1">
            <p className="whitespace-nowrap text-center">Duration - {currentExam.duration}</p>
          </div>
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 flex items-center justify-center flex-1">
            <p className="whitespace-nowrap text-center">Marks - {currentExam.marks.replace('Total Marks: ', '')}</p>
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={section.id} className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
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
            
            {renderQuestions(section)}
          </div>
        ))}
        
        {/* Full Paper Preview Button - Show only if there are started sections */}
        {sections.some(section => section.isStarted) && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowFullPreview(true)}
              className="px-8 py-4 bg-[#04203E] text-[#FAFCFD] rounded-[8px] font-[Inter] font-medium text-lg hover:bg-[#062952] transition-colors shadow-lg"
            >
              Full Paper Preview
            </button>
          </div>
        )}
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