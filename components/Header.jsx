import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { SiDungeonsanddragons } from "react-icons/si";
import { CiDumbbell } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-navy to-gray-900 w-full h-full font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl py-4">
          <Link
            href="/"
            className="text-3xl text-accent font-semibold tracking-[0.1rem] flex gap-x-2 relative"
          >
            <SiDungeonsanddragons className="w-8 h-8 text-accent" />
            DRAGON G<span className="font-sans text-gray-300">Y</span>M
            <CiDumbbell className="w-5 h-4 text-accent -rotate-45 absolute top-[-8px] left-[73%] translate-x-[-43%]" />
            <SiDungeonsanddragons className="w-8 h-8 text-accent" />
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
