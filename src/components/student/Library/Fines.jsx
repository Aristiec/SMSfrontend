import React from "react";

const unpaidFines = [
  {
    book: "Artificial Intelligence: A Modern Approach",
    isbn: "978-0132350051",
    dueDate: "12/04/2023",
    returnDate: "-",
    daysLate: 8,
    fine: "₹250 + 100",
    isPaid: false,
  },
];

const paymentHistory = [
  {
    book: "Computer Networks",
    isbn: "978-0132356974",
    daysLate: 8,
    fine: "₹250",
    paidOn: "22/06/2023",
    status: "Paid",
  },
  {
    book: "Fundamentals of Database Systems",
    isbn: "978-0132356794",
    daysLate: 8,
    fine: "₹250",
    paidOn: "22/06/2023",
    status: "Paid",
  },
];

const statusColor = {
  Paid: "text-[#10B981] bg-[#ECFDF7]",
  "Not Paid": "text-red-500 bg-red-50",
};
const Fines = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="bg-[#FAFCFD] gap-3 rounded-xl flex flex-col">
        <p className="font-[Inter] font-medium text-[20px] leading-7 tracking-normal text-[#1F1D1D] flex items-center">
          Unpaid Fines
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 font-[Inter]">
            <thead>
              <tr className="bg-[#F4F7FA] text-[#717171] text-[14px] font-medium leading-[18px] tracking-normal">
                <th className="text-left px-5 py-3 col-span-2">Books</th>
                <th className="text-left px-5 py-3">Due Date</th>
                <th className="text-left px-5 py-3">Return Date</th>
                <th className="text-left px-5 py-3">Days Late</th>
                <th className="text-left px-5 py-3">Fines</th>
                <th className="text-left px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {unpaidFines.map((fine, index) => (
                <tr
                  key={index}
                  className="border-b border-[#71717166] text-[#1F1D1D] text-[14px] font-normal leading-[18px] tracking-normal"
                >
                  <td className="px-5 py-3">
                    <p className="text-[16px] font-medium leading-6 truncate">
                      {fine.book}
                    </p>
                    <p className="text-[#717171] text-[12px] font-normal leading-5">
                      {fine.isbn}
                    </p>
                  </td>
                  <td className="px-5 py-3">{fine.dueDate}</td>
                  <td className="px-5 py-3">{fine.returnDate}</td>
                  <td className="px-5 py-3">{fine.daysLate}</td>
                  <td className="px-5 py-3">{fine.fine}</td>
                  <td className="px-5 py-3">
                    <button className="bg-[#04203E] py-1 px-5 gap-[10px] rounded-sm text-[#FAFCFD] text-[14px] font-medium leading-5 tracking-normal">
                      Pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-[#FAFCFD] flex flex-col gap-3 rounded-xl ">
        <p className="font-[Inter] font-medium text-[20px] leading-7 tracking-normal text-[#1F1D1D] flex items-center">
          Payment History
        </p>
       <div className="overflow-x-auto">
  <table className="min-w-full border-separate border-spacing-y-3 font-[Inter]">
    <thead>
      <tr className="bg-[#F4F7FA] text-[#717171] text-[14px] font-medium leading-[18px] tracking-normal">
        <th className="text-left px-5 py-3 col-span-2">Books</th>
        <th className="text-left px-5 py-3">Days Late</th>
        <th className="text-left px-5 py-3">Fine</th>
        <th className="text-left px-5 py-3">Paid On</th>
        <th className="text-left px-5 py-3">Status</th>
      </tr>
    </thead>
    <tbody>
      {paymentHistory.map((fine, index) => (
        <tr
          key={index}
          className="border-b border-[#71717166] text-[#1F1D1D] text-[14px] font-normal leading-[18px] tracking-normal"
        >
          <td className="px-5 py-3">
            <p className="text-[16px] font-medium leading-6 truncate">{fine.book}</p>
            <p className="text-[#717171] text-[12px] font-normal leading-5">{fine.isbn}</p>
          </td>
          <td className="px-5 py-3">{fine.daysLate}</td>
          <td className="px-5 py-3">{fine.fine}</td>
          <td className="px-5 py-3">{fine.paidOn}</td>
          <td className="px-5 py-3">
            <span
              className={`text-[12px] font-medium leading-4 tracking-normal px-3 py-1 rounded-full inline-flex items-center ${statusColor[fine.status]}`}
            >
              {fine.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default Fines;
