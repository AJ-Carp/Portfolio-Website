import { Heart } from "lucide-react";
import React, { JSX, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";
import smartMergeLogo from "@/public/smartmerge_logo_stacked.png";
import pernMerchHome from "@/public/pernmerch-home.png";
import mathAlien from "@/public/alien_holding_tree_diagram.png";
import fundsLayoffs from "@/public/layoffs_project.png";


import { FaReact, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostgresql, SiSpring, SiStripe, SiJavascript, SiMysql, SiTableau } from "react-icons/si";

export const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongo: <SiMongodb className="text-green-400" />,
  ts: <SiTypescript className="text-blue-500" />,
  next: <SiNextdotjs className="text-white" />,
  postgres: <SiPostgresql className="text-sky-500" />,
  postgresql: <SiPostgresql className="text-sky-500" />,
  "spring boot": <SiSpring className="text-green-500" />,
  stripe: <SiStripe className="text-indigo-400" />,
  docker: <FaDocker className="text-blue-400" />,
  aws: <FaAws className="text-orange-400" />,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  javascript: <SiJavascript className="text-yellow-400" />,
  mysql: <SiMysql className="text-sky-400" />,
  tableau: <SiTableau className="text-orange-500" />,
};

const projects = [
  {
    title: "Smart Merge",
    description: "AI code review that comments right on your PR",
    thumbnail: smartMergeLogo,
    thumbnailOffsetY: 45,
    techStack: ["react", "spring boot", "postgresql"],
    gradient: "#bbaaff, #a9aaae",
    github: "https://github.com/AJ-Carp/Smart-Merge",
    live: "",
  },
  {
    title: "PERN Merch",
    description: "A website built to sell my band's merch",
    thumbnail: pernMerchHome,
    techStack: ["react", "spring boot", "postgresql", "stripe", "docker", "aws"],
    gradient: "#7a0909, rgb(0, 0, 0)",
    github: "https://github.com/AJ-Carp/Pern-Merch",
    live: "https://pernmerch.com/",
  },
  {
    title: "Notation Converter",
    description: "An expression converter that visualizes binary trees",
    thumbnail: mathAlien,
    techStack: ["html", "css", "javascript"],
    gradient: "rgb(111, 180, 123), rgb(44, 28, 70)",
    github: "https://github.com/AJ-Carp/NotationConverter",
    live: "https://aj-carp.github.io/NotationConverter/",
  },
  {
    title: "Funds and Layoffs",
    description: "A SQL and Tableau dive into company layoffs and funding",
    thumbnail: fundsLayoffs,
    thumbnailOffsetY: 29,
    techStack: ["mysql", "tableau"],
    gradient: "rgb(11, 65, 130), rgb(0, 255, 195)",
    github: "https://github.com/AJ-Carp/Funds-and-Layoffs-Project",
    live: "",
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div id="projects" className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pt-30 pb-20 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} flex flex-col gap-6 w-full `}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
