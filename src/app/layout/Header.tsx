"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Laptop } from "lucide-react";
import "@/styles/Header.css";
import { useTheme } from "next-themes";
import Button from "../components/Button";
import Link from "next/link";
import { navLinks } from "@/constants";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <header className="w-full fixed top-0 left-0 z-50  border-b border-white/10  transition">
      <div className="container mx-auto p-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg dark:text-white"
        >
          <Image
            src="/aryanraj.png"
            alt="Aryan Raj Logo"
            width={34}
            height={34}
            className="avatar-image"
          />
          <span>Aryan Raj</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="px-2 py-1 rounded-full   flex items-center glass gap-2 ">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="px-4 py-2 hover:bg-surface/90 hover:text-primary text-white-50 transition-all rounded-full"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-5">
          {/* {isDark ? (
            <button
              onClick={() => setTheme("light")}
              className="p-2 rounded-full bg-black/10 dark:bg-white/20 hover:scale-110 transition"
            >
              <Moon
                size={20}
                className={theme === "dark" ? "text-blue-400" : "opacity-50"}
              />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="p-2 rounded-full bg-black/10 dark:bg-white/20 hover:scale-110 transition"
            >
              <Sun
                size={20}
                className={theme === "light" ? "text-yellow-400" : "opacity-50"}
              />
            </button>
          )} */}
          <div className="hidden md:block">
            <Button size="sm">Contact</Button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="glass-strong animate-fade-in">
          <div className="container mx-auto   py-6 flex flex-col px-6 gap-4">
            {navLinks.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="dark:text-white-50 text-lg hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme Toggler in Mobile Menu */}

            <Button size="sm">Contact</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
