import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Join = () => {
  return (
    <div className="bg-gradient-to-b from-navy to-gray-900 min-h-screen flex items-center justify-center font-sans">
      <div className="xl:w-[64%] order-2 xl:order-none">
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
          <h3 className="text-4xl text-accent uppercase">
            Join today and start your journey with us!
          </h3>
          <p className="text-white/60">
            We are here to help you achieve your fitness goals. Join us today
            and start your fitness journey with us!
          </p>
          {/* Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder="First Name" />
            <Input type="lastname" placeholder="Last Name" />
            <Input type="email" placeholder="Email" />
            <Input type="phone" placeholder="Phone Number" />
          </div>
          {/* Select */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-black/80 text-white">
                <SelectLabel>Choose Plan</SelectLabel>
                <SelectItem value="est">Normal Plan</SelectItem>
                <SelectItem value="cst">Premium Plan</SelectItem>
                <SelectItem value="mst">VIP Plan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Text Area */}
          <Textarea
            className="h-[200px]"
            placeholder="Type your message here."
          />
          <Button className=" lg:w-auto md:w-auto sm:w-full w-full  py-2 text-base font-medium uppercase justify-center text-white font-sans bg-accent rounded-xl hover:bg-accent-hover">
            send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Join;
