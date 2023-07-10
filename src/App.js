import React from "react";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Skills from "./Component/Skill";

import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    
    <Contact />
  </main>
  );
  
}
