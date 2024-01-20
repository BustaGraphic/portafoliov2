"use client";
import React, { useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

import BustaLogo from "../../../public/bustalogo.png";
import TextoBusta from "../../../public/textobusta.png";
import Cv from "../../../public/bustalogo.png";
import { Download } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const HeroSection = () => {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isBehanceHovered, setIsBehanceHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  return (
    <motion.section id="home" className="lg:pt-[200px]  " initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:mt-[-70px] " >
        <motion.div className="col-span-8 text-center sm:text-left my-auto mb-[100px]">
          <span className="text-negro text-6xl font-bold dark:text-blanko">
            Hello, I&apos;m
            
           
          </span>
          <h1 className="text-purpura mb-4 sm:text-8xl text-8xl lg:text-8xl lg:leading-normal font-extrabold ">


            <TypeAnimation
              sequence={[
                "Busta",
                1000,
                "Web Developer",
                1000,
                "Graphic Designer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-2 sm:space-y-0">

            <Link href="/#contact" className="px-10 py-2 inline-block rounded-full text-black font-semibold  bg-purpura text-center dark:text-[#000000]">
              Hire Me

            </Link>
            <a href={Cv} download="logojeubusta.png">
              <button className="flex border-2 border-purpura rounded-full justify-center sm:justify-start items-center w-full sm:w-auto px-5 py-2 degradadolight text-purpura font-semibold ml-5 dark:bg-degradado-black">
                <span id="button-text">CV</span>
                
                
                
              </button>
            </a>


          </div>
        </motion.div>
        <motion.div className="col-span-4 place-self-center sm:mt-20">

          <div className="relative ">

            <div className="flex justify-center relative containeree">
              <div className="absolute top-[45px] left-[45px] w-[360px] h-[360px] rounded-full bg-purpura boxhero "></div>
              <Image src={BustaLogo} alt="Behance Icon" className="absolute p-[170px] " />
              <Image src={TextoBusta} alt="was" className="absolute p-5 rotate-360" />
            </div>
            
            <div
              onClick={() => {
                window.open("https://github.com/BustaGraphic", "_blank");
              }}
              
              className="flex justify-center items-center degradado cursor-pointer  absolute border-[1px] rounded-[10px] w-[67px] h-[67px] text-4xl hover:text-purpura  top-[270px] left-[25px] dark:border-borde dark:bg-degradado-black "
            >
               <FontAwesomeIcon icon={faGithub} className=''  />
            </div>
              
            <div
              onClick={() => {
                window.open("https://be.net/BustaGraphic", "_blank");
              }}
              
              className="flex justify-center items-center degradado cursor-pointer absolute border-[1px] rounded-[10px] w-[67px] h-[67px] text-4xl hover:text-purpura   bottom-[15px] right-[160px] dark:border-borde dark:bg-degradado-black"
            >
              <FontAwesomeIcon icon={faBehance} className=''  />
            </div>

            <div
              onClick={() => {
                window.open("https://www.linkedin.com/in/josuebusta/", "_blank");
              }}
              
              className="flex justify-center items-center cursor-pointer degradado absolute border-[1px] rounded-[10px] w-[67px] h-[67px] text-4xl text bottom-[220px] right-[15px] hover:text-purpura  dark:border-borde dark:bg-degradado-black"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className=''  />
            </div>
          </div>


        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;