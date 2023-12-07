import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavLink from "./navLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavbarSection = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-6">
        <Link
          href={"/"}
          className=" text-5xl text-white font-semibold rounded-full bg-red-800 w-12 h-12 lg:w-12 lg:h-12 relative"
        >
          <Image
            priority
            className=" w-10 h-10 lg:w-10 lg:h-10 text-white absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src="/download.svg"
            height={200}
            width={200}
            alt="Follow us on Twitter"
          />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
