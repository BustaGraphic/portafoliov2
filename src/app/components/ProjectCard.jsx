import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Html from "../../../public/images/html.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';


const ProjectCard = ({ imgUrl, title, aplications, previewUrl, boxClickUrl, imageClickUrl, fontAwesomeIcons })=> {
  const handleBoxClick = () => {
    window.open("https://www.x.com", '_blank');
  };

  const handleImageClick = () => {
    window.open("https://www.google.com", '_blank');
  };
  return (
    <div className=""> { }
      <div className=" degradado p-5 rounded-[10px] dark:border-borde dark:bg-degradado-black cursor-pointer" onClick={handleBoxClick}>
        <div
          className="h-52 md:h-72 rounded-[16px] relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
          onClick={(e) => {
            e.stopPropagation();
            handleImageClick();
          }}
        >
          <Link href={previewUrl} passHref>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#04070f] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-[16px] ">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </div>
          </Link>
        </div>
        <div className="text-negro rounded-b-xl mt-3 pt-6 pb-2 px-4 dark:text-blanko">
          <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
          <div className="grid grid-cols-12 gap-[2px]">
            {aplications.map((iconName, index) => (
              <div key={index} className="w-[20px]">
                <FontAwesomeIcon
                  icon={fontAwesomeIcons[iconName]}
                  alt="Application Icon"
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default ProjectCard;