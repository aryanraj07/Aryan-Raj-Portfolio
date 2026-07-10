"use client";
import { Calendar } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className=" container mx-auto p-6">
      <div className="">
        {/* Section Title */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1 bg-orange-500/20  text-orange-600  text-sm font-medium rounded-full mb-3">
            Work Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300">
            My Professional Journey
          </h2>
          <p className="text-gray-600 dark:text-white-50 mt-2 text-lg">
            I work as a Software Developer building modern web solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex gap-10">
          {/* Timeline Animated Line */}
          <div className="relative w-[2px] bg-gray-400 dark:bg-gray-700 rounded-md overflow-hidden">
            <div className="absolute inset-0 animate-line bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-white-50" />
              <p className="text-sm text-gray-500 dark:text-white-50">
                August 2024 — Present
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold dark:text-white">
              Software Developer — 360 Propguide
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">
              Working with Next.js, Tailwind, API Integrations & UI development,
              contributing to scalable digital experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="timeline-glow"></div>
      </div>
    </section>
  );
};

export default About;
