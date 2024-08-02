import { CheckSquare } from "lucide-react";
import React from "react";
import { CiDumbbell } from "react-icons/ci";
import { Button } from "./ui/button";
import Link from "next/link";

const Plan = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-6">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <CiDumbbell className="text-accent" />
          Our Pricing Plan
        </h6>

        <div className="w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap">
          {/* Basic Plan */}
          <div className="lg:w-[28%] md:w-[45%] sm:w-[90%] w-full h-auto px-8 lg:py-12 md:py-10 sm:py-8 py-8 bg-black/20 rounded-lg border-[6px] border-gray-600 hover:border-accent hover:bg-accent-hover/30 ease-out duration-700">
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-white font-semibold mb-5">
              Basic Plan
            </h2>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-accent font-bold mb-3 tracking-wide">
              $165.00{" "}
              <span className="lg:text-xl md:text-lg sm:text-base text-sm text-gray-300 font-medium tracking-medium">
                / month
              </span>
            </h1>
            <hr className="border-gray-600 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  24/7 Gym Access
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Free Group Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Basic Support
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Access to Standard Equipment
                </p>
              </div>
            </div>
            <Link href="/join">
              <Button className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase text-white bg-accent rounded-full hover:bg-accent-hover">
                Select Plan
              </Button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="lg:w-[32%] md:w-[50%] sm:w-[90%] w-full h-auto px-8 lg:py-12 md:py-10 sm:py-8 py-8 bg-black/20 rounded-lg border-[6px] border-accent hover:bg-accent-hover/30 ease-out duration-700 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent py-2 px-5 rounded-full text-base font-medium text-white">
              Recommended
            </div>
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-white font-semibold mb-5">
              Premium Plan
            </h2>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-accent font-bold mb-3 tracking-wide">
              $200.00{" "}
              <span className="lg:text-xl md:text-lg sm:text-base text-sm text-gray-300 font-medium tracking-medium">
                / month
              </span>
            </h1>
            <hr className="border-gray-600 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  24/7 Gym Access
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Free Group Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Premium Support
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Access to All Equipment
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  3 Free Pool Days
                </p>
              </div>
            </div>
            <Link href="/join">
              <Button className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase text-white bg-accent rounded-full hover:bg-accent-hover">
                Select Plan
              </Button>
            </Link>
          </div>

          {/* VIP Plan */}
          <div className="lg:w-[28%] md:w-[45%] sm:w-[90%] w-full h-auto px-8 lg:py-12 md:py-10 sm:py-8 py-8 bg-black/20 rounded-lg border-[6px] border-gray-600 hover:border-accent hover:bg-accent-hover/30 ease-out duration-700">
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-white font-semibold mb-5">
              VIP Plan
            </h2>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-accent font-bold mb-3 tracking-wide">
              $300.00{" "}
              <span className="lg:text-xl md:text-lg sm:text-base text-sm text-gray-300 font-medium tracking-medium">
                / month
              </span>
            </h1>
            <hr className="border-gray-600 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  24/7 Gym Access
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Free Group Classes
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  VIP Support
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Access to All Equipment and Facilities
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Free Pool Entry
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-accent" />
                <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-xs">
                  Weekly Spa Day
                </p>
              </div>
            </div>
            <Link href="/join">
              <Button className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase text-white bg-accent rounded-full hover:bg-accent-hover">
                Select Plan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
