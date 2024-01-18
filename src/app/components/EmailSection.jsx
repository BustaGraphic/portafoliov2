"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github.png";
import LinkedInIcon from "../../../public/linkedin.png";
import BehanceIcon from "../../../public/behance.png";
import GithubIconC from "../../../public/githubcolor.png";
import LinkedInIconC from "../../../public/linkedincolor.png";
import BehanceIconC from "../../../public/behancecolor.png";
import DiscordIcon from "../../../public/discord.png";
import XIcon from "../../../public/x.png";
import DiscordIconC from "../../../public/discordC.png";
import XIconC from "../../../public/XC.png";
import Html from "../../../public/images/html.png";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isBehanceHovered, setIsBehanceHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isXHovered, setIsXHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="lg:pt-[210px] pt-20 fuente">
      <h2 className="text-center text-4xl font-semibold text-negro mt-4 mb-8 md:mb-12 sm:pb-[40px] fuente dark:text-blanko">
        Contact <span className="text-purpura font-bold">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 my-12 md:my-12 gap-[170px] relative z-10">


        <div>
          {emailSubmitted ? (
            <p className="text-negro text-sm mt-2">Email sent successfully!</p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"

                >

                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="rounded-[10px] degradado block w-full p-2.5 text-negro dark:border-borde dark:bg-degradado-black dark:text-blanko"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"

                >

                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="rounded-[10px] degradado block w-full p-2.5 text-negro dark:border-borde dark:bg-degradado-black dark:text-blanko"
                  placeholder="Your subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"

                >

                </label>
                <textarea
                  name="message"
                  id="message"
                  className="rounded-[10px] degradado block w-full p-2.5 text-negro dark:border-borde dark:bg-degradado-black dark:text-blanko"
                  placeholder="Message..."
                />
              </div>
              <button
                type="submit"
                className="py-3.5 px-50 rounded-[10px] degradadomail text-purpura font-bold  dark:bg-degradado-black hover:bg-purpura hover:text-blanco hover:border-blanco dark:hover:border-negro dark:hover:text-[#000000]"
              >
                Send Message
              </button>

            </form>
          )}
        </div>

        <div className="z-10">
          <h5 className="text-4xl font-bold text-negro mb-5 dark:text-blanko">Get in <span className="text-purpura font-extrabold">touch</span> </h5>
          <p className="text-negro mb-4 max-w-md dark:text-blanko">
            I am open to new job opportunities and my email is always at your disposal. Feel free to contact me, either to ask a question or just to say hello. I will do my best to get back to you as soon as possible.
          </p>
          <div className="grid grid-cols-2 ">
            <div className="flex items-center text-negro dark:text-blanko gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#4443D8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="#4443D8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a href="mailto:contact@bustagraphic.com?subject=Asunto%20del%20Correo&body=Cuerpo%20del%20Correo">
              contact@bustagraphic.com
              </a>
            </div>
            <div className=" flex items-center text-negro dark:text-blanko gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_129_358)">
                  <path d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z" stroke="#4443D8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_129_358">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <a href="tel:+34640030355">+34 640030355</a>
              
            </div>
          </div>
        </div>
        <div className="absolute rounded-tl-[70px] rounded-tr-[32px] rounded-bl-[31px] rounded-br-[70px]
  bg-purpura w-[211px] h-[140px] z-[-1] bottom-[-25px] left-[-30px]">


        </div>
      </div>

    </section>
  );
};

export default EmailSection;
