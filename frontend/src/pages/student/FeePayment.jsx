import React from "react";

import inVoiceImage from "../../assets/inVoice.png";
import completed from "../../assets/completed.png";
import pending from "../../assets/pending.png";
import payNow from "../../assets/payNow.png";

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
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
      className=" w-[1120px] h-[108px] rounded-[12px] p-[20px] gap-[8px] bg-[#FAFCFD] flex flex-col "
    >
      <div className=" w-[1072px] h-[24px] flex justify-between">
        <div className="max-w-[213px] h-[24px] flex gap-[24px]">
          <h3 className="max-w-[118px] h-[24px] font-[Inter] font-medium text-[16px] leading-[24px] tracking-[0] flex items-center text-[#1F1D1D]">
            {title}
          </h3>
          <div
            className={`max-w-[71px] h-[20px] rounded-[12px] py-[2px] px-[12px] ${
              type === "Paid" ? "bg-[#ECFDF7]" : "bg-[#FFF4ED]"
            } font-[Inter] font-medium text-[12px] leding-[16px] tracking-[0] flex items-center ${
              type === "Paid" ? "text-[#10B981]" : "text-[#F97316]"
            } `}
          >
            {type}
          </div>
        </div>
        <div className="w-[64px] h-[24px] font-[Inter] font-medium text-[16px] leading-[24px] tracking-[0] flex items-center text-[#1F1D1D]">
          {amount}
        </div>
      </div>
      <div className="w-[1072px] h-[28px] flex justify-between">
        <div className="min-w-[270px] h-[20px] flex gap-[24px]">
          <div className="w-[155px] h-[20px]  gap-[4px] font-[Inter] font-[400px] text-[12px] leading-[20px] tracking-[0] flex items-center text-[#1F1D1D">
            <h3 className="w-[56px] h-[20px]">Due Date:</h3>
            <span className="min-w-[95px] h-[20px]">{date}</span>
          </div>
          <div className="min-w-[132px] h-[20px] flex gap-[12px] items-center">
            {status === "Completed" ? (
              <img
                className="w-[16px] h-[16px]"
                src={completed}
                alt="completed"
              />
            ) : (
              <img className="w-[16px] h-[16px]" src={pending} alt="pending" />
            )}
            <div className="w-[104px] h-[20px] font-[Inter] font-[400px] text-[12px] leading-[20px] tracking-[0] flex items-center text-[#10B981]">
              {status}
            </div>
          </div>
        </div>
        <button
          className={`min-w-[90px] h-[28px] rounded-[8px] border-1 py-[4px] px-[12px] flex gap-[12px] ${
            type === "Paid" ? "bg-[#FAFCFD]" : "bg-[#04203E]"
          } items-center `}
        >
          <div className="w-[13px] h-[16px] flex flex-col justify-center items-center">
            {type === "Paid" ? (
              <img
                className="w-[13px] h-[16px]"
                src={inVoiceImage}
                alt="inVoiceImage"
              />
            ) : (
              <img className="w-[16px] h-[12px]" src={payNow} alt="payNow" />
            )}
          </div>
          <div
            className={`min-w-[41px] h-[20px] font-[Inter] font-[400px] text-[12px] leading-[20px] tracking-[0] flex items-center ${
              type === "Paid" ? "text-[#04203E]" : "text-[#FAFCFD]"
            }  justify-center`}
          >
            {type === "Paid" ? "Invoice" : "Pay Now"}
          </div>
        </button>
      </div>
    </div>
  );
};

const FeePayment = () => {
  return (
    <>
      <div className="w-[1120px] mt-[20px] ml-[20px] space-y-[20px] ">
        {/* header  */}
        <div className="h-[68px] rounded-[12px] px-[24px] py-[18px] bg-[#04203E] flex items-center">
          <h2 className="text-[#FAFCFD] font-bold text-[24px] leading-[28px] tracking-[-0.01em] font-[Merriweather]">
            Fee Payment
          </h2>
        </div>

        <div className="w-[1120px] h-[636px] pb-[24px] gap-[40px] overflow-y-auto flex flex-col  ">
          <div className=" h-[532px] w-[1120] gap-[24px] flex flex-col">
            <div
              style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
              className="flex justify-between rounded-[12px] bg-[#FAFCFD] h-[136px] items-center font-medium text-[16px] p-[24px] "
            >
              <div className="w-[332px] h-[48px] flex flex-col gap-[4px] leading-[24px] tracking-[0] ">
                <div className="font-[Inter] leading-[24px] tracking-[0] align-center text-[16px] text-semibold">
                  Payment Summary
                </div>
                <h3 className="text-[12px] w-[400px] font-[Inter] tracking-[0] leading-[26px] align-center">
                  Student: Asha Singh | Class: CS | Student ID: 1RUB203020
                </h3>
              </div>
              <div className="w-[338px] h-[88px] flex flex-col gap-[8px]">
                <div className="w-[338px] h-[40px] rounded-[8px] border-1 border-[#04203E] flex justify-between items-center  bg-[#FAFCFD] text-[#FAFCFD] py-[8px] px-[12px]">
                  <h3 className="font-[Inter] w-[57px] h-[18px] font-medium text-[12px] leading-[18px] tracking-[0] text-[#04203E] items-center flex ">
                    Total Paid
                  </h3>
                  <h3 className="font-[Inter] font-medium text-[16px] leading-[24px] tracking-[0] text-[#04203E]">
                    ₹26,000
                  </h3>
                </div>
                <div className="w-[338px] h-[40px] rounded-[8px] border-1 border-[#04203E] flex justify-between items-center  bg-[#FAFCFD] text-[#FAFCFD] py-[8px] px-[12px]">
                  <h3 className="font-[Inter] w-[79px] h-[18px] font-medium text-[12px] leading-[18px] tracking-[0] text-[#04203E] items-center flex ">
                    Total Pending
                  </h3>
                  <h3 className="font-[Inter] font-medium text-[16px] leading-[24px] tracking-[0] flex items-center text-[#04203E]">
                    ₹12,000
                  </h3>
                </div>
              </div>
            </div>

            <div className=" w-[1120px] h-[372px] flex flex-col gap-[24px] ">
              {/* fees */}
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
          </div>
          <div className="w-full flex justify-end">
            <button className=" rounded-[8px] px-[12px] py-[8px] flex gap-[12px] bg-[#04203E] text-[#FAFCFD] justify-center items-center ">
              <p className="font-[Inter] text-center font-medium text-[14px] leading-[24px] tracking-[0]">
                Pay All Dues
              </p>
              <p className="font-[Inter] text-center font-medium text-[14px] leading-[24px] tracking-[0]">
                (₹12,000)
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeePayment;
