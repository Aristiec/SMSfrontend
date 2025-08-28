import React from 'react';
import { X } from 'lucide-react';

const PreviewModal = ({ questionData, onClose }) => {
  if (!questionData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-end  px-4 z-50">
      <div className="absolute inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
      <div className="relative z-50 bg-[#FAFCFD] w-full max-w-4xl rounded-[12px] overflow-y-auto shadow-xl max-h-[90vh] mt-24 mr-32">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E0E0E0]">
          <h2 className="text-xl sm:text-2xl font-medium text-[#1F1D1D] font-[Inter]">
            Question Preview
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
          {/* Question */}
          <div className="mb-6">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-lg font-medium text-[#000000] ">
                {questionData.questionNumber}.
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-[#1F1D1D] font-[Inter] mb-3">
                  {questionData.question || 'No question text provided'}
                </h3>
              </div>
            </div>
          </div>

          {/* MCQ Options */}
          {questionData.type === 'MCQ' && questionData.options && questionData.options.length > 0 && (
            <div className="mb-6">
              <h4 className="text-base font-medium text-[#1F1D1D] font-[Inter] mb-3">
                Options:
              </h4>
              <div className="space-y-3">
                {questionData.options.map((option, index) => (
                  option.trim() && (
                    <div key={index} className="flex items-center gap-3 p-3 border border-[#E0E0E0] rounded-[8px]">
                      <div className="w-4 h-4 border-2 border-[#CCCCCC] rounded-full flex-shrink-0"></div>
                      <span className="text-base text-[#1F1D1D] font-[Inter]">
                        {option}
                      </span>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Subjective Answer Space */}
          {questionData.type === 'Subjective' && (
            <div className="mb-6">
              <h4 className="text-base font-medium text-[#1F1D1D] font-[Inter] mb-3">
                Answer Section:
              </h4>
              <div className="border border-[#E0E0E0] rounded-[8px] p-4 bg-gray-50 min-h-[128px]">
                {questionData.description && questionData.description.trim() ? (
                  <p className="text-sm text-[#1F1D1D] font-[Inter] leading-6 whitespace-pre-wrap">
                    {questionData.description}
                  </p>
                ) : (
                  <p className="text-sm text-[#717171] italic">
                    Student will write their answer here...
                  </p>
                )}
              </div>
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

export default PreviewModal;
