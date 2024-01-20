"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react"; // Remove { useState }
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import SunIcon from "../../../public/sun.svg";
import MoonIcon from "../../../public/moon.svg";
import Image from "next/image";
import { Moon } from 'lucide-react';
import { SunMedium } from 'lucide-react';
import { Sun } from 'lucide-react';


const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];


const Navbar = () => {
  const [theme, setTheme] = useState("light");


  const options = [
    {
      icon: "sunny",
      text: 'light'
    },
    {
      icon: "moon",
      text: 'dark'
    },

  ];
  useEffect(() => {

    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);


  const [navbarOpen, setNavbarOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');

      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active-link');
        }
      });
    };


    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");


  return (
    <nav className="w-full relative fuente">

      <div className="flex  items-center justify-center w-full">
        <div className="!fixed rounded-full  border-[1]    top-10  w-[1042px] h-[65px] container pt-[9px] pb-[10px] flex-wrap   text-negro z-20 degradado dark:text-blanko dark:bg-degradado-black dark:border-[#3B3D41]">
          <div className={`menu  md:flex md:items-center md:justify-between ${navbarOpen ? 'block' : 'hidden'}`} id="navbar">
            <ul className="ml-20 flex  text-lg p-0 md:p-0  space-x-[91px] mt-0 items-center ">
              {navLinks.map((link, index) => (
                <li key={index} className="flex-grow">
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}

            </ul>
            <div className="flex items-center  mr-3 space-x-[91px] ">

              <div className="flex items-center justify-center space-x-[5px] mr-[-20px] ">

                <div className="flex items-center">
               
                <Sun className="h-[24px] w-[24px] text-purpura dark:text-blanko " stroke-width="2.3"/>
                </div>

                <div onClick={toggleTheme} className={`theme-toggle ${theme === 'dark' ? 'dark-mode' : ''}`}>
                  <div className="toggle-btn">

                  </div>
                </div>
                <div className="flex items-center">
                <Moon className="h-[24px] w-6 text-negro dark:text-purpura " stroke-width="2.2"/>
                </div>

              </div>

                <a href="#contact">
              <button className="text-lg  bg-purpura text-blanco rounded-full px-[40px] py-2  font-semibold dark:text-[#000000]">
                Contact Me
              </button>
              </a>
            </div>
          </div>

        </div>
        <div className="!fixed relative h-[250px]  w-full bg-customgradient dark:bg-customgradientb z-10 ">
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

    </nav>

  );
};

export default Navbar;
