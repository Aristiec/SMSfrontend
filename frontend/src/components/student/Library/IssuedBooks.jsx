import React from "react";
import { Clock, RefreshCcw, AlertCircle } from "lucide-react";

const issuedBooks = [
  {
    id: 1,
    title: "Data Structures and Algorithms",
    author: "Thomas H. Cormen",
    issuedDate: "May 15, 2023",
    dueDate: "Jun 15, 2023",
    status: "active",
    daysLeft: 18,
    cover: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg",
  },
  {
    id: 2,
    title: "Operating Systems",
    author: "Thomas H. Cormen",
    issuedDate: "May 15, 2023",
    dueDate: "Jun 1, 2023",
    status: "overdue",
    overdueBy: 4,
    cover: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg",
  },
  {
    id: 3,
    title: "Introductions to Psychology",
    author: "Thomas H. Cormen",
    issuedDate: "May 15, 2023",
    dueDate: "Jun 15, 2023",
    status: "active",
    daysLeft: 18,
    cover: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg",
  },
  {
    id: 4,
    title: "Introductions to Web Development",
    author: "Thomas H. Cormen",
    issuedDate: "May 15, 2023",
    dueDate: "Jun 15, 2023",
    status: "active",
    daysLeft: 18,
    cover: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg",
  },
];

const IssuedBooks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6 p-6 bg-[#FAFCFD] rounded-lg">
      {issuedBooks.map((book) => (
        <div
          key={book.id}
          className="flex flex-col bg-[#FAFCFD] border border-[#71717166] font-[Inter] rounded-lg shadow-md overflow-hidden"
        >
          {/* Top */}
          <div className="flex p-4 gap-4">
            <img
              src={book.cover}
              alt={book.title}
              className="w-24 h-32 object-cover rounded"
            />

            <div className="flex flex-col gap-1 px-4">
              {" "}
              {/* removed justify-between, added gap */}
              <h3 className="text-[14px] font-medium text-[#1F1D1D]">
                {book.title}
              </h3>
              <p className="text-[12px] text-[#717171]">{book.author}</p>
              {/* Status */}
              {book.status === "active" ? (
                <div className="flex items-center gap-1 text-[#717171] text-[12px]">
                  <Clock className="w-4 h-4" />
                  <span>{book.daysLeft} days left</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-[#EF4444] text-[12px]">
                  <AlertCircle className="w-4 h-4" />
                  <span>Overdue by {book.overdueBy} days</span>
                </div>
              )}
              <p className="text-[12px] text-[#717171]">Due: {book.dueDate}</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between bg-[#E9EEF4] px-4 py-2 border-t border-[#71717166]">
            <p className="text-[12px] text-[#717171]">
              Issued: {book.issuedDate}
            </p>
            <button className="flex items-center gap-1 bg-[#04203E] text-[#FAFCFD] text-xs font-medium px-3 py-2.5 rounded">
              <RefreshCcw className="w-4 h-4" />
              Renew
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IssuedBooks;
