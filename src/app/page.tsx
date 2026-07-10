import Header from "./layout/Header";
import Home from "../components/Home";
import About from "../components/About/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Hero from "../components/sections/Hero";
import Footer from "./layout/Footer";
import AppThemeProvider from "./providers/theme-provider";
import prisma from "@/lib/prisma";
async function App() {
  // function handleScrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }
  const projects = await prisma.project.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    // <AppThemeProvider>
    <>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
    // </AppThemeProvider>
  );
}

export default App;
