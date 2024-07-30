"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const swiperData = [
    {
      id: 1,
      image: "/images/gym1.jpg",
      slogan: "Your Metabolism Starts",
      title: "Burning",
      description:
        "Get ready to burn off those calories with our high intensity workouts.",
    },
    {
      id: 2,
      image: "/images/gym2.jpg",
      slogan: "Be yourself",
      title: "Stunning",
      description:
        "You are unique, and we make sure to bring out the best in you",
    },
    {
      id: 3,
      image: "/images/gym3.jpg",
      slogan: "Stronger Together",
      title: "strength",
      description:
        "We are a community of strong individuals, and we are stronger together",
    },
  ];
  return (
    <div className="bg-primary">
      <div>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-[70vh]"
        >
          {swiperData.map((data) => (
            <SwiperSlide
              key={data.id}
              className="w-full h-[70vh] relative bg-indigo-600"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/30 absolute top-0 left-0 -z-10">
                <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
                  <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-accent font-semibold mb-2 uppercase">
                    {data.slogan}
                  </h5>
                  <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-5xl text-white mb-4 uppercase">
                    {data.title}
                  </h1>
                  <p className="lg:text-lg md:text-base sm:text-base text-base text-gray-500 font-medium mb-6 text-center">
                    {data.description}
                  </p>
                  <Link href="/about">
                    <Button className="bg-accent rounded-full hover:bg-accent-hover transition-all duration-200">
                      Start Today!
                    </Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
              1200+
            </h5>
            <p className="text-lg text-gray-500 font-medium text-center">
              Members
            </p>
          </div>
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
              80+
            </h5>
            <p className="text-lg text-gray-500 font-medium text-center">
              Expert Trainers
            </p>
          </div>
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
              15+
            </h5>
            <p className="text-lg text-gray-500 font-medium text-center">
              Years in Business
            </p>
          </div>
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-accent font-semibold mb-2 uppercase">
              17+
            </h5>
            <p className="text-lg text-gray-500 font-medium text-center">
              Locations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
