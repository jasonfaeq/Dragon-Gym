"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components

// import required modules
import BMI from "@/components/BMI";
import Services from "@/components/Services";
import SwiperHero from "@/components/SwiperHero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className=" bg-navy-gradient from-gray-800 to-gray-950">
      <SwiperHero />
      <Stats />
      <AboutUs />
      <BMI />
      <Services />
    </div>
  );
}
