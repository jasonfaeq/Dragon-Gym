import React from "react";
import WordAnimation from "@/components/WordAnimation";
import { CgGym } from "react-icons/cg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-16 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
      <div className="lg:w-[38%] md:w-[50%] sm:w-full w-full h-auto relative overflow-hidden">
        <Image
          src="/images/whoarewe.jpg"
          alt="gym"
          width={500}
          height={500}
          className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover rounded-2xl shadow-slate-500"
        />
      </div>
      <div className="lg:w-[40%] md:w-[50%] sm:w-50% w-50% h-auto lg:text-start md:text-start sm:text-start text-center">
        <h2 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
          <CgGym className="text-accent text-3xl" />
          About<span className="text-accent">Us</span>
        </h2>
        <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
          Achieve your <WordAnimation />
        </h1>
        <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
          We are a community of strong individuals who are passionate about
          fitness and health. We believe in the power of community and support,
          and we are here to help you achieve your fitness goals.
          <br />
          <br />
          Our expert trainers are here to guide you every step of the way, and
          our state-of-the-art facilities are designed to help you reach your
          full potential. Whether you are a beginner or an experienced athlete,
          we have something for everyone. Join us today and start your fitness
          journey with us!
        </p>
        <Link href="/join">
          <Button className=" lg:w-auto md:w-auto sm:w-full w-full  py-2 text-base font-medium uppercase justify-center text-white font-sans bg-accent rounded-xl hover:bg-accent-hover">
            Become a member!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
