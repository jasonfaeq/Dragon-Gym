import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SwiperHero = () => {
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
    <div>
      {" "}
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
            className="w-full h-[70vh] relative"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/30 absolute top-0 left-0 -z-10 font-sans">
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
                  <Button className="bg-accent rounded-full hover:bg-accent-hover transition-all duration-200 text-xl text-white">
                    Start Today!
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHero;
