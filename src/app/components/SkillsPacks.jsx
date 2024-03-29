import React from 'react';


const SkillsPacks = ({ title, subText = "" }) => (
    <div className="flex justify-start font-bold">
        <h4 className="relative flex justify-start text-purpura bg-fondocolor top-[18px] left-[30px] py-2 px-3  dark:bg-blacky ">
            {title} <span className="text-negro dark:text-blanko">{subText}</span>
        </h4>
    </div>
);
export default SkillsPacks;