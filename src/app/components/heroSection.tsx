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
            <h1 className=" text-white mb-4 font-extrabold">
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#A71515] to-[#AC7C7C]">
                Hello, I'm{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Hermes Leal",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "A Backend dev",
                  1000,
                  "A Mobile dev",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel
            alias, in tempore asperiores eius deserunt sunt illo assumenda
            commodi expedita velit ipsam laboriosam dolor laborum incidunt
            placeat ut! Ad.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#A71515] via-[#AC7C7C] to-[#7A3535] hover:bg-slate-200 text-white mt-3">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#A71515] via-[#AC7C7C] to-[#7A3535] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>{" "}
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
