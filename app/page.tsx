'use client';
import {Home} from "@/components/navPages/Home"
import { Experience } from '@/components/navPages/Experience';
import { Projects } from '@/components/navPages/Projects';
import Contact from '@/components/navPages/Contact';
import SkillsSection from "@/components/navPages/Skills";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className={`flex flex-col items-center justify-center scroll-smooth`}>
      <Home/>
      <Experience/>
      <Projects/>
      <div id="skills-contact">
        <SkillsSection/>
        <Contact/>
      </div>
      <Footer/>
    </main>
  );
}
