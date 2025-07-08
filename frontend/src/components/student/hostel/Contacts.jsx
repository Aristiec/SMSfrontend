import { Phone, Mail, MapPin, Clock, User } from "lucide-react";

export default function Contacts() {
  return (
    <div className="w-full px-4 flex flex-col md:flex-row gap-6 flex-wrap justify-center">
      <div className="w-full md:w-[48%] bg-[#FAFCFD] rounded-[8px] shadow-[0px_4px_8px_0px_#0000001F] p-6 flex flex-col gap-4">
        <h2 className="text-[16px] font-semibold">Hostel Staffs</h2>

        {[
          {
            name: "Dr. Rajiv Sharma",
            role: "Hostel Warden",
            phone: "+91 98765 43210",
            email: "rajiv.sharma@university.edu",
            location: "Admin Block, Room 105",
            time: "9:00 AM – 5:00 PM (Mon–Fri)",
          },
          {
            name: "Mr. Sunil Kumar",
            role: "Assistant Warden",
            phone: "+91 98765 43211",
            email: "sunil.kumar@university.edu",
            location: "Hostel B, Ground Floor",
            time: "24/7 (Shifts)",
          },
          {
            name: "Mrs. Priya Patel",
            role: "Hostel Supervisor",
            phone: "+91 98765 43212",
            email: "priya.patel@university.edu",
            location: "Hostel Admin Office",
            time: "8:00 AM – 8:00 PM (All Days)",
          },
        ].map((staff, idx) => (
          <div
            key={idx}
            className="border border-[#71717166] rounded-[8px] p-4 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <User size={24} />
              <div>
                <p className="text-[14px] font-medium">{staff.name}</p>
                <p className="text-[12px] text-gray-500">{staff.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              <span>{staff.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm break-words">
              <Mail size={16} />
              <span className="break-all">{staff.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              <span>{staff.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} />
              <span>{staff.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-[48%] bg-[#FAFCFD] rounded-[8px] shadow-[0px_4px_8px_0px_#0000001F] p-6 flex flex-col gap-4">
        <h2 className="text-[16px] font-semibold">Emergency Contacts</h2>

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
        ].map((item, idx) => (
          <div
            key={idx}
            className="border border-[#71717166] rounded-[8px] p-6 flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <p className="text-[14px] font-medium">{item.title}</p>
              <span className="text-[12px] bg-[#FFEAEA] text-[#FF3B30] px-2 py-1 rounded-[4px]">
                Emergency
              </span>
            </div>
            <p className="text-[12px] text-[#636363]">{item.desc}</p>
            <button className="w-fit bg-[#001F3F] text-white rounded-[8px] px-3 py-2 flex items-center gap-2 text-sm">
              <Phone size={14} />
              <span className="truncate">+91 98765 43213</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
