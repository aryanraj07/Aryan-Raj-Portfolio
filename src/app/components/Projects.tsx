"use client";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Youtube Sync",
    description:
      "Watch YouTube together with friends in real-time with chat sync.",
    img: "/projects/ytproject.png",
    tags: ["React", "Javascript", "Node Js"],
    live: "https://playnwatch.vercel.app/",
    github: "https://github.com/aryanraj07/Yt-Video-Sync-Watcher",
    // tech: ["/icons/react.png", "/icons/next.png", "/icons/node.png"],
  },
  // {
  //   id: 2,
  //   title: "Ecommerece Platform",
  //   description: "A modern ecommerce platform ",
  //   img: "/projects/ytproject.png",
  //   tags: ["Next Js", "Typescript", "Tailwind Css"],
  //   live: "https://your-live-link.com",
  //   github: "https://github.com/aryanraj07",
  //   // tech: ["/icons/react.png", "/icons/tailwind.png", "/icons/mongodb.png"],
  // },
];

const Projects = () => {
  return (
    <section id="project" className="py-20 relative overflow-hidden ">
      <div className="absoulute top-1/4 w-96 rounded-full bg-primary/5 right-0 "></div>
      <div className="absoulute bottom-1/4 w-96 rounded-full bg-highlight/5 right-0 "></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="inline-block px-4 py-1 bg-orange-500/20  text-orange-600  text-sm font-medium rounded-full mb-3">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 ">
            Projects that make impact
          </h2>
          <p className="text-gray-600 anmate-fade-in animation-delay-400">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
            <div
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 cursor-pointer"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-bottom"
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                />
                <div className="absolute inset-0 bg-bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 " />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity dura300">
                  <Link
                    href={item.live}
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href={item.github}
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="p-6 space-y-4 ">
                <Link
                  href={item.live}
                  className="flex items-start justify-between"
                >
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white-50 group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1  transition-all" />
                </Link>
                <p className="text-white-50 text-sm ">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-white-50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                      key={tagIdx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
