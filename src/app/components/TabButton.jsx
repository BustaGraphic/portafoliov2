import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};



const TabButton = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? "bn11" : "bn12 text-[#51505c]";
  return (
    <button
      className={`${buttonStyles} mx-[10px] px-[20px] h-[54px] rounded-20 shadow-[9px_4px_15.7px_#00000040] backdrop-blur-[20px] backdrop-brightness-[100%] bg-gradient-to-br from-[rgba(226.31, 221.6, 221.6, 1)] to-[rgba(0, 0, 0, 1)] cursor-pointer relative z-[0] flex items-center hover:text-white`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};


export default TabButton;

