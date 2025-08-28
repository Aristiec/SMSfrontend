import { MapPin } from "lucide-react";
import { Clock } from "lucide-react";
import transportMapImg from "../../assets/Transport Map Img.png";

export default function TransportMap() {
  return (
    <div className="w-[1120px] h-[888px] rounded-[12px] bg-white opacity-100 absolute top-[112px] left-[280px] z-10">
      <div className="w-[1120px] h-[63.4px] flex justify-between items-center rounded-tl-[12px] rounded-tr-[12px] px-[19.2px] py-[19.2px] bg-[#04203E]">
        <div className="w-[358.18px] h-[25px] flex items-center gap-[6.4px] opacity-100">
          <MapPin size={20} color="white" strokeWidth={2} />
          <span className="text-[white] font-inter font-medium text-[16px] leading-[24px]">
            Route Map - B205 East Delhi Circular
          </span>
        </div>
      </div>
      <div className="w-[1120px] h-[772px] absolute top-[63.4px] left-0 opacity-100">
        <img
          src={transportMapImg}
          alt="Route Map"
          className="w-full h-full object-cover rounded-b-[12px]  opacity-80 "
        />
        
      </div>
      <div className="w-[462px] h-[81.44px] rounded-[9.33px] flex flex-col gap-[3.11px] px-[18.67px] py-[18.67px] absolute left-[329px] top-[403.5px] bg-[#FAFCFDCC] shadow-[0px_3.11px_6.22px_0px_#0000003D] opacity-100 items-center justify-center">
          <span className="font-inter font-medium text-[15.56px] leading-[21.78px] text-[#1F1D1D] text-center">
            Interactive Map Coming Soon
          </span>
          <span className="font-inter font-normal text-[12.44px] leading-[18.67px] text-[#717171] text-center">
            Live tracking and detailed route information will be available Soon
          </span>
        </div>
      <div
        className="w-[1120px] h-[52.4px] flex justify-between items-center rounded-br-[12px] rounded-bl-[12px] px-[19.2px] py-[19.2px] bg-[#CFDCEB] absolute left-0"
        style={{ top: "835.4px" }}
      >
        <div className="w-[172.84px] h-[14px] flex items-center gap-[6.4px] opacity-100">
          <Clock size={16} color="black" strokeWidth={2} />
          <span className="text-[#5B6B7B] font-inter  font-[400] text-[11px] leading-[14px] -">
            Last updated: Today, 7:00 AM
          </span>
        </div>
      </div>
    </div>
  );
}
