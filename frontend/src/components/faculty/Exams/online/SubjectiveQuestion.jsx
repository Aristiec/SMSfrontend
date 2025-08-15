import React, { useState, useEffect, useRef } from 'react';
import PreviewModal from './PreviewModal';

function SubjectiveQuestion({ questionNumber = 1, totalQuestions = 1, isLastQuestion = false, isLastSection = false, onAddNewSection, onFullPaperPreview, onQuestionDataChange, initialData }) {
  const [questionText, setQuestionText] = useState(initialData?.question || '');
  const [questionDescription, setQuestionDescription] = useState(initialData?.description || '');
  const [showPreview, setShowPreview] = useState(false);
  
  // Use ref to track if we should call onQuestionDataChange
  const isInitialMount = useRef(true);

  // Update parent whenever data changes, but avoid initial call
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (onQuestionDataChange) {
      onQuestionDataChange({
        type: 'Subjective',
        question: questionText,
        description: questionDescription,
        questionNumber
      });
    }
  }, [questionText, questionDescription, questionNumber]);

  const handlePreview = () => {
    setShowPreview(true);
  };

  // Check if all inputs are filled - only require question text
  const isFormValid = questionText.trim();

  return (
    <div className="p-4 sm:p-6 bg-white rounded-[8px] border border-[#E0E0E0]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4 sm:mb-6">
        <h1 
          className="font-[Inter] font-medium text-lg sm:text-xl leading-[30px] tracking-[0%] text-[#000000]"
          style={{ fontWeight: 500 }}
        >
          Create subjective questions-
        </h1>
        <span className="text-sm text-gray-500">
          ({questionNumber} of {totalQuestions})
        </span>
      </div>

      {/* Question Number and Input Field */}
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 sm:mb-6">
        <span className="text-base sm:text-lg font-medium text-[#000000] mt-2 sm:mt-3 sm:min-w-[20px]">
          {questionNumber}.
        </span>
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Add question..."
            className="w-full h-[45px] sm:h-[50px] rounded-[8px] border border-[#CCCCCC] py-2 sm:py-3 px-3 focus:outline-none focus:border-[#0077FF] font-[Inter] text-sm sm:text-base"
          />
          
          {/* Text Box for Answer Section */}
          <textarea
            value={questionDescription}
            onChange={(e) => setQuestionDescription(e.target.value)}
            placeholder="Enter answer section/guidelines for students..."
            className="w-full h-[200px] sm:h-[250px] lg:h-[332px] rounded-[8px] border border-[#717171] p-4 sm:p-6 resize-none focus:outline-none focus:border-[#0077FF] font-[Inter] text-sm sm:text-base"
          />

          {/* Buttons */}
          <div className="flex justify-end w-full">
            <button
              onClick={handlePreview}
              disabled={!isFormValid}
              className="flex py-2 px-4 sm:px-7 gap-2 border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] items-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <p className="font-[500] text-sm sm:text-base leading-[24px] tracking-normal text-[#717171]">
                Preview
              </p>
            </button>
          </div>
          
          {/* Bottom buttons - Conditional rendering based on question position */}
          {isLastQuestion && (
            <div className="flex gap-4 w-full">
              {onAddNewSection && (
                <button 
                  onClick={onAddNewSection}
                  className="flex-1 flex py-2 px-4 sm:px-7 gap-2 border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <p className="font-[500] text-sm sm:text-base leading-[24px] tracking-normal text-[#717171]">
                    Add New Section
                  </p>
                </button>
              )}
              
              <button 
                onClick={onFullPaperPreview}
                className="flex-1 flex py-2 px-4 sm:px-7 gap-2 border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <p className="font-[500] text-sm sm:text-base leading-[24px] tracking-normal text-[#717171]">
                  Full Paper Preview
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {showPreview && (
        <PreviewModal
          questionData={{
            type: 'Subjective',
            questionNumber,
            question: questionText,
            description: questionDescription
          }}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}

export default SubjectiveQuestion;