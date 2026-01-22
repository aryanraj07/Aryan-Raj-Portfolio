import { socialLinks, words } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { ArrowRight, Download, Icon, MoveRight } from "lucide-react";
import "@/styles/section/Hero.css";
import Link from "next/link";
import { AnimatedBorderButton } from "../AnimatedBorderButton";
import { useRouter } from "next/navigation";
import { useConfirmRedirect } from "@/utils/handleConfirmCall";

const Hero = () => {
  const confirmRedirect = useConfirmRedirect();

  const router = useRouter();
  return (
    <section id="" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none ">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: ` ${18 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="hero-layout container p-6 mx-auto  ">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] items-center gap-8">
          {/* Left Section */}

          <header className="flex  flex-col  justify-center md:w-full w-screen md:px-20 px-5 space-y-6 ">
            <div className="animate-fade-in ">
              <span className="inline-flex gap-2 items-center glass rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Enginerr
              </span>
            </div>
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper ">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap3 gap-1 pb-2 relative"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className=" xl:size-12 md:size-10 size-7 rounded-full md:p-1 p-1 bg-white-50"
                          />

                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into real Projects</h1>
                <h1>that deliver Results</h1>
              </div>
              <p className="text-white-50 md:text-xl z-10 pointer-events-none animate-fade-in animation-delay-300">
                H i am Aryan , a Software developer based in India with a
                passion for code{" "}
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in animaation-delay-300 ">
                <Button
                  className="group  md:h-12 h-10"
                  size="default"
                  onClick={() =>
                    document
                      .getElementById("project")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore my work
                  <span className="shake-on-hover">
                    <ArrowRight size={20} />
                  </span>
                </Button>
                <AnimatedBorderButton href="https://drive.google.com/file/d/1eVVEIrDdmHOye2sYFEM0N77FSKfqezp1/view?usp=sharing">
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
                {/* <button className="relative border focus:outline-none focus-visible-ring-2 focus-visible:ring-primary focus-visible:ring-2 focus:visible-opacity-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-3 rounded-full overflow-visible animate-border  ">
                Download Cv
              </button> */}
              </div>
            </div>
          </header>

          {/* RIght section */}
          <div className="animate-fade-in animation-delay-300 ">
            <div className="relative max-w-md mx-auto">
              {/* Profile Image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border w-3/4">
                <Image
                  src="/aryanraj.png"
                  alt="profile-image"
                  className="w-full aspect-4/5 rounded-2xl object-cover object-top"
                  height={200}
                  width={200}
                />
              </div>
              {/* Social icons */}
              <div className="mt-4">
                <div className="flex items-center gap-4 animate-fade-in animation-delay-400 ">
                  {/* <span>Follow me:</span> */}
                  {socialLinks.map((item, idx) => (
                    <button
                      onClick={() => confirmRedirect({ value: item.href })}
                      key={idx}
                      className=" p-2 rounded-4 hover:bg-primary/10 glass rounded-full hover:text-primary transition-all duration-300"
                    >
                      {<item.icon className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
