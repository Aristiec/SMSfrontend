import React, { useEffect, useState } from "react";
import { Clock, RefreshCcw, AlertCircle } from "lucide-react";
import thegreatgatsby from '../../../assets/thegreatgatsby.png'
import tokill from '../../../assets/tokill.png'
import OS from '../../../assets/OS.png'
import dbms from '../../../assets/dbms.png'
// import { fetchIssuedBooks } from "../../../features/auth/authAPI";

// ---------------- Mock Data ----------------
const mockIssuedBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    issuedDate: new Date("2025-08-01").toDateString(),
    dueDate: new Date("2025-09-01").toDateString(),
    status: "active",
    daysLeft: 3,
    overdueBy: 0,
    cover:
      thegreatgatsby
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    issuedDate: new Date("2025-07-15").toDateString(),
    dueDate: new Date("2025-08-15").toDateString(),
    status: "overdue",
    daysLeft: 0,
    overdueBy: 14,
    cover:tokill,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    issuedDate: new Date("2025-08-10").toDateString(),
    dueDate: new Date("2025-09-10").toDateString(),
    status: "active",
    daysLeft: 12,
    overdueBy: 0,
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    title: "Operating System",
    author: "Nupur Chauhan",
    issuedDate: new Date("2025-08-10").toDateString(),
    dueDate: new Date("2025-09-10").toDateString(),
    status: "active",
    daysLeft: 12,
    overdueBy: 0,
    cover:
      OS,
  },
  {
    id: 5,
    title: "Database Management System",
    author: "George Putin",
    issuedDate: new Date("2025-08-10").toDateString(),
    dueDate: new Date("2025-09-10").toDateString(),
    status: "active",
    daysLeft: 12,
    overdueBy: 0,
    cover:
     dbms,
  },
  

];
// --------------------------------------------

const IssuedBooks = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    // 🔹 Commenting out API call
    // const getIssuedBooks = async () => {
    //   try {
    //     const studentId = localStorage.getItem("studentId");
    //     const books = await fetchIssuedBooks(studentId);
    //     // ...map logic
    //     setIssuedBooks(mapped);
    //   } catch (error) {
    //     console.error("Failed to fetch issued books:", error);
    //   }
    // };
    // getIssuedBooks();

    // 🔹 Use mock data instead
    setIssuedBooks(mockIssuedBooks);
  }, []);

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
