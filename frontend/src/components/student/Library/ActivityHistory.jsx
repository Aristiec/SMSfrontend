import React from "react";

const activityData = [
  {
    book: "Programming in C++",
    isbn: "978-0132350853",
    borrow: "7/11/2023",
    due: "7/12/2023",
    returnDate: "6/12/2023",
    status: "Returned",
    fine: "-",
  },
  {
    book: "Computer Networks",
    isbn: "978-0132356974",
    borrow: "19/05/2023",
    due: "19/06/2023",
    returnDate: "22/06/2023",
    status: "Returned Late",
    fine: "₹250",
  },
  {
    book: "Java: The Complete Reference",
    isbn: "978-0132350822",
    borrow: "4/9/2023",
    due: "4/10/2023",
    returnDate: "1/10/2023",
    status: "Returned",
    fine: "-",
  },
  {
    book: "Artificial Intelligence: A Modern Approach",
    isbn: "978-0132350051",
    borrow: "12/03/2023",
    due: "12/04/2023",
    returnDate: "-",
    status: "Not Returned",
    fine: "₹250 + 100",
  },
  {
    book: "Fundamentals of Database Systems",
    isbn: "978-0132356794",
    borrow: "19/05/2023",
    due: "19/06/2023",
    returnDate: "22/06/2023",
    status: "Returned Late",
    fine: "₹250",
  },
];

const statusColor = {
  Returned: "text-[#10B981] bg-[#ECFDF7]",
  "Not Returned": "text-[#EF4444] bg-[#FEF2F2]",
  "Returned Late": "text-[#F97316] bg-[#FFF4ED]",
};

const ActivityHistory = () => {
  return (
    <div className="bg-[#FAFCFD] flex flex-col gap-3 py-6 rounded-xl ">
      <div className="flex flex-col gap-3">
        {/* header */}
        <div className="bg-[#F4F7FA] border-b-1 border-[#71717166] grid grid-cols-7 font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171] tracking-normal gap-3 p-5 ">
          <p className="col-span-2">Books</p>
          <p>Borrow Date</p>
          <p>Due Date</p>
          <p>Return Date</p>
          <p>Status</p>
          <p>Fines</p>
        </div>
        <div className="flex flex-col">
          {activityData.map((activity, index) => (
            <div key={index} className="border-b-1 border-[#71717166] py-5 grid grid-cols-7 ">
              <div className="col-span-2">
                <p className="text-[#1F1D1D] font-[Inter] font-medium text-[16px] leading-6 tracking-normal flex items-center">
                  {activity.book}
                </p>
                <p className="text-[#717171] font-[Inter] font-[400] text-[12px] leading-5 tracking-normal">
                  {activity.isbn}
                </p>
              </div>
              <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                {activity.borrow}
              </p>
              <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                {activity.due}
              </p>
              <p className="font-[Inter] font-[400] text-[14px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                {activity.returnDate}
              </p>
              <div
                className={` flex  
                }`}
              >
                <p
                  className={`font-[Inter] font-medium text-[12px] leading-4 tracking-normal gap-2 px-3 py-1  rounded-full flex items-center ${
                    statusColor[activity.status]
                  }`}
                >
                  {activity.status}
                </p>
              </div>

              <p className="font-[Inter] font-[400] text-[14px] leading-[18px] tracking-normal flex items-center text-[#1F1D1D]">
                {activity.fine}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityHistory;
