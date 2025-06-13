import React, { useState } from "react";

const CommentSection = ({ assignmentId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mb-6 w-full max-w-[1024px] mx-auto ">
      <h3 className="text-[16px] font-[Inter] font-medium text-[#1F1D1D] mb-5">
        Comments (Optional)
      </h3>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add any comment for your instructors..."
        className="w-full h-[161px] p-3 border border-[#1F1D1D] rounded-md resize-none text-[15px]"
      />

      <div className="mt-4 space-y-2">
        {comments.map((c, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
