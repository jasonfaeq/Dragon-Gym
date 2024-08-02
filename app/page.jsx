"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components

// import required modules
import BMI from "@/components/BMI";
import Services from "@/components/Services";
import SwiperHero from "@/components/SwiperHero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import Plan from "@/components/Plan";
import Banner from "@/components/Banner";
import Trainers from "@/components/Trainers";
import Popular from "@/components/Popular";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" bg-navy-gradient from-gray-800 to-gray-950">
      <SwiperHero />
      <Stats />
      <AboutUs />
      <BMI />
      <Services />
      <Banner />
      <Trainers />
      <Popular />
      <Plan />
      <Footer />
    </div>
  );
}
