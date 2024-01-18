"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";



const AboutSection = () => {






  return (
    <section className="text-negro  mt-[-250px] sm:mb-[110px] mb-[-170px] fuente " id="about">
      <div className="relative top-[750px] left-[600px] degradado h-[100px] w-[100px] order-[1px]  degradado rounded-tl-[50px] rounded-tr-[20px] rounded-bl-[29px] rounded-br-[45px]  dark:border-borde dark:bg-degradado-black">

      </div>
      <div className="relative bottom-[-300px] right-[-1100px] degradado h-[100px] w-[100px] order-[1px]  degradado rounded-tl-[50.5px] rounded-tr-[20px] rounded-bl-[29px] rounded-br-[50px] dark:border-borde dark:bg-degradado-black ">

      </div>
      <div className="relative top-[190px] left-[-50px] degradado h-[100px] w-[100px] order-[1px]  degradado rounded-tl-[20px] rounded-tr-[50.5px] rounded-bl-[50.5px] rounded-br-[29px] dark:border-borde dark:bg-degradado-black ">

      </div>
      <div className="flex justify-center my-10">
        <h2 className="text-4xl font-semibold text-negro mb-4 dark:text-blanko ">
          About <span className="text-purpura font-bold">Me</span>
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 sm:items-center  px-4 xl:gap-16   xl:px-16 bg-purpura rounded-[20px]">
        <div className=" rounded-tl-[20px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[20px] lg:w-[496px] lg:h-[300px] h-[100px]; degradado my-10 dark:border-borde dark:bg-degradado-black" />
        <div className=" md:mt-0 text-left flex flex-col h-full justify-center items-start">

          <p className="text-base lg:text-lg text-blanco">
            From <span className="font-bold">Graphic Designer</span> to web developer. I fuse visual creativity with technical skills to create captivating web experiences. Specializing in HTML, CSS and JavaScript, my multidisciplinary approach brings technical precision to user interface and user experience. Committed to continue learning and contributing to the world of web development, merging design and functionality to create impactful experiences.          </p>

        </div>
      </div>
    </section >
  );
};

export default AboutSection;