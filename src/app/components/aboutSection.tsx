import React from "react";
import Image from "next/image";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section>
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about.jpg" alt="hero image" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
            necessitatibus dolorem est mollitia voluptates deserunt assumenda
            nobis pariatur debitis. Molestiae nisi excepturi officiis maiores
            non tenetur itaque, minus iure?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
