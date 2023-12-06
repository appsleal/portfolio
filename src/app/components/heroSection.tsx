"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <div className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span>Hello, I'm </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hermes Leal",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Backend Developer",
                1000,
                "Mobile developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />{" "}
          </div>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel
            alias, in tempore asperiores eius deserunt sunt illo assumenda
            commodi expedita velit ipsam laboriosam dolor laborum incidunt
            placeat ut! Ad.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/character2.jpg"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;