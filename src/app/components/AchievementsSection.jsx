"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    prefix: "+",
    metric: "PROJECTS",
    value: "33",
    
  },
  {
    prefix: "+",
    metric: "CLIENTS",
    value: "28,000",
  },
  {
    prefix: "+",
    metric: "YEARS",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-20 px-4 xl:gap-16  xl:px-16 fuente">
    
      <div className="sm:border-transparent sm:border rounded-[20px] py-4 px-20 flex flex-col sm:flex-row items-center justify-between dark:border-borde dark:bg-degradado-black degradado">
      
        
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-2 sm:my-0 "
            >
              <h2 className=" text-purpura text-4xl font-bold flex flex-row font-montserrat">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className=" text-negro text-4xl font-bold font-montserrat dark:text-blanko "
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
             
              <p className="text-center font-semibold [color:#353A40] [font-size:17.5px] [letter-spacing:9px] custom-text-shadow font-montserrat">{achievement.metric}</p>
            </div>
          );
        })}
        
      </div>
      
    </div>
  );
};

export default AchievementsSection;