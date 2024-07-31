import React from "react";
import { CiDumbbell } from "react-icons/ci"; // Normal Dumbbell
import { CgGym } from "react-icons/cg"; // Tilted Dumbbell
import { GiFruitBowl, GiGymBag, GiBoxingGlove } from "react-icons/gi";
import { PiBoxingGloveFill } from "react-icons/pi";
import { GrYoga } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      serviceImg: "/images/services1.jpg",
      icon: <GiGymBag />,
      title: "Personal Training",
      desc: "Get a personalized workout plan to achieve your fitness goals.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: "/images/services2.jpg",
      icon: <FaPeopleGroup />,
      title: "Group Training",
      desc: "Join our group training sessions to stay motivated and fit.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: "/images/services3.jpg",
      icon: <GiFruitBowl />,
      title: "Nutrition Counseling",
      desc: "Get a personalized nutrition plan to achieve your fitness goals.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: "/images/services4.jpg",
      icon: <GrYoga />,
      title: "Yoga",
      desc: "Join our yoga classes to improve flexibility and mental health.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: "/images/services5.jpg",
      icon: <CgGym />,
      title: "Power Lifting",
      desc: "Power lifting sessions to build strength and muscle.",
      link: "#services",
    },
    {
      id: 6,
      serviceImg: "/images/services6.jpg",
      icon: <FaRunning />,
      title: "Endurance",
      desc: "Training to improve stamina and cardiovascular health.",
      link: "#services",
    },
    {
      id: 7,
      serviceImg: "/images/services7.jpg",
      icon: <GiBoxingGlove />,
      title: "Boxing",
      desc: "Boxing sessions to improve strength and agility.",
      link: "#services",
    },
    {
      id: 8,
      serviceImg: "/images/services9.jpg",
      icon: <PiBoxingGloveFill />,
      title: "MMA",
      desc: "MMA training to improve strength and agility.",
      link: "#services",
    },
  ];
  return (
    <div>
      {/* Card Component for Services */}
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-6">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <CiDumbbell className="text-accent" />
          Our Services
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${service.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-gradient-to-b from-gray-500 to-black absolute top-0 left-0 z-0 opacity-55"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-10 relative">
                <div className="w-14 h-14 rounded-full bg-accent/50 border-4 border-accent flex items-center justify-center mb-5 text-2xl">
                  {service.icon}
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {service.title}
                </h1>
                <p className="text-base text-gray-400 font-normal text-center mb-4">
                  {service.desc}
                </p>
                <Link href="/services" className="font-bold text-accent/70">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
