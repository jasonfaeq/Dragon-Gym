"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "Plan",
    path: "/plan",
  },
  {
    name: "Contact",
    path: "/join",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } text-white capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
