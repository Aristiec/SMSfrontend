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
        <div className="flex flex-col gap-3 justify-center">
          <div className="bg-[#F4F7FA] border-b-1 border-[#71717166] grid grid-cols-7 font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171] tracking-normal gap-3 p-5 ">
            <p className="col-span-2">Books</p>
            <p>Due Date</p>
            <p>Return Date</p>
            <p>Days Late</p>
            <p>Fines</p>
            <p>Action</p>
          </div>
          <div className="flex flex-col">
            {unpaidFines.map((fine, index) => (
              <div
                key={index}
                className="border-b-1 border-[#71717166] py-5 gap-3  grid grid-cols-7"
              >
                <div className="col-span-2">
                  <p className="text-[#1F1D1D] font-[Inter] font-medium text-[16px] leading-6 tracking-normal  truncate ">
                    {fine.book}
                  </p>
                  <p className="text-[#717171] font-[Inter] font-[400] text-[12px] leading-5 tracking-normal flex items-center">
                    {fine.isbn}
                  </p>
                </div>
                <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                  {fine.dueDate}
                </p>

                <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                  {fine.returnDate}
                </p>
                <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                  {fine.daysLate}
                </p>
                <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                  {fine.fine}
                </p>
                <div className="flex items-center">
                  <button className="bg-[#04203E] py-1 px-5 gap-[10px] rounded-sm flex font-[Inter] font-medium text-[14px] leading-5 tracking-normal text-[#FAFCFD] ">
                    Pay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FAFCFD] flex flex-col gap-3 rounded-xl ">
        <p className="font-[Inter] font-medium text-[20px] leading-7 tracking-normal text-[#1F1D1D] flex items-center">
          Payment History
        </p>
        <div className="flex flex-col gap-3 justify-center">
          <div className="bg-[#F4F7FA] border-b-1 border-[#71717166] grid grid-cols-6 font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171] tracking-normal gap-3 p-5 ">
            <p className="col-span-2">Books</p>
            <p>Days Late</p>
            <p>Fine</p>
            <p>Paid On</p>
            <p>Status</p>
          </div>
          <div className="flex flex-col">
            {paymentHistory.map((fine, index) => (
              <div
                key={index}
                className="border-b-1 border-[#71717166] py-5 gap-3  grid grid-cols-6"
              >
                <div className="col-span-2">
                  <p className="text-[#1F1D1D] font-[Inter] font-medium text-[16px] leading-6 tracking-normal  truncate ">
                    {fine.book}
                  </p>
                  <p className="text-[#717171] font-[Inter] font-[400] text-[12px] leading-5 tracking-normal flex items-center">
                    {fine.isbn}
                  </p>
                </div>
                <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                  {fine.daysLate}
                </p>
                <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                  {fine.fine}
                </p>
                <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                  {fine.paidOn}
                </p>
                <div
                  className="flex items-center"
                >
                  <p
                    className={`font-[Inter] font-medium text-[12px] leading-4 tracking-normal gap-2 px-3 py-1  rounded-full flex items-center ${
                      statusColor[fine.status]
                    }`}
                  >
                    {fine.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fines;
