import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { SiDungeonsanddragons } from "react-icons/si";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-navy to-gray-900 w-full h-full font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl py-8">
          <Link href="/">
            <div className="flex items-center gap-2">
              <SiDungeonsanddragons className="text-4xl text-accent" />
              Dragon Gym
              <SiDungeonsanddragons className="text-4xl text-accent" />
            </div>
          </Link>
        </h1>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/join">
            <Button className="bg-accent rounded-full hover:bg-accent-hover transition-all duration-200 text-white">
              Join Now
            </Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
