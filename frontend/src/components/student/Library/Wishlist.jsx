import React from "react";
import { Eye, Trash2 } from "lucide-react";

const Wishlist = ({ wishlist, onViewDetails, onRemove }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {wishlist.length === 0 ? (
        <p className="text-gray-500 col-span-full">Your wishlist is empty.</p>
      ) : (
        wishlist.map((book) => (
          <div
            key={book.id}
            className="w-full h-auto bg-[#FAFCFD] rounded-lg shadow-lg overflow-hidden border border-[#71717166] flex flex-col justify-between"
          >
            {/* Book Info */}
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

            {/* View Details Footer */}
            <div className="border-t border-b mt-4 border-[#71717166] bg-[#E9EEF4] px-4 py-2 flex justify-between items-center">
              <span className="text-[12px] text-[#717171] font-[Inter]">
                {book.semester || "N/A"}
              </span>
              <button
                onClick={() => onViewDetails(book)}
                className="bg-[#04203E] text-[#FAFCFD] text-xs w-[130px] h-[32px] font-[Inter] rounded flex items-center justify-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Details</span>
              </button>
            </div>

            {/* Remove Button Below Footer */}
            <div className="px-4 pb-4 pt-2">
              <button
                onClick={() => onRemove(book.id)}
                className="w-full bg-[#FAFCFD] border border-[#000000] text-[#EF4444] text-[12px]  px-3 py-2 font-[Inter] rounded flex items-center justify-center gap-1 "
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove from Wishlist</span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
