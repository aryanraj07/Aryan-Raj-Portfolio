"use client";
import { useEffect, useState } from "react";
import Header from "./layout/Header";
import Home from "./components/Home";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/sections/Hero";
import Footer from "./layout/Footer";
import AppThemeProvider from "./providers/theme-provider";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <AppThemeProvider>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </AppThemeProvider>
  );
}

export default App;
