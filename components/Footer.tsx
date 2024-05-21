import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <div className="container mx-auto 2xl pt-[50px] pb-8">
      <div className="pb-10 justify-center flex">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1] transition-transform duration-300 ease-in-out hover:brightness-200 transform hover:scale-110" // Added Tailwind CSS classes for transition
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                className="mx-5"
                alt={social.alt}
              />
            </Link>
          );
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
        Created with ❤️ BY ABAHAZEM :)
      </p>
    </div>
  );
};

export default Footer;
