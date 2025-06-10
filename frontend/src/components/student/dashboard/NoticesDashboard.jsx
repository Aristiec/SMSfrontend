import React from 'react'
import alertIcon from '../../../assets/alert_icon_notices.png' 
import generalIcon from '../../../assets/general_icon_notices.png'
import eventIcon from '../../../assets/event_icon_notices.png'

const noticesData = [
  {
    id: 1,
    icon: alertIcon,
    label: 'Alert',
    labelColor: '#EF4444',
    title: 'Fee Payment Due',
    description: 'Designer Donald Schön wrote that professional...',
  },
  {
    id: 2,
    icon: generalIcon,
    label: 'General',
    labelColor: '#1F1D1D',
    title: 'End of Semester Exams Schedule',
    description: 'The end of semester examinations will commen...',
  },
  {
    id: 3,
    icon: eventIcon,
    label: 'Event',
    labelColor: '#1F1D1D',
    title: 'Interclass Football Competition',
    description: 'The Interclass Football Competition will be held...',
  },
];

const NoticesDashboard = () => {
  return (
    <>
      <div className="w-[340px] h-[476px] shadow-[0px_4px_8px_0px_#00000033] rounded-[8px] overflow-hidden">
      {/* Header */}
      <div className="w-[340px] h-[56px] bg-[#04203E] flex items-center px-4 gap-[10px] rounded-t-[8px]">
        <h2 className="text-[#FAFCFD] font-[Merriweather] font-bold text-[20px] leading-[24px]">
          Notices
        </h2>
      </div>

     
      <div className="w-[340px] h-[420px] p-4 rounded-b-lg bg-[#FAFCFD] overflow-y-auto">
        <div className="w-[308px] h-auto flex flex-col gap-5">
          {noticesData.map((notice) => (
            <div
              key={notice.id}
              className="w-[308px] h-[116px] p-[12px] gap-[8px] rounded-[12px] bg-[#F4F7FA] flex flex-col"
            >
              {/*  Icon  */}
              <div className="w-[284px] h-[24px] flex justify-between items-center">
                <div className="w-[77px] h-[24px] flex items-center gap-[12px]">
                  <img src={notice.icon} alt={`${notice.label} Icon`} className="w-[12px] h-[15px]" />
                  <span
                    className="text-[14px] leading-[24px] font-[Inter] font-medium"
                    style={{ color: notice.labelColor }}
                  >
                    {notice.label}
                  </span>
                </div>
              </div>

              {/* Bottom: Title */}
              <div className="w-[284px] h-[60px] flex flex-col gap-[8px]">
                <div className="w-[259px] h-[28px] text-[#1F1D1D] font-[Inter] font-semibold text-[16px] leading-[28px]">
                  {notice.title}
                </div>
                <div className="w-[284px] h-[24px] text-[#1F1D1D] font-[Inter] font-medium text-[12px] leading-[24px]">
                  {notice.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default NoticesDashboard