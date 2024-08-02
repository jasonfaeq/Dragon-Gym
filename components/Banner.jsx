import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div>
      <div
        className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
        style={{
          background: "url('/images/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
          No <span className="text-accent">Pain</span>, No{" "}
          <span className="text-accent">Gain</span>
        </h1>
        <p className="text-lg text-gray-300 font-medium mb-8 text-center">
          Ignite your passion for fitness and unleash the beast within
        </p>
        <Link href="/join">
          <Button className="bg-accent rounded-full hover:bg-accent-hover transition-all duration-200 text-xl text-white font-sans">
            Join Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
