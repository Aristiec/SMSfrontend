import React, { useState, useRef, useEffect } from "react";
import { Bus, Calendar } from "lucide-react";
import CustomCalendar from "../../utils/CustomCalendar";

const TransportDetail = () => {
  const [requestType, setRequestType] = useState("");
  const [dropLocationType, setDropLocationType] = useState("");
  const [chooseStartDate, setChooseStartDate] = useState("dd/mm/yy");
  const [chooseEndDate, setChooseEndDate] = useState("dd/mm/yy");
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [preferredDays, setPreferredDays] = useState([]);
  const [pickupPickupLocation, setPickupPickupLocation] = useState("");
  const [pickupDropLocation, setPickupDropLocation] = useState("");
  const [dropPickupLocation, setdropPickupLocation] = useState("");
  const [dropDropLocation, setDropDropLocation] = useState("");
  const startCalendarRef = useRef(null);
  const endCalendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startCalendarRef.current &&
        !startCalendarRef.current.contains(event.target)
      ) {
        setShowStartCalendar(false);
      }

      if (
        endCalendarRef.current &&
        !endCalendarRef.current.contains(event.target)
      ) {
        setShowEndCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDay = (day) => {
    setPreferredDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex flex-col gap-4 font-[Inter] ">
      <div className="flex gap-3 items-center ">
        <Bus size={16} color="#1F1D1D" />
        <p className="text-[16px] font-[Inter] font-[600] text-[#000000] leading-6 tracking-normal flex items-center ">
          Transport Details
        </p>
      </div>
      <div className="flex flex-col  gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#374151] font-[Inter] font-medium text-[12px] leading-5 tracking-normal flex items-center">
              Request Type
            </p>
            <div className="flex gap-4">
              <label className="flex gap-4 items-center font-[400] text-[16px] leading-6 tracking-normal  text-[#111827] ">
                <input
                  type="radio"
                  value="pickup"
                  checked={requestType === "pickup"}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="peer hidden"
                />
                <div
                  className={`w-4 h-4 border-1 border-[#000000] ${
                    requestType === "pickup" && "bg-[#000000]"
                  } transition-all duration-200 ease-in  cursor-pointer`}
                ></div>
                Pickup Only
              </label>
              <label className="flex gap-4 items-center font-[400] text-[16px] leading-6 tracking-normal  text-[#111827] ">
                <input
                  type="radio"
                  value="drop"
                  checked={requestType === "drop"}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="peer hidden"
                />
                <div
                  className={`w-4 h-4 border-1 border-[#000000] ${
                    requestType === "drop" && "bg-[#000000]"
                  } transition-all duration-200 ease-in cursor-pointer `}
                ></div>
                Drop Only
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="flex justify-between w-full gap-28">
              <div className="relative flex flex-col gap-2 justify-center w-full">
                <p className="text-[#374151] font-medium text-[12px] leading-5 tracking-normal flex item-center ">
                  Start Date
                </p>
                <div
                  className="rounded-[8px] flex border-1 gap-3 border-[#717171] py-2 px-6 items-center cursor-pointer"
                  onClick={() => setShowStartCalendar(!showStartCalendar)}
                >
                  <Calendar size={17} />
                  <span className="font-[400] text-[16px] leading-6 tracking-normal text-[#111827]">
                    {chooseStartDate}
                  </span>
                </div>

                {showStartCalendar && (
                  <div
                    className=" absolute top-[100%] w-[355px]"
                    ref={startCalendarRef}
                  >
                    <CustomCalendar
                      label="Pickup Date"
                      setChooseDate={setChooseStartDate}
                      setShow={setShowStartCalendar}
                    />
                  </div>
                )}
              </div>

              <div className=" relative flex flex-col gap-2 justify-center w-full">
                <p className="text-[#374151] font-medium text-[12px] leading-5 tracking-normal flex item-center">
                  End Date
                </p>
                <div
                  className="rounded-[8px] flex border-1 gap-3 border-[#717171] py-2 px-6 items-center cursor-pointer"
                  onClick={() => setShowEndCalendar(!showEndCalendar)}
                >
                  <Calendar size={17} />
                  <span className="font-[400] text-[16px] leading-6 tracking-normal text-[#111827]">
                    {chooseEndDate}
                  </span>
                </div>

                {showEndCalendar && (
                  <div
                    className="w-[355px] top-[100%] absolute"
                    ref={endCalendarRef}
                  >
                    <CustomCalendar
                      label="Pickup Date"
                      setChooseDate={setChooseEndDate}
                      setShow={setShowEndCalendar}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-7 ">
              <div className="flex flex-col gap-2 justify-center">
                <label className="font-medium text-[12px] leading-5 tracking-normal flex items-center text-[#374151]">
                  Pickup Location
                </label>
                <input
                  value={pickupPickupLocation}
                  onChange={(e) => setPickupPickupLocation(e.target.value)}
                  placeholder="Enter pickup location "
                  className="flex rounded-[8px] border justify-between py-2 px-7 border-[#717171] font-[400] text-[16px] leading-6 tracking-normal items-center text-[#111827] placeholder:text-[#111827] "
                />

                <label className="font-medium text-[12px] leading-5 tracking-normal flex items-center text-[#374151]">
                  Landmark (optional)
                </label>
                <input
                  value={pickupDropLocation}
                  onChange={(e) => setPickupDropLocation(e.target.value)}
                  placeholder="Enter drop location"
                  className="flex rounded-[8px] border justify-between py-2 px-7 border-[#717171] font-[400] text-[16px] leading-6 tracking-normal items-center text-[#111827] placeholder:text-[#111827]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-[#374151] font-[Inter] font-medium text-[12px] leading-5 tracking-normal flex items-center">
                  Drop Address
                </p>
                <div className="flex gap-4">
                  <label className="flex gap-4 items-center font-[400] text-[16px] leading-6 tracking-normal  text-[#111827] ">
                    <input
                      type="radio"
                      value="pickup"
                      checked={dropLocationType === "pickup"}
                      onChange={(e) => setDropLocationType(e.target.value)}
                      className="peer hidden"
                    />
                    <div
                      className={`w-4 h-4 border-1 border-[#000000] ${
                        dropLocationType === "pickup" && "bg-[#000000]"
                      } transition-all duration-200 ease-in  cursor-pointer`}
                    ></div>
                    Same as pickup
                  </label>
                  <label className="flex gap-4 items-center font-[400] text-[16px] leading-6 tracking-normal  text-[#111827] ">
                    <input
                      type="radio"
                      value="different"
                      checked={dropLocationType === "different"}
                      onChange={(e) => setDropLocationType(e.target.value)}
                      className="peer hidden"
                    />
                    <div
                      className={`w-4 h-4 border-1 border-[#000000] ${
                        dropLocationType === "different" && "bg-[#000000]"
                      } transition-all duration-200 ease-in cursor-pointer `}
                    ></div>
                    Different (fill below)
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 justify-center">
                  <label className="font-medium text-[12px] leading-5 tracking-normal flex items-center text-[#374151]">
                    Drop Location
                  </label>
                  <input
                    value={
                      dropLocationType === "pickup"
                        ? pickupPickupLocation
                        : dropPickupLocation
                    }
                    onChange={(e) => setdropPickupLocation(e.target.value)}
                    placeholder="Enter pickup location "
                    className="flex rounded-[8px] border justify-between py-2 px-7 border-[#717171] font-[400] text-[16px] leading-6 tracking-normal items-center text-[#111827] placeholder:text-[#111827] "
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <label className="font-medium text-[12px] leading-5 tracking-normal flex items-center text-[#374151]">
                    Landmark (optional)
                  </label>
                  <input
                    value={dropDropLocation}
                    onChange={(e) => setDropDropLocation(e.target.value)}
                    placeholder="Enter drop location "
                    className="flex rounded-[8px] border justify-between py-2 px-7 border-[#717171] font-[400] text-[16px] leading-6 tracking-normal items-center text-[#111827] placeholder:text-[#111827] "
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-medium text-[12px] leading-5 tracking-normal flex items-center text-[#374151]">
                Preferred Days{" "}
              </p>
              <div className="flex gap-4">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day) => (
                  <button
                    onClick={() => toggleDay(day)}
                    className={`flex items-center justify-center rounded-[8px] py-2 px-6 font-medium text-[12px] leading-5 tracking-normal text-[#252C37] ${
                      preferredDays.includes(day)
                        ? "bg-[#CFDCEB] border-0"
                        : " border vorder-[#000000]"
                    } transition-colors duration-300 ease-in`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportDetail;
