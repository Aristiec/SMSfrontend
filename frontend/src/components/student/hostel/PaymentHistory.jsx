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
    status: "Pending",
  },
];

const PaymentHistory = () => {
  const statusClasses = {
    Pending: "bg-yellow-100 text-yellow-800",
    Paid: "bg-[#ECFDF7] text-[#10B981]",
  };
  return (
    <div className="flex flex-col gap-10 font-[Inter] ">
      <div className="flex flex-col gap-3 bg-[#FAFCFD]">
        <p className="font-medium text-[20px] leading-7 tracking-normal flex items-center text-[#1F1D1D]">
          Payment History
        </p>
        <table className="table-fixed w-full font-[Inter]">
          <thead className="border-b border-[#71717166] bg-[#F4F7FA]">
            <tr className="font-medium text-[14px] leading-4 tracking-normal text-[#717171]">
              <th className="py-5 px-4 w-1/5 text-left">Receipt No</th>
              <th className="py-5 px-4 w-1/5 text-left">Date</th>
              <th className="py-5 px-4 w-1/5 text-left">Amount</th>
              <th className="py-5 px-4 w-1/5 text-left">Period</th>
              <th className="py-5 px-4 w-1/5 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#71717166]">
            {paymentHistory.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#71717166] font-[400] text-[14px] leading-4 tracking-normal text-[#1F1D1D]"
              >
                <td className="py-5 px-4 w-1/5">{item.receiptNo}</td>
                <td className="py-5 px-4 w-1/5">{item.date}</td>
                <td className="py-5 px-4 w-1/5">{item.amount}</td>
                <td className="py-5 px-4 w-1/5 ">{item.period}</td>
                <td className="py-5 px-4  w-1/5">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      statusClasses[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
