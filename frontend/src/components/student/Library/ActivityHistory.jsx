import React from "react";

const activityData = [
  {
    book: "Programming in C++",
    isbn: "978-0132350853",
    borrow: "7/11/2023",
    due: "7/12/2023",
    returnDate: "6/12/2023",
    status: "Returned",
    fine: "-",
  },
  {
    book: "Computer Networks",
    isbn: "978-0132356974",
    borrow: "19/05/2023",
    due: "19/06/2023",
    returnDate: "22/06/2023",
    status: "Returned Late",
    fine: "₹250",
  },
  {
    book: "Java: The Complete Reference",
    isbn: "978-0132350822",
    borrow: "4/9/2023",
    due: "4/10/2023",
    returnDate: "1/10/2023",
    status: "Returned",
    fine: "-",
  },
  {
    book: "Artificial Intelligence: A Modern Approach",
    isbn: "978-0132350051",
    borrow: "12/03/2023",
    due: "12/04/2023",
    returnDate: "-",
    status: "Not Returned",
    fine: "₹250 + 100",
  },
  {
    book: "Fundamentals of Database Systems",
    isbn: "978-0132356794",
    borrow: "19/05/2023",
    due: "19/06/2023",
    returnDate: "22/06/2023",
    status: "Returned Late",
    fine: "₹250",
  },
];

const statusColor = {
  Returned: "text-[#10B981] bg-[#ECFDF7]",
  "Not Returned": "text-[#EF4444] bg-[#FEF2F2]",
  "Returned Late": "text-[#F97316] bg-[#FFF4ED]",
};

const ActivityHistory = () => {
  return (
    <div className="bg-[#FAFCFD] flex flex-col gap-3 py-6 rounded-xl ">
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
          <tbody>
            {activityData.map((activity, index) => (
              <tr
                key={index}
                className="border-b border-[#71717166] text-[#1F1D1D] text-[14px] font-normal leading-[18px] tracking-normal"
              >
                <td className="px-5 py-3">
                  <p className="text-[16px] font-medium leading-6 truncate">
                    {activity.book}
                  </p>
                  <p className="text-[#717171] text-[12px] font-normal leading-5">
                    {activity.isbn}
                  </p>
                </td>
                <td className="px-5 py-3">{activity.borrow}</td>
                <td className="px-5 py-3">{activity.due}</td>
                <td className="px-5 py-3">{activity.returnDate}</td>
                <td className="px-5 py-3">
                  <span
                    className={`text-[12px] font-medium leading-4 tracking-normal px-3 py-1 rounded-full inline-flex items-center ${
                      statusColor[activity.status]
                    }`}
                  >
                    {activity.status}
                  </span>
                </td>
                <td className="px-5 py-3">{activity.fine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityHistory;
