import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowActivity } from "../../../features/librarySlice";

const statusColor = {
  Returned: "text-[#10B981] bg-[#ECFDF7]",
  "Not Returned": "text-[#EF4444] bg-[#FEF2F2]",
  "Returned Late": "text-[#F97316] bg-[#FFF4ED]",
};

const ActivityHistory = () => {
  const dispatch = useDispatch();
  const { activity, loading, error } = useSelector((state) => state.library);

  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      dispatch(getBorrowActivity(studentId));
    }
  }, [dispatch]);

  return (
    <div className="bg-[#FAFCFD] flex flex-col gap-3 py-6 rounded-xl">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3 font-[Inter]">
          <thead>
            <tr className="bg-[#F4F7FA] text-[#717171] text-[14px] font-medium leading-[18px] tracking-normal">
              <th className="text-left px-5 py-3 col-span-2">Books</th>
              <th className="text-left px-5 py-3">Borrow Date</th>
              <th className="text-left px-5 py-3">Due Date</th>
              <th className="text-left px-5 py-3">Return Date</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Fines</th>
            </tr>
          </thead>
          <tbody className="text-[#1F1D1D] text-[14px] font-[Inter]">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-red-500">
                  {error}
                </td>
              </tr>
            ) : activity.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  No activity found.
                </td>
              </tr>
            ) : (
              activity.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#71717166] text-[#1F1D1D] text-[14px] font-normal leading-[18px] tracking-normal"
                >
                  <td className="px-5 py-3">
                    <p className="text-[16px] font-medium leading-6 truncate">
                      {item.bookTitle}
                    </p>
                    <p className="text-[#717171] text-[12px] font-normal leading-5">
                      ISBN:{item.isbn}
                    </p>
                  </td>
                  <td className="px-5 py-3">{item.issueDate || "-"}</td>
                  <td className="px-5 py-3">{item.dueDate || "-"}</td>
                  <td className="px-5 py-3">{item.returnDate || "-"}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`text-[12px] font-medium leading-4 tracking-normal px-3 py-1 rounded-full inline-flex items-center ${
                        statusColor[item.status] || ""
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">{item.fine || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityHistory;
