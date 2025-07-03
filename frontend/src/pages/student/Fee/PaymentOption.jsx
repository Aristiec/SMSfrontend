import React, { useState } from "react";
import { ShieldCheck, CreditCard } from "lucide-react";
import credit from "../../../assets/credit.svg";
import PhonePeIcon from "../../../assets/phonepe.svg";
import AmazonPayIcon from "../../../assets/amazonpay.svg";
import sbi from '../../../assets/sbi.svg'
import hdfc from '../../../assets/hdfc.svg'
import icici  from '../../../assets/icici.svg'
import axis  from '../../../assets/axis.svg'
import kotak  from '../../../assets/kotak.svg'
import yesbank  from '../../../assets/yesbank.svg'

const formatCardNumber = (value) => {
  const cleaned = value.replace(/\D/g, "").slice(0, 16);
  const groups = cleaned.match(/.{1,4}/g);
  return groups ? groups.join(" ") : "";
};
export const CreditCardComponent = () => {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      setCardDetails((prev) => ({
        ...prev,
        number: formatCardNumber(value),
      }));
    } else {
      setCardDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <div className="bg-[#FFFFFF] rounded-1xl p-4 flex flex-col gap-4  border border-[#CCCCCCCC]  rounded-[16px] ">
      <div className="flex gap-4 items-center">
        <ShieldCheck size={20} color="#00C566" />
        <p className="font-[Plus Jakarta Sans] font-[400] text-[14px] leading-5 tracking-normal items-center flex text-[#000000]">
          Your payment methods are stored securly
        </p>
      </div>
      <div className="flex gap-4 flex-col ">
        <div className="flex justify-between w-[30%] items-center">
          <p className="font-[Plus Jakarta Sans] font-[400] text-[16px] leading-6 tracking-normal items-center flex text-[#000000]">
            Pay with
          </p>
          <img src={credit} className="h-full " />
        </div>
        <div className="flex gap-4">
          <CreditCard size={17} color="#000000" />
          <p className="font-[Nunito Sans] font-[600] text-[14px] leading-5 tracking-normal items-center flex text-[#666666] ">
            Credit or debit card
          </p>
        </div>
        <div className="grid grid-cols-3  border border-[#CCCCCC] rounded-lg  w-[40%]">
          <div className="col-span-3 flex flex-col gap-2 border-b-1 border-[#CCCCCC] py-3 px-4 w-full">
            <label
              htmlFor="card-number"
              className="font-[Nunito Sans] font-[600] text-[16px] leading-4 tracking-normal items-center flex text-[#666666]"
            >
              Card number
            </label>
            <input
              id="card-number"
              type="text"
              name="number"
              maxLength={19}
              value={cardDetails.number}
              onChange={handleChange}
              className="font-[Nunito Sans] font-[400] text-[14px] leading-3 tracking-normal items-center flex text-[#666666] outline-none  "
              placeholder="1234    5678    9012    3456"
            />
          </div>
          <div className="py-3 px-4 flex flex-col gap-2  border-r border-[#CCCCCC]">
            <label
              htmlFor="expiry"
              className="font-[Nunito Sans] font-[600] text-[16px] leading-4 tracking-normal items-center flex text-[#666666]"
            >
              Expiration
            </label>
            <input
              id="expiry"
              type="text"
              value={cardDetails.expiry}
              onChange={handleChange}
              name="expiry"
              placeholder="MM / YY"
              className="font-[Nunito Sans] font-[400] text-[14px] leading-3 tracking-normal items-center flex text-[#666666] outline-none "
            />
          </div>
          <div className="py-3 px-4 flex flex-col gap-2  ">
            <label
              htmlFor="expiry"
              className="font-[Nunito Sans] font-[600] text-[16px] leading-4 tracking-normal items-center flex text-[#666666]"
            >
              CVV
            </label>
            <input
              id="expiry"
              type="text"
              value={cardDetails.cvv}
              onChange={handleChange}
              name="cvv"
              placeholder="3 digits"
              maxLength={3}
              className="font-[Nunito Sans] font-[400] text-[14px] leading-3 tracking-normal items-center flex text-[#666666] outline-none "
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="size-[11px] border border-[#7E7E7E] cursor-pointer"></div>
          <p className="font-[Nunito Sans] font-[600] text-[14px] leading-6 tracking-normal text-[#666666] ">
            Save details for future payment
          </p>
        </div>
        <button className="cursor-pointer bg-[#ECFDF7] gap-2 py-2 px-4 rounded-[10px] flex items-center justify-center">
          <p className="text-[#10B981] font-[Inter] font-[600] text-[18px] leading-[100%] teacking-normal flex items-center">
            Pay now
          </p>
        </button>
      </div>
    </div>
  );
};

export const Upi = () => {
  const upi = [
    { id: 1, label: "Phone pay", icon: PhonePeIcon },
    { id: 2, label: "Amazon pay", icon: AmazonPayIcon },
    { id: 3, label: "Phone pay", icon: PhonePeIcon },
    { id: 4, label: "Amazon pay", icon: AmazonPayIcon },
  ];
  return (
    <div className="flex flex-col gap-3 w-full ">
      {upi.map((upi) => (
        <div
          key={upi.id}
          className="flex items-center justify-between w-full py-1 "
        >
          <div className="flex items-center gap-3">
            <img src={upi.icon} className="w-[24px] h-[24px]" />
            <span className="text-[14px] leading-[20px] font-normal  text-[#1F1D1D] font-[Nunito Sans]">
              {upi.label}
            </span>
          </div>
          <input
            type="radio"
            name="payment"
            className="w-[16px] h-[16px] text-[#242424]"
            value={upi.id}
          />
        </div>
      ))}
    </div>
  );
};

export const NetBanking = () => {
  const netBankingList = [
    { id: 1, name: "SBI", icon: sbi },
    { id: 2, name: "HDFC", icon: hdfc },
    { id: 3, name: "ICICI", icon: icici },
    { id: 4, name: "Axis", icon: axis },
    { id: 5, name: "Kotak", icon: kotak },
    { id: 6, name: "Yes Bank", icon: yesbank },
  ];
  return (
    <div className="flex gap-4 flex-wrap">
      {netBankingList.map((bank) => (
        <div
          key={bank.id}
          className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-300 p-3 bg-[#F0F0F0] w-[150px]"
        >
          <img src={bank.icon} alt={bank.name} className="h-6 object-contain" />
          <div className="text-sm font-semibold text-[#100001] font-['Inter']">
            {bank.name}
          </div>
        </div>
      ))}
      <div className="w-full mt-4">
        <button className="w-full h-[42px] leading-[24px] py-2 rounded-full bg-[#ECFDF7] text-[#10B981] font-semibold size-[16px]">
          Proceed
        </button>
      </div>
    </div>
  );
};
