import React, { useState, useRef, useEffect } from "react";
import { UserRoundCheck, Phone } from "lucide-react";
import Dropdown from "../../utils/Dropdown";
import { Bus, Calendar } from "lucide-react";
import CustomCalendar from "../../utils/CustomCalendar";
const dropdown = {
  department: {
    placeholder: "Select Course/Department",
    options: [
      "Computer Science",
      "Information Technology",
      "Electronics",
      "Mechanical",
    ],
  },
  semester: {
    placeholder: "Select your semester",
    options: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
  },
};

const TD = ({}) => {
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
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
    <div className="mx-auto flex flex-col font-[Inter] min-h-screen">
      <div className="flex flex-col px-4 gap-1 mt-4">
        <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto mb-4">
          <h1 className="text-[24px] font-bold font-[Merriweather]">
            Transport
          </h1>
        </header>

        <section
          style={{ boxShadow: "0px 4px 8px 0px #0000003D" }}
          className="flex flex-col rounded-[12px] p-6 gap-6 bg-[#FAFCFD] w-full"
        >
          {/* header */}
          <div className="flex flex-col gap-[8px]">
            <div className="font-[Inter] font-semibold text-[20px] leading-[28px]">
              Request Transport Service
            </div>
            <div className="font-[Inter] font-[400] text-[14px] leading-[20px] text-[#4B5563]">
              Fill out the form below to request campus transportation
            </div>
          </div>

          {/* Personal Details */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[12px]">
              <UserRoundCheck className="w-[16px] h-[16px]" />
              <div className="font-[Inter] text-[16px] leading-[24px] font-semibold text-[#000000]">
                Personal Details
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-y-6">
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-[8px] border border-[#717171] text-[16px] text-[#111827] px-6 py-2 placeholder-[#111827]"
                />
              </div>

              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Student ID
                </label>
                <input
                  type="text"
                  placeholder="Enter student ID"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 text-[16px] text-[#111827] placeholder-[#111827]"
                />
              </div>

              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Course/Department
                </label>
                <Dropdown
                  options={dropdown.department.options}
                  selected={course}
                  onSelect={setCourse}
                  placeholder={dropdown.department.placeholder}
                />
              </div>

              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Semester
                </label>
                <Dropdown
                  options={dropdown.semester.options}
                  selected={semester}
                  onSelect={setSemester}
                  placeholder={dropdown.semester.placeholder}
                />
              </div>
            </div>
          </div>

          {/*  Contact Details */}
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-[12px]">
              <Phone className="w-[16px] h-[16px]" />
              <div className="font-[Inter] text-[16px] leading-[24px] font-semibold text-[#000000]">
                Contact Details
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-y-6">
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>

              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>

              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Emergency Contact Number
                </label>
                <input
                  type="text"
                  placeholder="Enter emergency contact"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>

              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Emergency Contact Number{" "}
                  <span className="text-[#6B7280]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter emergency contact"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>
            </div>
          </div>
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
                        onChange={(e) =>
                          setPickupPickupLocation(e.target.value)
                        }
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
                            onChange={(e) =>
                              setDropLocationType(e.target.value)
                            }
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
                            onChange={(e) =>
                              setDropLocationType(e.target.value)
                            }
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
                          onChange={(e) =>
                            setdropPickupLocation(e.target.value)
                          }
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
                  {/* <<!-- Transport Policy Section --> */}
                  <div class="w-full bg-[#E9EEF4] p-4 rounded-lg">
                    <div class=" text-[#1F1D1D] text-[12px] leading-[18px] font-bold font-['Inter'] h-[18px] px-2 flex items-center">
                      Transport Policy:
                    </div>
                    <ul class="mt-2 space-y-[2px] text-[12px] leading-[18px] font-normal font-['Inter'] text-black list-disc list-inside">
                      <li>
                        Campus buses operate on fixed routes with predefined
                        stops.
                      </li>
                      <li>Pickup times are fixed and cannot be changed.</li>
                      <li>
                        Transport services are available only on working days
                        unless specifically approved.
                      </li>
                      <li>
                        In case of route or schedule changes, students will be
                        notified in advance.
                      </li>
                      <li>
                        Transport requests are subject to approval and seat
                        availability. You'll receive a notification once your
                        request is processed.
                      </li>
                    </ul>
                  </div>

                  {/* <!-- Agreement Section --> */}
                  <div class="w-[543px] h-[18px] mt-1 flex items-center gap-3 text-[12px] leading-[18px] font-normal font-['Inter'] text-black">
                    <input
                      type="checkbox"
                      id="agree"
                      class="w-[14px] h-[14px] accent-black"
                    />
                    <label for="agree">
                      I understand and agree to the Transport Policy and confirm
                      the above details are accurate.
                    </label>
                  </div>
                </div>
  <div class="w-full h-[36px] flex gap-6  mt-4 items-center justify-end">
  {/* <!-- Cancel Button --> */}
  <button class="w-[64px] h-[36px] px-3 py-2 rounded-lg bg-[#CFDCEB] text-[12px] leading-[20px] text-center font-normal font-['Inter'] text-black">
    Cancel
  </button>

  {/* <!-- Submit Request Button --> */}
  <button class="w-[114px] h-[36px] px-3 py-2 rounded-lg bg-[#04203E] text-[12px] leading-[20px] text-center font-normal font-['Inter'] text-white">
    Submit Request
  </button>
</div>


              </div>
            </div>
          </div>
        </section>
     

      </div>
    </div>
  );
};

export default TD;
