import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "active-linke "
    : " text-negro dark:text-blanko";
  return (
    <button
      className={`${buttonStyles} `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;