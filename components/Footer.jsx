import { MailOpen, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CiDumbbell } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center bg-navy flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-6">
        <div className="w-full h-auto flex items-start lg:justify-between md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap">
          <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex lg:items-start md:items-start sm:items-center items-center flex-col justify-center">
            <Link
              href="/"
              className="w-fit h-auto text-3xl text-accent font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative"
            >
              DRAGON G<span className="text-xl font-bold text-gray-300">Y</span>
              M
              <CiDumbbell className="w-5 h-4 text-accent -rotate-45 absolute top-0 left-[82%] translate-x-[-50%]" />
            </Link>
            <p className="text-base text-gray-500 font-normal mb-4 lg:text-start md:text-start sm:text-center text-center">
              Where greatness happens. We are here to help you achieve your
              goals. Get in touch with us either phyiscally or virtually. We are
              here to help you.
            </p>
            <div className="w-full h-auto space-y-2">
              <Link href="https://maps.app.goo.gl/VDHb1fR2Cquw1LDp6">
                <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2 text-gray-400 hover:text-accent-hover ease-out duration-300 cursor-pointer">
                  <MapPin className="w-5 h-5" />
                  <p className="text-base">Tenahi - Duhok, Iraq</p>
                </div>
              </Link>
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2 text-gray-400 hover:text-accent-hover ease-out duration-300 cursor-pointer">
                <MailOpen className="w-5 h-5" />
                <p className="text-base">dragongym@gmail.com</p>
              </div>
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2 text-gray-400 hover:text-accent-hover ease-out duration-300 cursor-pointer">
                <Phone className="w-5 h-5" />
                <p className="text-base">+964 750 549 8541</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex items-center lg:justify-end md:justify-end sm:justify-center justify-center flex-wrap gap-5">
            <div className="lg:w[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Services
              </h2>
              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover ease-out duration-300 cursor-pointer text-center">
                    Strength Training
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover  ease-out duration-300 cursor-pointer text-center">
                    Cardio
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover  ease-out duration-300 cursor-pointer text-center">
                    Yoga
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover  ease-out duration-300 cursor-pointer text-center">
                    Zumba
                  </li>
                </ul>
              </div>
            </div>
            {/* Quick Link */}
            <div className="lg:w[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Quick Link
              </h2>

              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover ease-out duration-300 cursor-pointer text-center">
                    Home
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover  ease-out duration-300 cursor-pointer text-center">
                    About
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover  ease-out duration-300 cursor-pointer text-center">
                    Pricing Plan
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-accent-hover  ease-out duration-300 cursor-pointer text-center">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
