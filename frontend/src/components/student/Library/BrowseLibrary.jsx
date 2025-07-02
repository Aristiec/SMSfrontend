import React, { useState, useMemo } from "react";
import { Search, Eye, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookDetails from "./BookDetails";
import book1 from "../../../assets/bd7ef330bde6a8f16ed147ce73e81a9992bb7d70.png";
import book2 from "../../../assets/4fa4fa216f04b58ac64bde3c5b1453b97396f08a.png";
import book3 from "../../../assets/6c2f231b0ddc4cebf10707d6f4a7344966b911b5.png";
import book4 from "../../../assets/fe16dfa3754b1e232308a25a9368490109c59e24.png";
import book5 from "../../../assets/c2a6a92b20b90883e5252cceaa471bcc3951ac12.jpg";
import book6 from "../../../assets/c8c01acdf872826a79108ebb39210cb3703973d6.jpg";
import book7 from "../../../assets/6c2f231b0ddc4cebf10707d6f4a7344966b911b5.png";
import book8 from "../../../assets/6c2f231b0ddc4cebf10707d6f4a7344966b911b5.png";
import book9 from "../../../assets/6c2f231b0ddc4cebf10707d6f4a7344966b911b5.png";

// Mock data
const mockBooks = [
  {
    id: 1,
    title: "Clean Code: A Handbook of Agile",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    category: "All",
    semester: "All",
    course: "All",
    available: true,
    cover: book1,
  },
  {
    id: 2,
    title: "Design Patterns",
    author: "Thomas H. Cormen",
    isbn: "978-0134042282",
    category: "Sem III",
    semester: "Sem III",
    course: "Sem VI",
    available: false,
    cover: book2,
  },
  {
    id: 3,
    title: "Fundamentals of Database Systems",
    author: "Thomas H. Cormen",
    isbn: "978-0134042282",
    category: "All",
    semester: "Sem VI",
    course: "All",
    available: false,
    cover: book3,
  },
  {
    id: 4,
    title: "Introduction to Linear Algebra",
    author: "Thomas H. Cormen",
    isbn: "978-0134042282",
    category: "All",
    semester: "Sem II",
    course: "All",
    available: false,
    cover: book4,
  },
  {
    id: 5,
    title: "Organic Chemistry",
    author: "Thomas H. Cormen",
    isbn: "978-0132350884",
    category: "All",
    semester: "All",
    course: "All",
    available: true,
    cover: book5,
  },
  {
    id: 6,
    title: "Principles of Physics",
    author: "Thomas H. Cormen",
    isbn: "978-0132350884",
    category: "All",
    semester: "All",
    course: "All",
    available: true,
    cover: book6,
  },
  {
    id: 7,
    title: "Operating Systems",
    author: "Thomas H. Cormen",
    isbn: "978-0134042282",
    category: "All",
    semester: "Sem II",
    course: "All",
    available: false,
    cover: book7,
  },
  {
    id: 8,
    title: "Data Structures and Algorithms",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    category: "All",
    semester: "All",
    course: "All",
    available: true,
    cover: book8,
  },
  {
    id: 9,
    title: "Computer Networks",
    author: "Thomas H. Cormen",
    isbn: "978-0134042282",
    category: "All",
    semester: "Sem III",
    course: "All",
    available: false,
    cover: book9,
  },
];
const CustomDropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label className="block text-[12px] font-[Inter] font-medium text-[#1F1D1D] mb-1">
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-3 py-2 border border-[#717171] rounded-md bg-[#FAFCFD] cursor-pointer"
      >
        <span className="text-sm text-[#1F1D1D]">
          {value || `Select ${label}`}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-[#FAFCFD] border border-[#717171] rounded-md shadow-md max-h-40 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-3 py-2 text-sm cursor-pointer ${
                option === value ? "bg-[#04203E] text-white" : "text-[#1F1D1D]"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const BrowseLibrary = ({ wishlist, setWishlist }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [semesterFilter, setSemesterFilter] = useState("All");
  const [courseFilter, setCourseFilter] = useState("All");
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const handleAddToWishlist = (book) => {
    if (!wishlist.find((b) => b.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  };
  // Get unique filter options
  const categories = [...new Set(mockBooks.map((book) => book.category))];
  const semesters = [...new Set(mockBooks.map((book) => book.semester))];
  const courses = [...new Set(mockBooks.map((book) => book.course))];

  // Filter books based on search and filters
  const filteredBooks = useMemo(() => {
    return mockBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn.includes(searchQuery);

      const matchesCategory =
        categoryFilter === "All" || book.category === categoryFilter;
      const matchesSemester =
        semesterFilter === "All" || book.semester === semesterFilter;
      const matchesCourse =
        courseFilter === "All" || book.course === courseFilter;

      return (
        matchesSearch && matchesCategory && matchesSemester && matchesCourse
      );
    });
  }, [searchQuery, categoryFilter, semesterFilter, courseFilter]);

  const BookCard = ({ book, onViewDetails }) => (
    <div className="w-full h-[240px] bg-[#FAFCFD] rounded-lg shadow-lg overflow-hidden border border-[#71717166] flex flex-col justify-between">
      <div className="flex px-4 pt-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={book.cover}
            alt={book.title}
            className="w-[96px] h-[128px] object-cover rounded shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 min-w-0 py-2 px-2">
          <div>
            <h3 className="text-[14px] font-[Inter] font-medium text-[#1F1D1D] mb-1 line-clamp-2">
              {book.title}
            </h3>
            <p className="text-xs text-[#717171] font-[Inter] mb-2">
              {book.author}
            </p>
            <div className="mb-2">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  book.available
                    ? "bg-[#ECFDF7] text-[#10B981]"
                    : "bg-[#FEF2F2] text-[#EF4444]"
                }`}
              >
                {book.available ? "Available" : "Unavailable"}
              </span>
            </div>
            <p className="text-xs text-[#717171] font-[Inter]">
              ISBN: {book.isbn}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#71717166] bg-[#E9EEF4] px-4 py-2 flex justify-between items-center">
        <span className="text-[12px] text-[#717171] font-[Inter]">
          {book.semester}
        </span>
        <button
          onClick={() => onViewDetails(book)}
          className="bg-[#04203E] text-[#FAFCFD] text-xs w-[130px] h-[32px] font-[Inter] rounded flex items-center justify-center gap-1"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#FAFCFD] rounded-lg min-h-screen mx-10">
      {!selectedBook ? (
        <>
          {/* Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#71717166]" />
            </div>
            <input
              type="text"
              placeholder="Search by title, author, or ISBN..."
              className="block w-full pl-10 pr-3 py-2 border border-[#71717166] rounded-md leading-5 bg-[#FAFCFD] placeholder:text-[#717171] placeholder:text-[16px] placeholder:font-[Inter]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <CustomDropdown
              label="Category"
              options={categories}
              value={categoryFilter}
              onChange={setCategoryFilter}
            />
            <CustomDropdown
              label="Semester"
              options={semesters}
              value={semesterFilter}
              onChange={setSemesterFilter}
            />
            <CustomDropdown
              label="Course"
              options={courses}
              value={courseFilter}
              onChange={setCourseFilter}
            />
          </div>

          {/* Results Count */}
          <div className="text-right text-sm text-[#717171] font-[Inter] font-medium mb-4">
            Showing {filteredBooks.length} Results
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onViewDetails={setSelectedBook}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No books found matching your criteria.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </>
      ) : (
        <BookDetails
          book={selectedBook}
          onBack={() => setSelectedBook(null)}
          onAddToWishlist={handleAddToWishlist}
        />
      )}
    </div>
  );
};

export default BrowseLibrary;
