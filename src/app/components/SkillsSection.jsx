import React from "react";
import Image from "next/image";
import Html from "../../../public/html.svg";
import SkillsPacks from "./SkillsPacks";
import SkillsItem from "./SkillsItem";

const SkillsSection = () => {
    const frontEndSkills = [
        { name: "HTML", percentage: "95" },
        { name: "CSS", percentage: "85" },
        { name: "JavaScript", percentage: "80" },
        { name: "React", percentage: "70" },
        { name: "Angular", percentage: "50" },
        { name: "Next Js", percentage: "60" },
        { name: "Tailwind", percentage: "75" },
        
    ];

    const backEndSkills = [
        { name: "Java", percentage: "85" },
        { name: "Python", percentage: "80" },
        { name: "Spring", percentage: "50" },
        { name: "Hibernate", percentage: "40" },
        { name: "C#", percentage: "60" },
        { name: "Node Js", percentage: "60" },
        
        
    ];

    const designSkills = [
        { name: "Photoshop", percentage: "95" },
        { name: "Illustrator", percentage: "90" },
        { name: "After Effects", percentage: "80" },
        { name: "Figma", percentage: "90" },
        { name: "InDesign", percentage: "60" },
        { name: "XD", percentage: "75" },
        { name: "Canva", percentage: "70" },
    ];
    return (
        <section className="text-negro sm:mb-[110px] mb-[-170px] fuente" id="skills">
            <div className="flex justify-center my-10">
                <h2 className="text-4xl font-semibold text-negro mb-4 dark:text-blanko">
                    My <span className="text-purpura font-bold">Skills</span>
                </h2>
            </div>

            <SkillsPacks title="Front&nbsp;" subText="End" />

            <div className="grid grid-cols-7 gap-4 border-[1px] border-purpura rounded-[20px] px-[50px] py-[40px] mb-[40px]">
                {frontEndSkills.map(skill => (
                    <SkillsItem skillName={skill.name} percentage={skill.percentage} key={skill.name} />
                ))}
            </div>

            <SkillsPacks title="Back&nbsp;" subText="End" />

            <div className="grid grid-cols-7 gap-4 border-[1px] border-purpura rounded-[20px] px-[50px] py-[40px] mb-[40px]">
                {backEndSkills.map(skill => (
                    <SkillsItem skillName={skill.name} percentage={skill.percentage} key={skill.name} />
                ))}
            </div>

            <SkillsPacks title="Design" />

            <div className="grid grid-cols-7 gap-4 border-[1px] border-purpura rounded-[20px] px-[50px] py-[40px]">
                {designSkills.map(skill => (
                    <SkillsItem skillName={skill.name} percentage={skill.percentage} key={skill.name} />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;