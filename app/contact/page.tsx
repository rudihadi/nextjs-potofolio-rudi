"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Grechen_Fuemen } from "next/font/google";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  return (
    <div className="grid grid-flow-col justify-items-center">
      <div className="flex flex-col">
        <div
          className={`${grechen.className} py-8 font-bold text-center content-center text-4xl md:text-7xl text-orange-600 dark:text-orange-500`}
        >
          <Typewriter
            words={["Yuk, kita ngobrol lebih lanjut!"]}
            // loop={0} // 0 = infinite loop
            // cursor
            // cursorStyle="|"
            cursor={false}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="grid grid-flow-col justify-items-center text-xl md:text-3xl pt-4">
          <div className="flex flex-col w-auto">
            <Link
              href={
                "https://www.instagram.com/rudihadi95?igsh=MXV3M2xrd3NvbWoz"
              }
              className="flex items-center py-1"
            >
              <FaInstagram className="me-3 text-orange-600 dark:text-orange-500" />{" "}
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out">
                rudihadi95
              </span>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/rudi-hadi-syahfitrah-51328a231/"
              }
              className="flex items-center py-1"
            >
              <FaLinkedin className="me-3 text-orange-600 dark:text-orange-500" />{" "}
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out">
                Rudi Hadi Syahfitrah
              </span>
            </Link>
            <span className="flex items-center py-1">
              <SiGmail className="me-3 text-orange-600 dark:text-orange-500" />{" "}
              rudihadi5395@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
