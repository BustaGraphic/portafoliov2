"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Html from "../../../public/images/html.png";
import Js from "../../../public/js.png";
import Css from "../../../public/css.png";
import Angular from "../../../public/angular.png";
import Bootstrap from "../../../public/bootstrap.png";
import Java from "../../../public/java.png";
import Node from "../../../public/node.png";
import Python from "../../../public/python.png";
import ReactIcon from "../../../public/react.png";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCss3Alt, faHtml5, faReact, faAngular, faBootstrap, faJava, faJs, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    aplications: ["Html", "Css", "Js", "React"],
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    aplications: ["NodeJs", "Java", "Python"],
    image: "/images/projects/1.png",
    tag: ["All", "Brand"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    aplications: ["Html", "Css", "Js", "Angular", "Bootstrap"],
    image: "/images/projects/1.png",
    tag: ["All", "UiUx"],
    gitUrl: "/",
    previewUrl: "/",
  },

];
const fontAwesomeIcons = {
  "Html": faHtml5,
  "Css": faCss3Alt,
  "Js": faJs,
  "Java": faJava,
  "Python": faPython,
  "Angular": faAngular,
  "React": faReact,
  "Bootstrap": faBootstrap,
  "NodeJs": faNodeJs,
  
};
const tagMapping = {
  "All Works": "All",
  "Web Developement": "Web",
  "UI/UX Designs": "UiUx",
  "Branding Designs": "Brand"
};
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tagName) => {
  const tagValue = tagMapping[tagName];
  setTag(tagValue);
};

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="fuente">
      <h2 className="text-center text-negro text-4xl font-semibold mt-4 mb-[-200px] md:my-[-150px] pb-[210px] pt-[210px] dark:text-blanko">
        My <span className="text-purpura font-bold">Projects</span>
      </h2>
      <div className="flex justify-center">
      <div className="inline-flex flex-row degradado rounded-full justify-center items-center gap-10 my-6 h-[45px] px-10 dark:border-borde dark:bg-degradado-black">
        <ProjectTag
          onClick={handleTagChange}
          name="All Works"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Developement"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX Designs"
          isSelected={tag === "UiUx"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Branding Designs"
          isSelected={tag === "Brand"}
        />
      </div>
      </div>
      <ul ref={ref} className="grid md:grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              aplications={project.aplications}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              fontAwesomeIcons={fontAwesomeIcons}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;