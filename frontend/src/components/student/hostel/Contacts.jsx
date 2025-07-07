import {
  UserRound,
  Phone,
  Mail,
  Building2,
  Clock
} from "lucide-react";

export default function Contacts() {
  return (
    <div className="w-[1072px] h-[728px] flex gap-[40px] font-['Inter']">

      
      <div className="w-[516px] h-[688px] bg-[#FAFCFD] p-[24px] rounded-[8px] shadow-[0px_4px_8px_0px_#0000001F] flex flex-col gap-[16px]">
        <h2 className="text-[16px] font-semibold text-[#1F1D1D] leading-[24px]">Hostel Staffs</h2>

        {[
          {
            name: "Dr. Rajiv Sharma",
            role: "Hostel Warden",
            phone: "+91 98765 43210",
            email: "rajiv.sharma@university.edu",
            location: "Admin Block, Room 105",
            timing: "9:00 AM – 5:00 PM (Mon–Fri)"
          },
          {
            name: "Mr. Sunil Kumar",
            role: "Assistant Warden",
            phone: "+91 98765 43210",
            email: "sunil.kumar@university.edu",
            location: "Hostel B, Ground Floor",
            timing: "24/7 (Shifts)"
          },
          {
            name: "Mrs. Priya Patel",
            role: "Hostel Supervisor",
            phone: "+91 98765 43210",
            email: "priya.patel@university.edu",
            location: "Hostel Admin Office",
            timing: "8:00 AM – 8:00 PM (All Days)"
          }
        ].map((staff, i) => (
          <div key={i} className="w-[468px] h-[188px] border border-[#71717166] rounded-[8px] p-[16px_24px] flex flex-col gap-[8px] bg-white">

           
            <div className="flex items-center gap-[12px]">
              <div className="w-[38px] h-[38px] rounded-full bg-[#F3F4F6] flex items-center justify-center">
                <UserRound size={20} className="text-[#1F1D1D]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-[#1F1D1D] leading-[20px] truncate">{staff.name}</span>
                <span className="text-[12px] text-[#717171] leading-[16px]">{staff.role}</span>
              </div>
            </div>

           
            <div className="flex items-center gap-2 text-[12px] text-[#1F1D1D]"><Phone size={14} /> {staff.phone}</div>
            <div className="flex items-center gap-2 text-[12px] text-[#1F1D1D]"><Mail size={14} /> {staff.email}</div>
            <div className="flex items-center gap-2 text-[12px] text-[#1F1D1D]"><Building2 size={14} /> {staff.location}</div>
            <div className="flex items-center gap-2 text-[12px] text-[#1F1D1D]"><Clock size={14} /> {staff.timing}</div>
          </div>
        ))}
      </div>

      
      <div className="w-[516px] h-[728px] bg-[#FAFCFD] p-[24px] rounded-[8px] shadow-[0px_4px_8px_0px_#0000001F] flex flex-col gap-[16px]">
        <h2 className="text-[16px] font-semibold text-[#1F1D1D] leading-[24px]">Emergency Contacts</h2>

        {[
          {
            title: "Security Desk",
            desc: "Available 24/7 for emergencies and after-hours assistance",
          },
          {
            title: "Campus Medical Center",
            desc: "For medical emergencies and health concerns",
          },
          {
            title: "Campus Fire & Safety",
            desc: "For fire emergencies and safety hazards",
          },
          {
            title: "University Helpline",
            desc: "For general queries and assistance",
          },
        ].map((contact, i) => (
          <div key={i} className="w-[468px] h-[148px] border border-[#71717166] rounded-[8px] p-[24px] flex flex-col gap-[12px] bg-white">

            <div className="flex justify-between items-start">
              <span className="text-[14px] font-medium text-[#1F1D1D]">{contact.title}</span>
              <span className="text-[12px] text-[#FF5A5F] font-semibold bg-[#FFEAEA] px-2 py-[2px] rounded-[4px]">Emergency</span>
            </div>

            <div className="text-[12px] text-[#717171] leading-[16px]">{contact.desc}</div>

           
            <button className="w-[144px] h-[32px] flex items-center justify-center gap-[8px] text-white bg-[#081F32] rounded-[8px] px-[12px] py-[8px] whitespace-nowrap">
              <Phone size={16} />
              <span className="text-[12px] leading-[16px] font-normal text-center">
                +91 98765 43213
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
