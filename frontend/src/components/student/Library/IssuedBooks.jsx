import React, { useState } from "react";
import {
  Clock,
  RotateCcw,
  Book,
  Search,
  History,
  DollarSign,
  Heart,
} from "lucide-react";

// Book Card Component
const BookCard = ({ book }) => {
  const isOverdue = book.status === "overdue";

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative">
      <div className="flex gap-4">
        {/* Book Cover */}
        <div
          className={`w-20 h-28 ${book.coverColor} rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden`}
        >
          <div className="text-white text-center p-2">
            <div className="text-xs font-bold mb-1">
              {book.title.split(" ").slice(0, 2).join(" ")}
            </div>
            <div className="text-xs opacity-80">
              {book.author.split(" ")[0]}
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
            {book.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{book.author}</p>

          {/* Status and Due Date */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span
                className={`text-sm ${
                  isOverdue ? "text-red-600 font-medium" : "text-gray-600"
                }`}
              >
                {isOverdue
                  ? `Overdue by ${Math.abs(book.daysLeft)} days`
                  : `${book.daysLeft} days left`}
              </span>
            </div>
            <div className="text-sm text-gray-500">Due: {book.dueDate}</div>
          </div>
        </div>

        {/* Renew Button */}
        <div className="flex-shrink-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <RotateCcw className="w-4 h-4" />
            Renew
          </button>
        </div>
      </div>

      {/* Issued Date */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">Issued: {book.issuedDate}</span>
      </div>

      {/* Overdue Badge */}
      {isOverdue && (
        <div className="absolute top-2 right-2">
          <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
            Overdue
          </div>
        </div>
      )}
    </div>
  );
};

// Issued Books Component
const IssuedBooks = () => {
  const books = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      author: "Thomas H. Cormen",
      cover: "/api/placeholder/120/160",
      dueDate: "Jun 15, 2023",
      issuedDate: "May 15, 2023",
      daysLeft: 18,
      status: "active",
      coverColor: "bg-orange-600",
    },
    {
      id: 2,
      title: "Operating Systems",
      author: "Thomas H. Cormen",
      cover: "/api/placeholder/120/160",
      dueDate: "Jun 1, 2023",
      issuedDate: "May 15, 2023",
      daysLeft: -4,
      status: "overdue",
      coverColor: "bg-gray-900",
    },
    {
      id: 3,
      title: "Introductions to Psychology",
      author: "Thomas H. Cormen",
      cover: "/api/placeholder/120/160",
      dueDate: "Jun 15, 2023",
      issuedDate: "May 15, 2023",
      daysLeft: 18,
      status: "active",
      coverColor: "bg-purple-800",
    },
    {
      id: 4,
      title: "Introductions to Web Development",
      author: "Thomas H. Cormen",
      cover: "/api/placeholder/120/160",
      dueDate: "Jun 15, 2023",
      issuedDate: "May 15, 2023",
      daysLeft: 18,
      status: "active",
      coverColor: "bg-yellow-600",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Issued Books</h1>
        <p className="text-gray-600 mt-1">
          Manage your currently borrowed books
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

// Main Library Management Container Component
const LibraryManagement = () => {
  const [activeTab, setActiveTab] = useState("issued");

  const tabs = [
    { id: "issued", label: "Issued Books", icon: Book, count: 4 },
    { id: "browse", label: "Browse Library", icon: Search },
    { id: "history", label: "Activity History", icon: History },
    { id: "fines", label: "Fines", icon: DollarSign },
    { id: "wishlist", label: "Wishlist", icon: Heart },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "issued":
        return <IssuedBooks />;
      case "browse":
        return (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Browse Library
            </h2>
            <p className="text-gray-600">
              Search and discover books in our collection
            </p>
          </div>
        );
      case "history":
        return (
          <div className="text-center py-12">
            <History className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Activity History
            </h2>
            <p className="text-gray-600">
              View your borrowing and return history
            </p>
          </div>
        );
      case "fines":
        return (
          <div className="text-center py-12">
            <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Fines</h2>
            <p className="text-gray-600">
              Check your current fines and payment history
            </p>
          </div>
        );
      case "wishlist":
        return (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Wishlist
            </h2>
            <p className="text-gray-600">
              Books you want to read in the future
            </p>
          </div>
        );
      default:
        return <IssuedBooks />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-1 py-4 border-b-2 font-medium text-sm transition-colors ${
                    isActive
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {tab.count && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default LibraryManagement;
