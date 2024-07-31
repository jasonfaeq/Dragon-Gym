import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters).toFixed(2);
    setBMI(bmi);
    setMessage(getBMIMessage(bmi));
  };

  const getBMIMessage = (bmi) => {
    if (bmi > 10.0 && bmi < 18.5) {
      return "You are underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "You are normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "You are overweight";
    } else if (bmi >= 30 && bmi <= 60.0) {
      return "You are obese";
    } else {
      return "Enter a valid weight and height";
    }
  };

  return (
    <div>
      <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex flex-col items-center gap-x-2 mb-3">
          <h1 className="lg:text-lg md:text-lf sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">
            Calculate your BMI
          </h1>
          <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlFor="weight" className="text-gray-200">
                Weight (kg)
              </Label>
              <Input
                type="number"
                id="weight"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-white/10 text-gray-500"
              />
            </div>
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlFor="height" className="text-gray-200">
                Height (cm)
              </Label>
              <Input
                type="number"
                id="height"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-white/10 text-gray-500"
              />
            </div>
            <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
              <Button
                className="bg-white/10 text-gray-500 w-full h-11 justify-center bg-white text-bold hover:bg-accent transition-all duration-200"
                type="submit"
                onClick={calculateBMI}
              >
                Calculate
              </Button>
            </div>
          </div>
          <div>
            {bmi && (
              <div className="w-full h-auto flex flex-col items-center justify-center bg-black/20 rounded-md py-2 px-4">
                <p className="text-gray-200">
                  Your BMI is{" "}
                  <span className="text-accent">{bmi.toFixed(2)}</span>
                </p>
                <p>
                  <span className="text-white ">{message}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
