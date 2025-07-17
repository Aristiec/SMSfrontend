import React, { useState } from "react";
import { Book, Search, DollarSign, Bookmark, History } from "lucide-react";
import ActivityHistory from "../../student/Library/ActivityHistory.jsx";
import Fines from "./Fines.jsx";
import BrowseLibrary from "./BrowseLibrary.jsx";
import Wishlist from "./Wishlist.jsx";
import IssuedBooks from "./IssuedBooks.jsx";
import { useDispatch } from "react-redux";
import {
  getBookById,
  removeFromWishlist,
} from "../../../features/librarySlice";

const menuItems = [
  {
    icon: <Book size={14} />,
    title: "Issued Books",
  },
  {
    icon: <Search size={14} />,
    title: "Browse Library",
  },
  {
    icon: <DollarSign size={14} />,
    title: "Fines",
  },
  {
    icon: <Bookmark size={14} />,
    title: "Wishlist",
  },
  {
    icon: <History size={14} />,
    title: "Activity History",
  },
];

const LowerComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#FAFCFD] rounded-t-xl">
      <div className="flex gap-8">
        {menuItems.map((item, index) => (
          <button
            onClick={() => setSelectedIndex(index)}
            className={`rounded-[4px] cursor-pointer p-1 gap-2 flex items-center font-[Inter] font-medium text-[12px] leading-4 tracking-normal transition-all duration-300 ease-in  ${
              selectedIndex === index
                ? "border-b-1 border-[#1F1D1D] text-[#1F1D1D] "
                : "border-b-1 border-transparent text-[#717171]"
            }`}
            key={index}
          >
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
      <div>
        {selectedIndex === 0 ? (
          <IssuedBooks />
        ) : selectedIndex === 1 ? (
          <BrowseLibrary
            wishlist={wishlist}
            setWishlist={setWishlist}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        ) : selectedIndex === 2 ? (
          <Fines />
        ) : selectedIndex === 3 ? (
          <Wishlist
            wishlist={wishlist}
            onViewDetails={(bookId) => {
              // Call Redux to get full book details
              const token = localStorage.getItem("token");
              dispatch(getBookById({ id: bookId, token }));
              // Switch to BrowseLibrary tab and set selected book
              setSelectedIndex(1);
              setSelectedBook(bookId);
            }}
            onRemove={(bookId) => {
              const token = localStorage.getItem("token");
              const studentId = JSON.parse(
                localStorage.getItem("user")
              )?.studentId;
              dispatch(removeFromWishlist({ studentId, bookId, token }));
            }}
          />
        ) : selectedIndex === 4 ? (
          <ActivityHistory />
        ) : null}
      </div>
    </div>
  );
};

export default LowerComponent;
