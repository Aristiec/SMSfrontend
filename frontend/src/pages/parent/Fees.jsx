import React from "react";
import FeeStats from "../../components/parent/Fee/FeeStats";
import {
  CircleAlert,
  CircleCheckBig,
  Ban,
  Book,
  Clock,
  Eye,
  FileUp,
} from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { CardContent } from "../../components/ui/Card";
import { FileText, CreditCard } from "lucide-react";

const Fees = () => {
  return (
    <>
      <div className="p-5">
        <div className="bg-[#0b2447] text-white font-[Merriweather] text-2xl px-6 py-3 rounded-xl shadow-md mb-6">
          Fee Payment
        </div>

        <FeeStats />
        <br />

        {/* Payment Summary */}
        <Card className="mb-6 rounded-xl shadow">
          <CardContent className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-lg font-[Inter] text-[#1F1D1D]">
                Payment Summary
              </h2>
              <p className="text-[#1F1D1D] text-sm mt-1">
                Student: <span className="font-[Inter]">Asha Singh</span> |
                Class: CS | Student ID: 1RUB203020
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-3 md:mt-0">
              <div className="flex justify-between border border-[#04203E] gap-46 rounded-lg px-3 py-2">
                <span className="text-[#04203E] font-[Inter]">Total Paid</span>
                <span className="font-[Inter] text-[#04203E]">₹26,000</span>
              </div>
              <div className="flex justify-between border border-[#04203E] rounded-lg px-3 py-2">
                <span className="text-[#04203E] font-[Inter]">
                  Total Pending
                </span>
                <span className="font-[Inter] text-[#04203E] ">₹12,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tuition Fee */}
        <div className="mb-4 rounded-xl shadow bg-white">
          <div className="p-5 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-[Inter] text-[#1F1D1D]">
                Tuition Fee
                <span className="ml-2 px-2 py-1 text-sm bg-green-50 text-green-700 rounded">
                  Paid
                </span>
              </h3>
              <div className="flex items-center gap-4 mt-3">
                <p className="text-[#1F1D1D] text-sm">
                  Due Date: August 30, 2023
                </p>
                <p className="text-green-600 text-sm flex items-center gap-1">
                  <CircleCheckBig size={16} /> Completed
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-[Inter] text-[#1F1D1D]">₹26,000</p>
              <button className="mt-2 flex items-center gap-2 border border-[#04203E] text-[#04203E] px-3 py-1 rounded-lg hover:bg-gray-100">
                <FileText size={18} /> Invoice
              </button>
            </div>
          </div>
        </div>

        {/* Exam Fee */}
        <div className="mb-4 rounded-xl shadow bg-white">
          <div className="p-5 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-[Inter] text-[#1F1D1D]">
                Exam Fee
                <span className="ml-2 px-2 py-1 text-sm bg-orange-100 text-orange-600 rounded">
                  Pending
                </span>
              </h3>
              <div className="flex items-center gap-4 mt-3">
                <p className="text-[#1F1D1D] text-sm">
                  Due Date: August 30, 2023
                </p>
                <p className="text-orange-600 text-sm flex items-center gap-1">
                  <CircleAlert size={16} /> Payment Required
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-[Inter] text-[#1F1D1D]">₹6,000</p>
              <button className="mt-2 flex items-center gap-2 bg-[#0b2447] text-white px-3 py-1 rounded-lg ">
                <CreditCard size={18} /> Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* School Trip Fee */}
        <div className="mb-6 rounded-xl shadow bg-white">
          <div className="p-5 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-[Inter] text-[#1F1D1D]">
                School Trip Fee
                <span className="ml-2 px-2 py-1 text-sm bg-orange-100 text-orange-600 rounded">
                  Pending
                </span>
              </h3>
              <div className="flex items-center gap-4 mt-3">
                <p className="text-[#1F1D1D] text-sm">
                  Due Date: August 30, 2023
                </p>
                <p className="text-orange-600 text-sm flex items-center gap-1">
                  <CircleAlert size={16} /> Payment Required
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-[Inter] text-[#1F1D1D]">₹6,000</p>
              <button className="mt-2 flex items-center gap-2 bg-[#0b2447] text-white px-3 py-1 rounded-lg ">
                <CreditCard size={18} /> Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Pay All Dues Button */}
        <div className="flex justify-end">
          <button className="px-5 py-3 text-lg font-semibold rounded-xl shadow-lg bg-[#0b2447] text-white ">
            Pay All Dues (₹12,000)
          </button>
        </div>
      </div>
    </>
  );
};

export default Fees;
