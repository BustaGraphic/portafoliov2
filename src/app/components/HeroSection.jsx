"use client";
import React, { useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github.png";
import LinkedInIcon from "../../../public/linkedin.png";
import BehanceIcon from "../../../public/behance.png";
import GithubIconC from "../../../public/githubcolor.png";
import LinkedInIconC from "../../../public/linkedincolor.png";
import BehanceIconC from "../../../public/behancecolor.png";
import BustaLogo from "../../../public/bustalogo.png";
import TextoBusta from "../../../public/textobusta.png";

const HeroSection = () => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isBehanceHovered, setIsBehanceHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  return (
    <motion.section id="home" className="lg:pt-[200px] fuente" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:mt-[-70px] " >
        <motion.div className="col-span-8 text-center sm:text-left my-auto">
        <span className="text-negro text-6xl font-bold fuente">
              Hello, I&apos;m 
            </span>
          <h1 className="text-purpura mb-4 sm:text-8xl text-8xl lg:text-8xl lg:leading-normal font-extrabold fuente ">
            
            
            <TypeAnimation
              sequence={[
                "Busta",
                1000,
                "Web ",
                1000,
                "Designer",
                1000,
                "UI/UX ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-2 sm:space-y-0">

            <Link href="/#contact" className="px-10 py-2 inline-block rounded-full text-black font-semibold  bg-purpura text-center">
              Hire Me,

            </Link>

            <div className="flex border-2 border-purpura rounded-full justify-center sm:justify-start items-center w-full sm:w-auto px-5 py-2  bg-transparent text-purpura font-semibold ml-5 ">
              
              CV
            </div>

          </div>
        </motion.div>
        <motion.div className="col-span-4 place-self-center sm:mt-20">

          <div className="relative ">

            <div className="containeree">
              <div className="boxhero "></div>
              <Image src={BustaLogo} alt="Behance Icon" className="logo " />
              <Image src={TextoBusta} alt="was" className="texto rotate-360" />
            </div>


            <div
              onClick={() => {
                window.open("https://github.com/BustaGraphic", "_blank");
              }}
              onMouseEnter={() => setIsGithubHovered(true)}
              onMouseLeave={() => setIsGithubHovered(false)}
              className="absolute border-[1px] rounded-[10px] degradado top-[270px] left-[25px] "
            >
              <Image
                src={isGithubHovered ? GithubIconC : GithubIcon}
                alt="Github Icon"
                className="p-[13px] "
              />
            </div>

            <div
              onClick={() => {
                window.open("https://be.net/BustaGraphic", "_blank");
              }}
              onMouseEnter={() => setIsBehanceHovered(true)}
              onMouseLeave={() => setIsBehanceHovered(false)}
              className="absolute border-[1px] rounded-[10px] degradado bottom-[15px] right-[160px]"
            >
              <Image
                src={isBehanceHovered ? BehanceIconC : BehanceIcon}
                alt="Behance Icon"
                className="p-[13px] move-right"
              />
            </div>

            <div
              onClick={() => {
                window.open("https://www.linkedin.com/in/josuebusta/", "_blank");
              }}
              onMouseEnter={() => setIsLinkedInHovered(true)}
              onMouseLeave={() => setIsLinkedInHovered(false)}
              className="absolute  border-[1px] rounded-[10px] degradado bottom-[220px] right-[15px]"
            >
              <Image
                src={isLinkedInHovered ? LinkedInIconC : LinkedInIcon}
                alt="LinkedIn Icon"
                className="p-[15px] move-right"
              />
            </div>
          </div>


        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;