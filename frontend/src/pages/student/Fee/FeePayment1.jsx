import React from 'react';
import HeaderFee from './HeaderFee';
import { Check, CreditCard, Landmark, Wallet, ChevronDown } from 'lucide-react';
import StudentInfoCardHeader from './StudentInfoCardHeader ';

const FeePayment1 = () => {
  const paymentOptions = [
    { id: 1, label: 'Credit/Debit Cards', icon: CreditCard },
    { id: 2, label: 'Net Banking', icon: Landmark },
    { id: 3, label: 'Wallets', icon: Wallet },
  ];

  const importantInfo = [
    {
      title: 'Due date',
      desc: 'Till 30 Apr, 2025: 09:00 AM',
    },
    {
      title: 'For fees related query',
      desc: 'Contact - kkartikey80@gmail.com',
    },
  ];

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-4 mt-4">
        <HeaderFee />

        <StudentInfoCardHeader />

        {/* Fee  Section */}
        <div className="w-full rounded-[8px] border border-[#CCCCCC] bg-[#FFFFFF] p-4 flex flex-col gap-4">
          <div className="rounded-[16px] border border-[#CCCCCC] bg-white p-4 flex flex-col gap-3">
            <div className="flex justify-between w-[356px]">
              <div className="text-[14px] font-semibold text-[#000000] leading-[20px]">
                Grand Total
              </div>
              <div className="text-[14px] font-semibold text-[#10B981] leading-[20px]">
                Rs. 22756
              </div>
            </div>
            <div className="flex justify-between w-[356px]">
              <div className="text-[14px] font-semibold text-[#000000] leading-[20px]">
                Taxes
              </div>
              <div className="text-[14px] font-semibold text-[#000000] leading-[20px]">
                Rs. 1000
              </div>
            </div>
          </div>

          {/* Invoice section */}
          <div className="rounded-[16px] border border-[#CCCCCC] bg-white p-4 flex flex-col gap-4">
            <div className="text-[16px] font-bold text-[#000000] leading-[100%]">
              Invoice will be shared on e-mail
            </div>
            <div className="text-[16px] font-normal text-[#000000] leading-[100%] font-400">
              Will be shared next day of fee payment
            </div>
          </div>

          {/* Important section */}
          <div className="rounded-[16px] border border-[#CCCCCC] bg-white p-4 flex flex-col gap-4 font-[Inter]">
            <div className="text-[14px] font-semibold text-[#000000] leading-[20px] opacity-90">
              Important information
            </div>

            {importantInfo.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-[14px] h-[14px] rounded-full bg-[#38A836] flex items-center justify-center">
                  <Check size={14} color="white" strokeWidth={3} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[14px] font-semibold text-[#000000] leading-[20px]">
                    {item.title}
                  </div>
                  <div className="text-[14px] font-semibold text-[#666666] leading-[20px]">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div className="w-full rounded-[16px] border border-[#CCCCCC] bg-[#FFFFFF] p-4 flex flex-col gap-4">
          <div className="text-[20px] font-bold text-[#100001] font-[Plus Jakarta Sans] leading-[24px]">
            Payment options
          </div>

          {paymentOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div key={option.id} className="flex flex-col gap-[6px]">
                <div className="flex items-center justify-between py-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-[26px] h-[26px] rounded-[4px] p-1 bg-[#F0F0F0] flex items-center justify-center">
                      <IconComponent size={18} strokeWidth={1.8} />
                    </div>
                    <div className="text-[14px] font-medium text-[#100001] leading-[20px]">
                      {option.label}
                    </div>
                  </div>
                  <ChevronDown size={16} strokeWidth={2} />
                </div>
                {option.id !== paymentOptions.length && (
                  <div className="border-t border-[#CCCCCC]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeePayment1;
