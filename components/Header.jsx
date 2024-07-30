import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { SiDungeonsanddragons } from "react-icons/si";

const Header = () => {
  return (
    <header className="bg-primary w-full h-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold py-8">
          <Link href="/">
            <div className="flex items-center gap-2">
              <SiDungeonsanddragons className="text-4xl text-accent" />
              <span className="roboto-bold text-3xl">Dragon Gym</span>
              <SiDungeonsanddragons className="text-4xl text-accent" />
            </div>
          </Link>
        </h1>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/join">
            <Button className="bg-accent rounded-full hover:bg-accent-hover transition-all duration-200">
              Become a Member
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
