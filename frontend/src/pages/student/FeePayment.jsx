import React from "react";
import inVoiceImage from "../../assets/invoice.svg";
import completed from "../../assets/completed.svg";
import pending from "../../assets/pending.svg";
import card from "../../assets/card.svg";

import { useNavigate } from "react-router-dom";
const feeData = [
  {
    id: 1,
    type: "Paid",
    title: "Tution Fee",
    date: "August 30, 2023",
    status: "Completed",
    amount: "₹26,000",
  },
  {
    id: 2,
    type: "Pending",
    title: "Exam Fee",
    date: "August 30, 2023",
    status: "Payment Required",
    amount: "₹6,000",
  },
  {
    id: 3,
    type: "Pending",
    title: "School Trip Fee",
    date: "August 30, 2023",
    status: "Payment Required",
    amount: "₹6,000",
  },
];

const FeeTab = ({ title, type, amount, status, date }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-[12px] p-4 gap-2 bg-[#FAFCFD] shadow-md flex flex-col">
      <div className="flex justify-between flex-wrap ">
        <div className="flex gap-6 items-center">
          <h3 className="text-[#1F1D1D] font-medium text-base">{title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              type === "Paid"
                ? "bg-[#ECFDF7] text-[#10B981]"
                : "bg-[#FFF4ED] text-[#F97316]"
            }`}
          >
            {type}
          </span>
        </div>
        <div className="text-[#1F1D1D] font-medium text-base">{amount}</div>
      </div>

      <div className="flex justify-between flex-wrap gap-3 items-center">
        <div className="flex gap-6 flex-wrap items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#1F1D1D]">Due Date:</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={status === "Completed" ? completed : pending}
              alt="status"
              className="w-4 h-4"
            />
            <span
              className={`${
                status === "Completed" ? "text-[#10B981]" : "text-[#F97316]"
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        <button
          onClick={() =>
            type !== "Paid" &&
            navigate("/student/fees/payment", {
              state: { title, amount, date, status },
            })
          }
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
            type === "Paid"
              ? "bg-[#FAFCFD] text-[#04203E] border border-[#04203E]"
              : "bg-[#04203E] text-white"
          }`}
        >
          <img
            src={type === "Paid" ? inVoiceImage : card}
            alt="action"
            className="w-4 h-4"
          />
          {type === "Paid" ? "Invoice" : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

const FeePayment = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-7 mt-4">
        {/* Header */}
        <div className="sticky top-20 rounded-[12px] px-6 py-4 bg-[#04203E] text-white">
          <h2 className="text-2xl font-bold font-[Merriweather]">
            Fee Payment
          </h2>
        </div>

        {/* Summary */}
        <div className="bg-[#FAFCFD] p-6 rounded-[12px] shadow-md flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex-1 space-y-1">
            <div className="text-base font-medium">Payment Summary</div>
            <p className="text-sm">
              Student: Asha Singh | Class: CS | Student ID: 1RUB203020
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-[338px]">
            <div className="flex justify-between border border-[#04203E] rounded-md px-4 py-2 bg-[#FAFCFD]">
              <span className="text-[#04203E] text-sm font-medium">
                Total Paid
              </span>
              <span className="text-[#04203E] text-base font-medium">
                ₹26,000
              </span>
            </div>
            <div className="flex justify-between border border-[#04203E] rounded-md px-4 py-2 bg-[#FAFCFD]">
              <span className="text-[#04203E] text-sm font-medium">
                Total Pending
              </span>
              <span className="text-[#04203E] text-base font-medium">
                ₹12,000
              </span>
            </div>
          </div>
        </div>

        {/* Fee Items */}
        <div className="space-y-6">
          {feeData.map((fee, index) => (
            <FeeTab
              key={index}
              title={fee.title}
              type={fee.type}
              amount={fee.amount}
              status={fee.status}
              date={fee.date}
            />
          ))}
        </div>

        {/* Pay All Dues Button */}
        <div className="flex justify-end">
          <button
            onClick={() =>
              navigate("/student/fees/payment", {
                state: { fees: feeData.filter((f) => f.type === "Pending") },
              })
            }
            className="cursor-pointer bg-[#04203E] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
          >
            <span>Pay All Dues</span>
            <span>(₹12,000)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
