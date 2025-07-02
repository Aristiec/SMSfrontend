import React from "react";
import { Book, MapPin, Tag, Calendar, X } from "lucide-react";
import { mockBooks } from "../../../data/mockBooks";
const BookDetails = ({ book, onBack, onAddToWishlist }) => {
  if (!book) return null;
  const handleWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(book);
      onBack();
    }
  };
  return (
    <div className=" px-8 py-6 max-w-[1024px] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] font-[Inter] text-[#1F1D1D] font-bold">
          Book Details
        </h2>

        <button onClick={onBack} className="text-[#1F1D1D] transition">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[200px] flex flex-col items-center">
          <img
            src={book.cover}
            alt={book.title}
            className="w-[190px] h-[256px] object-cover rounded-lg shadow-md"
          />
          <p className="text-[12px] font-[Inter] text-[#717171] mt-2">
            Library Stock: {book.available ? "Available" : "Unavailable"}
          </p>
        </div>

        {/* Right: Book Info */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h1 className="text-[20px] font-[Inter] font-bold text-[#1F1D1D]">
              {book.title}
            </h1>
            {!book.available && (
              <p className="text-[14px] text-red-600 font-[Inter] font-medium mt-2 md:mt-0">
                Currently Unavailable
              </p>
            )}
          </div>
          <p className="text-[16px] font-[Inter] text-[#717171] mb-4">
            by {book.author}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm  mb-8">
            <div className="flex items-start gap-2">
              <Book className="w-4 h-4 mt-2 text-[#1F1D1D]" />
              <div>
                <div className="text-[12px] text-[#717171] font-[Inter] font-medium">
                  ISBN
                </div>
                <div className="text-[12px] font-[Inter] text-[#1F1F1F]">
                  {book.isbn}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Tag className="w-4 h-4 mt-2 text-[#1F1D1D]" />
              <div>
                <div className="text-[12px] text-[#717171] font-[Inter] font-medium">
                  Category
                </div>
                <div className="text-[12px] font-[Inter] text-[#1F1D1D]">
                  {book.category}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-2 text-[#1F1D1D]" />
              <div>
                <div className="text-[12px] text-[#717171] font-[Inter] font-medium">
                  Shelf Location
                </div>
                <div className="text-[12px] font-[Inter] text-[#1F1D1D]">
                  Section P, Row 12
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 mt-2 text-[#1F1D1D]" />
              <div>
                <div className="text-[12px] text-[#717171] font-[Inter] font-medium">
                  Edition
                </div>
                <div className="text-[12px] font-[Inter] text-[#1F1D1D]">
                  1st Edition, 2012
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-[14px] font-medium font-[Inter] text-[#717171] mb-4">
              Description
            </h3>
            <p className="text-[14px] font-[Inter] text-[#1F1D1D] w-[570px]">
              "Clean Code" is a must-read for every developer who cares about
              writing readable, maintainable, and efficient code. Authored by
              Robert C. Martin, this book dives deep into principles, patterns,
              and best practices of agile software development. Through
              real-world examples and detailed refactoring strategies, it
              teaches you how to transform messy, complex codebases into elegant
              and scalable solutions. Whether you're a beginner or a seasoned
              engineer, this book will sharpen your coding mindset and elevate
              your craftsmanship..
            </p>
          </div>
          {book.available && (
            <button
              onClick={handleWishlist}
              className="border border-[#1F1D1D] text-[#1F1D1D] px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition"
            >
              <BookmarkIcon className="w-4 h-4" />
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Optional placeholder icon if not importing a library
const BookmarkIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 5.25v14.118a.375.375 0 00.61.287L12 15.75l6.14 3.906a.375.375 0 00.61-.287V5.25a2.25 2.25 0 00-2.25-2.25H7.5a2.25 2.25 0 00-2.25 2.25z"
    />
  </svg>
);

export default BookDetails;
