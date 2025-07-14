import React, { useEffect, useState } from "react";
import { Clock, RefreshCcw, AlertCircle } from "lucide-react";
import { fetchIssuedBooks } from "../../../features/auth/authAPI";

const IssuedBooks = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    const getIssuedBooks = async () => {
      try {
        const studentId = localStorage.getItem("studentId");
        const books = await fetchIssuedBooks(studentId);

        // Map to include status & days left / overdue
        const today = new Date();
        const mapped = books.map((book, index) => {
          const dueDate = new Date(book.dueDate);
          const timeDiff = dueDate - today;
          const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

          return {
            id: index + 1,
            title: book.bookTitle,
            author: book.author,
            issuedDate: new Date(book.issueDate).toDateString(),
            dueDate: new Date(book.dueDate).toDateString(),
            status: daysDiff >= 0 ? "active" : "overdue",
            daysLeft: daysDiff >= 0 ? daysDiff : 0,
            overdueBy: daysDiff < 0 ? Math.abs(daysDiff) : 0,
            cover: book.imageUrl,
          };
        });

        setIssuedBooks(mapped);
      } catch (error) {
        console.error("Failed to fetch issued books:", error);
      }
    };

    getIssuedBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-[#FAFCFD] rounded-lg">
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

            <div className="flex flex-col gap-1 px-6 py-2">
              <h3 className="text-[14px] font-medium text-[#1F1D1D]">
                {book.title}
              </h3>
              <p className="text-[12px] text-[#717171]">{book.author}</p>

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
