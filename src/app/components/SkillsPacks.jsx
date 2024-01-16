import React from 'react';


const SkillsPacks = ({ title, subText = "" }) => (
    <div className="flex justify-start font-bold">
        <h4 className="relative flex justify-start text-purpura bg-fondocolor top-[18px] left-[30px] py-2 w-[90px] pl-[10px]">
            {title} <span className="text-negro">{subText}</span>
        </h4>
    </div>
);
export default SkillsPacks;