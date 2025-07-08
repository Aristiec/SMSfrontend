import React from "react";

const paymentHistory = [
  {
    receiptNo: "RCPT-2024-001-2023",
    date: "Jul 12, 2023",
    amount: "₹45000",
    period: "Jan - Jul 2023",
    status: "Paid",
  },
  {
    receiptNo: "RCPT-2024-001-2023",
    date: "Jul 12, 2023",
    amount: "₹45000",
    period: "Jan - Jul 2023",
    status: "Paid",
  },
  {
    receiptNo: "RCPT-2024-001-2023",
    date: "Jul 12, 2023",
    amount: "₹45000",
    period: "Jan - Jul 2023",
    status: "Paid",
  },
];

const PaymentHistory = () => {
  const statusClasses = {
    Pending: "bg-yellow-100 text-yellow-800",
    Paid: "bg-[#ECFDF7] text-[#10B981]",
  };

  return (
    <div className="flex flex-col gap-6 font-[Inter]">
      <div className="flex flex-col gap-3 bg-[#FAFCFD] rounded-[8px] p-6">
        <p className="font-medium text-[20px] leading-7 tracking-normal text-[#1F1D1D]">
          Payment History
        </p>

        {/* Header */}
        <div className="grid grid-cols-5 text-[14px] font-medium text-[#717171] bg-[#F4F7FA] px-4 py-3 border-b border-[#E0E0E0]">
          <p className="text-left">Receipt No</p>
          <p className="text-left">Date</p>
          <p className="text-left">Amount</p>
          <p className="text-left">Period</p>
          <p className="text-right px-7">Status</p>
        </div>

        {/* Body */}
        {paymentHistory.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center text-[14px] text-[#1F1D1D] font-normal px-4 py-4 border-b border-[#E0E0E0]"
          >
            <p>{item.receiptNo}</p>
            <p>{item.date}</p>
            <p>{item.amount}</p>
            <p>{item.period}</p>
            <p className="text-right px-5">
              <span
                className={`px-3 py-[2px] rounded-full text-xs font-medium ${
                  statusClasses[item.status]
                }`}
              >
                {item.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
