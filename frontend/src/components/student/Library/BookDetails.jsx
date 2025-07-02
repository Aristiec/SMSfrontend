import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookOpen, MapPin, Tag, Calendar } from "lucide-react";
import { mockBooks } from "../../../data/mockBooks";
const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = mockBooks.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Book not found.</p>
        <button
          className="ml-4 text-blue-600 underline"
          onClick={() => navigate("/student/lib")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-8 py-6">
      <h2 className="text-xl font-semibold mb-6">Book Details</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Book Image */}
        <div className="w-full md:w-[200px] flex flex-col items-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-[160px] h-[220px] object-cover rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-400 mt-2">
            Library Stock: {book.stock} {book.stock === 1 ? "copy" : "copies"}
          </p>
        </div>

        {/* Right: Book Info */}
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-gray-900">{book.title}</h1>
          <p className="text-sm text-gray-700 mb-4">by {book.author}</p>

          {/* Status */}
          {book.stock === 0 && (
            <p className="text-sm text-red-500 font-medium mb-2">
              Currently Unavailable
            </p>
          )}

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>
                <strong>ISBN</strong>: {book.isbn}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>
                <strong>Category</strong>: {book.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>
                <strong>Shelf Location</strong>: {book.shelfLocation}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                <strong>Edition</strong>: {book.edition}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              Description
            </h3>
            <p className="text-sm text-gray-700">{book.description}</p>
          </div>

          {/* Add to Wishlist */}
          <button className="mt-4 border border-gray-500 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
            <BookmarkIcon className="w-4 h-4" />
            Add to Wishlist
          </button>
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
