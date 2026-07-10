"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const achievements = [
  {
    id: "1",
    image: "/achieve/codefest.jpg",
    title: "Codefest",
    desc: "Hackathon Winner organized by college",
    link: "https://drive.google.com/file/d/1eE6Lo8b7KJfWAcTRs3AftW40Lu5Awr5s/view",
  },
  {
    id: "2",
    image: "/achieve/codehunt.jpg",
    title: "Codehunt",
    desc: "Participated in Codefest",
    link: "https://drive.google.com/file/d/1bL_ijI0nH6b9kJspMkieHrxLJhQx3b9R/view",
  },
  {
    id: "3",
    image: "/achieve/java.png",
    title: "Java DSA",
    desc: "Certified in Java DSA - Apna College",
    link: "https://drive.google.com/file/d/1GHnohyqwLiNTsFkffbk0VUkvnA2z3p2z/view",
  },
  {
    id: "4",
    image: "/achieve/ai.png",
    title: "AI & Prompt Engineering",
    desc: "AI and Prompt Engineering Certification",
    link: "https://drive.google.com/file/d/1bS4aXNOK5Etsw2Np6xN3ftXMYcOw0bTG/view",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-slate-200 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-orange-500/20 dark:bg-green-500/20 text-orange-600 dark:text-green-500 text-sm font-medium rounded-full mb-3">
            Certificates
          </span>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
            Achievements & Certifications
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {achievements.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 px-4 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-center">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Achievements;
