import React from "react";
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

const Popular = () => {
  const exercises = [
    {
      id: 1,
      trainerImg: "images/exercise1.jpg",
      name: "Warm up",
      duration: 15,
      sets: 1,
      calories: 110,
    },
    {
      id: 2,
      trainerImg: "images/exercise2.jpg",
      name: "Push Ups",
      duration: 10,
      sets: 4,
      calories: 130,
    },
    {
      id: 3,
      trainerImg: "images/exercise3.jpg",
      name: "Pull Ups",
      duration: 25,
      sets: 3,
      calories: 150,
    },
    {
      id: 4,
      trainerImg: "images/exercise4.jpg",
      name: "Yoga",
      duration: 45,
      sets: 1,
      calories: 285,
    },
    {
      id: 5,
      trainerImg: "images/gym1.jpg",
      name: "Deadlift",
      duration: 30,
      sets: 3,
      calories: 180,
    },
    {
      id: 6,
      trainerImg: "images/exercise6.jpg",
      name: "Bench Press",
      duration: 15,
      sets: 4,
      calories: 150,
    },
    {
      id: 7,
      trainerImg: "images/exercise7.jpg",
      name: "Squats",
      duration: 15,
      sets: 4,
      calories: 180,
    },
    {
      id: 8,
      trainerImg: "images/exercise8.jpg",
      name: "Boxing",
      duration: 10,
      sets: 3,
      calories: 210,
    },
  ];

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-6">
      <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <CiDumbbell className="text-accent" />
        Our Popular Exercises
      </h6>
      <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto bg-gray-900 rounded-lg overflow-hidden hover:shadow hover:shadow-accent ease-out duration-700 cursor-pointer"
          >
            <div
              style={{
                backgroundImage: `url(${exercise.trainerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg"
            ></div>
            <div className="w-full h-auto py-4 px-3">
              <h1 className="text-lg text-white font-semibold mb-1">
                {exercise.name}
              </h1>
              <div className="w-full h-auto flex items-center gap-x-2">
                <p className="text-sm text-gray-300">
                  {exercise.duration} minutes
                </p>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <p className="text-sm text-gray-300">{exercise.sets} sets</p>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <p className="text-sm text-gray-300">
                  {exercise.calories} calories
                </p>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
