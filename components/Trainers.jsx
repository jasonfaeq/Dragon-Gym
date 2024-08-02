import React, { useState, useEffect, useRef } from "react";
import { CiDumbbell } from "react-icons/ci"; // Normal Dumbbell
import { CgGym } from "react-icons/cg"; // Tilted Dumbbell
import { GiFruitBowl, GiGymBag, GiBoxingGlove } from "react-icons/gi";
import { PiBoxingGloveFill } from "react-icons/pi";
import { GrYoga } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Modal from "./Modal";
import { Button } from "./ui/button";

// Modal Component

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const handleItemClick = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeModal = () => {
    setSelectedTrainer(null);
  };

  const trainerData = [
    {
      id: 1,
      name: "Jason Faeq",
      image: "/images/trainer1.png",
      role: "Gym Owner",
      description:
        "Jason is a certified personal trainer with over 10 years of experience in the fitness industry. He specializes in weight loss and strength training.",
    },
    {
      id: 2,
      name: "Ahmed Sourogi",
      image: "/images/trainer2.jpg",
      role: "Personal Trainer",
      description:
        "Sourogi is a powerlifter from Cairo, Egypt. He has achieved many medals through multiple power lifting competitions.",
    },
    {
      id: 3,
      name: "Ashraf Kabonga",
      image: "/images/trainer3.jpg",
      role: "Coach",
      description:
        "John is a certified personal trainer with over 10 years of experience in the fitness industry. He specializes in weight loss and strength training.",
    },
    {
      id: 4,
      name: "Karim Kamashi",
      image: "/images/trainer4.jpg",
      role: "Janitor",
      description:
        "Karim has achieved many medals through multiple power lifting competitions. He is from Cairo, Egypt and has been a powerlifter for over 10 years.",
    },
  ];

  return (
    <div>
      <div className="flex w-full h-auto items-center justify-center flex-col lg:py-16 md:py-14 py-10 lg:px-24 md:px-16 px-6">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <CiDumbbell className="text-accent" />
          Our Experts
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          {trainerData.map((trainer) => (
            <div
              key={trainer.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${trainer.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => handleItemClick(trainer)}
            >
              <div className="w-full h-full bg-navy/40 absolute top-0 left-0 z-0 opacity-55"></div>
              <div className="w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col">
                <h1 className="text-xl text-gray-100 font-semibold text-center">
                  {trainer.name}
                </h1>
                <h1 className="text-accent text-center">{trainer.role}</h1>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button className="border border-white text-white font-bold hover:border-accent hover:bg-accent">
            <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2">
              View All Trainers <FaLongArrowAltRight className="text-xl" />
            </h6>
          </Button>
        </div>
      </div>{" "}
      <Modal
        isOpen={!!selectedTrainer}
        onClose={closeModal}
        content={
          selectedTrainer && (
            <>
              <h2 className="text-2xl font-bold text-gray-600 text-center">
                {selectedTrainer.name}
              </h2>
              <p className="text-gray-600 whitespace-pre-line py-4">
                {selectedTrainer.description}
              </p>
            </>
          )
        }
      />
    </div>
  );
};

export default Trainers;
