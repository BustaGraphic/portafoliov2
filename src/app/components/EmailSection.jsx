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
      <h2 className="text-center text-4xl font-semibold text-negro mt-4 mb-8 md:mb-12 sm:pb-[40px] fuente">
        Contact <span className="text-purpura font-bold">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative z-10">
        

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
                  className="rounded-[10px] degradado block w-full p-2.5 text-negro"
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
                  className="rounded-[10px] degradado block w-full p-2.5 text-negro"
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
                  className="rounded-[10px] degradado block w-full p-2.5 text-negro"
                  placeholder="Message..."
                />
              </div>
              <button
                type="submit"
                className="py-3.5 px-50 rounded-[10px] degradadomail text-purpura font-bold "
              >
                Send Message
              </button>

            </form>
          )}
        </div>
        
        <div className="z-10">
          <h5 className="text-xl font-bold text-negro my-2">Get in <span className="text-purpura">touch</span> </h5>
          <p className="text-negro mb-4 max-w-md">
          I am open to new job opportunities and my email is always at your disposal. Feel free to contact me, either to ask a question or just to say hello. I will do my best to get back to you as soon as possible.
          </p>
         
        </div>
        <div className="absolute rounded-tl-[70px] rounded-tr-[32px] rounded-bl-[31px] rounded-br-[70px]
  bg-purpura w-[211px] h-[140px] z-[-1] bottom-[-25px] left-[-30px]">
        

        </div>
      </div>
      
    </section>
  );
};

export default EmailSection;
