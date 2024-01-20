"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";



const AboutSection = () => {






  return (
    <section className=" text-negro  mt-[100px] sm:mb-[110px] mb-[-170px] fuente " id="about">


      <div className="flex justify-center my-10">
        <h2 className="text-4xl font-semibold text-negro mb-4 dark:text-blanko ">
          About <span className="text-purpura font-bold">Me</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="md:grid md:grid-cols-2  sm:items-center  px-4 w-[1200px]   xl:px-16 bg-purpura rounded-[20px]">
          <div className=" rounded-tl-[20px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[20px] lg:w-[496px] lg:h-[300px] h-[100px]; degradado my-10 dark:border-borde dark:bg-degradado-black" />
          <div className=" md:mt-0 text-left flex flex-col h-full justify-center items-start">

            <p className="text-base lg:text-lg text-blanco">
              From <span className="font-bold">Graphic Designer</span> to web developer. I fuse visual creativity with technical skills to create captivating web experiences. Specializing in HTML, CSS and JavaScript, my multidisciplinary approach brings technical precision to user interface and user experience. Committed to continue learning and contributing to the world of web development, merging design and functionality to create impactful experiences.          </p>

          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutSection;