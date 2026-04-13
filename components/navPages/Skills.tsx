"use client";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa6";
import { RiCss3Fill, RiHtml5Fill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiNodedotjs, SiSpringboot, SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
    { name: "HTML 5", icon: <RiHtml5Fill />, hoverColor: "group-hover:text-orange-500" },
    { name: "CSS", icon: <RiCss3Fill />, hoverColor: "group-hover:text-blue-500" },
    { name: "TypeScript", icon: <SiTypescript />, hoverColor: "group-hover:text-sky-500" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill />, hoverColor: "group-hover:text-cyan-400" },
    { name: "React.js", icon: <FaReact />, hoverColor: "group-hover:text-cyan-300" },
    { name: "Git", icon: <FaGitAlt />, hoverColor: "group-hover:text-orange-600" },
    { name: "Github", icon: <FaGithub />, hoverColor: "group-hover:text-purple-500" },
    { name: "JavaScript", icon: <IoLogoJavascript />, hoverColor: "group-hover:text-yellow-400" },
    { name: "Python", icon: <FaPython />, hoverColor: "group-hover:text-yellow-300" },
    { name: "Node.js", icon: <SiNodedotjs />, hoverColor: "group-hover:text-green-600" },
    { name: "MongoDB", icon: <SiMongodb />, hoverColor: "group-hover:text-green-500" },
    { name: "Java", icon: <FaJava />, hoverColor: "group-hover:text-red-500" },
    { name: "Spring Boot", icon: <SiSpringboot />, hoverColor: "group-hover:text-green-500" },
];

export default function SkillsSection() {
    return (
        <section id="skills" className={` ${jetbrainsMono.className} flex flex-col gap-10 pt-30 py-16 px-4`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My Skills
                </h1>
            </div>
            <div className="flex flex-wrap max-w-4xl mx-auto gap-6 items-center justify-center">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}
