"use client";
import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import Link from "next/link";
import { Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react";
import Button from "./Button";
import { socialLinks } from "@/constants";
interface SubmitStatusType {
  type: string | null;
  message: string;
}
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aryanraj010010@gmail.com",
    href: "mailto:aryanraj010010@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7004659504",
    href: "tel:+917004659504",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, UP, India",
    href: "#",
  },
];
const Contact = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  // const [btnStaate, setBtnState] = useState("Send Message");
  const [loading, setLoaing] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.message) {
      return setSubmitStatus({
        type: "error",
        message: "Please fill all fields",
      });
    }

    try {
      // setStatus("Sending...");
      setLoaing(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setLoaing(false);
        setSubmitStatus({
          type: "success",
          message: "Message Sent ! Please check your email for confirmation.",
        });
        setUser({ name: "", email: "", message: "" });
      } else {
        setLoaing(false);
        setSubmitStatus({
          type: "error",
          message: "Failed. Try again!",
        });
      }
    } catch {
      setLoaing(false);
      setSubmitStatus({
        type: "error",
        message: "Failed. Try again!",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setUser({ ...user, [e.target.name]: e.target.value });
  console.log(submitStatus);

  return (
    <section
      id="contact"
      className="py-20  transition duration-300 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-ful h-full">
        <div className="absoulute top-1/4 w-96 rounded-full bg-primary/5 right-0 "></div>
        <div className="absoulute bottom-1/4 w-96 rounded-full bg-highlight/5 right-0 "></div>
      </div>
      <div className="container py-6 px-4 sm:px-6 mx-auto relative">
        {/* Title */}
        <div className=" mb-12 mx-auto">
          <span className="inline-block px-4 py-1 bg-orange-500/20  text-orange-600  text-sm font-medium rounded-full mb-3">
            Get in Touch
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 ">
            Let’s Build Together
          </h2>
          <p className="text-gray-600">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Your Name ..."
                  className="w-full px-4 py-3  rounded-xl  bg-surface focus:ring-1 focus:ring-primary outline-none transition-all "
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Your email ..."
                  className="w-full px-4 py-3  rounded-xl  bg-surface focus:ring-1 focus:ring-primary outline-none transition-all "
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={user.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Youre message ..."
                  className="w-full px-4 py-3  rounded-xl  bg-surface focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <> Sending </>
                ) : (
                  <>
                    Send <Send className="h-5 w-5" />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400 "
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
          <div className="space-y-6 animate-fade-in animation-delay-400 ">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <Link
                    href={item.href}
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Availability card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center mb-4 gap-3">
                <span className=" w-3 h-3 rounded-full bg-green-500 animate-pulse " />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-gray-600 text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
