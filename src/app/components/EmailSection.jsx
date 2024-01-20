"use client";
import React, { useState } from "react";

import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

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
                className="py-3.5 px-50 rounded-[10px] border-[1px] border-purpura degradadomail text-purpura font-bold  dark:bg-degradado-black hover:bg-purpura hover:text-blanco hover:border-blanco dark:hover:border-negro dark:hover:text-[#000000]"
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
            <Mail className="text-purpura" stroke-width="2.3"/>
              <a href="mailto:contact@bustagraphic.com?subject=Asunto%20del%20Correo&body=Cuerpo%20del%20Correo">
                contact@bustagraphic.com
              </a>
            </div>
            <div className=" flex items-center text-negro dark:text-blanko gap-2">
            <Phone className="text-purpura" stroke-width="2.3"/>
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
