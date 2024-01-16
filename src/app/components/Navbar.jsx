"use client";
import Link from "next/link";
import React from "react"; // Remove { useState }
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import SunIcon from "../../../public/sun.svg";
import MoonIcon from "../../../public/moon.svg";
import Image from "next/image";
import { useEffect } from "react";


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

      // Agregar el event listener
      window.addEventListener('scroll', handleScroll);

      // Limpiar el event listener
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className="w-full relative fuente">
      
      <div className="flex  items-center justify-center w-full">
        <div className="!fixed rounded-full border-[1]    top-10  w-[1042px] h-[65px] container py-[10px]  flex-wrap   text-negro degradado z-20">
          <div className={`menu  md:flex md:items-center md:justify-between ${navbarOpen ? 'block' : 'hidden'}`} id="navbar">
            <ul className="ml-20 flex  text-lg p-0 md:p-0  space-x-[91px] mt-0 items-center ">
              {navLinks.map((link, index) => (
                <li key={index} className="flex-grow">
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}

            </ul>
            <div className="flex mr-4 space-x-[91px]">
              <div className="flex items-center justify-center space-x-[5px]">

                <svg xmlns={SunIcon} className="h-[24px] w-[24px]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#4443D8" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 2V4 M12 20V22 M4.92999 4.92999L6.33999 6.33999 M17.66 17.66L19.07 19.07 M2 12H4 M20 12H22 M6.33999 17.66L4.92999 19.07 M19.07 4.92999L17.66 6.33999" stroke="#4443D8" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <button className="border-2 border-purpura bg-transparent rounded-full pl-1 py-1 border-red-500 pr-7">
                  <div className="rounded-full w-4 h-4 bg-purpura"></div>
                </button>
                <Image src={MoonIcon} />
              </div>
              <button className="text-lg  bg-purpura text-blanco rounded-full px-[40px] py-2 font-semibold">
                Contact Me
              </button>
            </div>
          </div>
          
        </div>
        <div className="!fixed relative h-[250px]  w-full bg-custom-gradient z-10">
      </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      
    </nav>

  );
};

export default Navbar;
