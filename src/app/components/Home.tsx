"use client";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaRegArrowAltCircleDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const [dark, setDark] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={dark ? "dark" : ""}>
      <section
        id="home"
        className="min-h-screen w-full flex flex-col justify-center items-center p-6 dark:bg-gray-900 bg-white"
      >
        {/* Theme Toggle Button */}
        <button
          className="absolute top-5 right-6 text-sm rounded-full px-4 py-1 border border-gray-300 dark:border-gray-700 dark:text-white"
          onClick={() => setDark(!dark)}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 mt-12">
          {/* LEFT SIDE TEXT */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
              Hi{" "}
              <span className="text-orange-500 dark:text-green-500">Folk</span>,
              <br />
              I'm{" "}
              <span className="text-orange-500 dark:text-green-500">
                Aryan Raj
              </span>
              <br />
              <span className="text-orange-500 dark:text-green-500">
                Web Developer
              </span>
            </h1>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6 mt-4 text-3xl dark:text-white">
              <a
                href="https://www.linkedin.com/in/aryanraj07/"
                target="_blank"
                className="hover:scale-125 transition-transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/aryanraj07"
                target="_blank"
                className="hover:scale-125 transition-transform"
              >
                <FaGithub />
              </a>
            </div>

            {/* Download Resume Button */}
            <a
              href="/Aryan_Raj_Resume.pdf"
              download
              className="mt-6 inline-block bg-orange-500 dark:bg-green-500 text-white px-6 py-3 rounded-full hover:opacity-90 shadow-md"
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative group w-60 h-60 md:w-80 md:h-80">
            <Image
              src="/aryanraj.png"
              width={400}
              height={400}
              alt="Aryan Raj"
              className="w-full h-full object-cover object-top rounded-3xl shadow-lg group-hover:scale-105 duration-300"
            />
          </div>
        </div>

        {/* Scroll Down */}
        <div className="mt-12 text-center flex flex-col gap-2 dark:text-white">
          <p className="text-xl md:text-2xl font-medium">Scroll to explore</p>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
            <FaRegArrowAltCircleDown className="text-4xl hover:scale-125 transition-transform cursor-pointer" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
