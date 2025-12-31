import { navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo copyright */}
          <div className="text-center md:text-left">
            <Link href="#" className="text-xl font-bold tracking-tight">
              Aryan Raj
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Aryan Raj. All rights reserved.
            </p>
          </div>
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                className="text-sm text-gray-600 hover:text-white-50 transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass  hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
