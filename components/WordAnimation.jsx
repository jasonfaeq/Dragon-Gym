"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const WordAnimation = () => {
  return (
    <span>
      <TypeAnimation
        sequence={[
          1000,
          "goals.",
          2000,
          "dreams.",
          2000,
          "ambitions.",
          2000,
          "dream physique.",
          2000,
        ]}
        speed={50}
        className="text-accent"
        wrapper="span"
        repeat={Infinity}
      />
    </span>
  );
};

export default WordAnimation;
