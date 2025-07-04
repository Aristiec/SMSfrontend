import { Bus } from "lucide-react";
function TransportService() {
  return (
    <div className="w-full min-h-[108px] bg-[#E9EEF4] flex flex-col items-center px-4 pt-4">
      <div className="w-full h-[68px] bg-[#04203E] rounded-[12px] flex items-center px-[24px] py-[18px] gap-[10px]">
        <span className="text-[#FAFCFD] font-['Merriweather,serif'] font-bold text-[24px] leading-[28px]">
          Transport
        </span>
      </div>
      <div className="w-full h-[808px] rounded-[12px] bg-[#FAFCFD] p-[24px] gap-[16px] mt-8 flex flex-col items-center justify-center">
        <div className="w-[1072px] h-[432px] pb-[200px] gap-[48px]   rounded-[12px] flex flex-col items-center justify-center">
          <div className="w-[1072px] h-[232px] gap-[24px] flex flex-col items-center   ">
            <div className="w-[72px] h-[72px] rounded-full bg-[#F5FAFF] flex items-center justify-center shadow-lg">
              <Bus size={40} color="#2196F3" />
            </div>
            <div className="w-[1072px] h-[136px] gap-[16px] flex flex-col items-center justify-center ">
              <div className="w-[1072px] h-[24px] flex items-center justify-center">
                <span className="font-inter font-[600] text-[16px] leading-[24px] text-center">
                  Request a Bus Service
                </span>
              </div>
              <div className="w-[390px] h-[40px] flex items-center justify-center">
                <span className="font-inter font-normal text-[14px] leading-[20px] text-center tracking-[0] text-gray-400">
                  Approved requests will be listed here with route and schedule
                  info
                </span>
              </div>
              <button
                className="w-[150px] h-[40px] rounded-[8px] px-[12px] py-[8px] bg-[#04203E] flex items-center justify-center font-inter font-semibold text-[14px] leading-[24px] tracking-[0] text-white text-center"
                type="button"
              >
                Request Transport
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransportService;
