import React from 'react';
import style from "./Chip.module.css";

interface ChipProps {
  name: string;
}

const Chip: React.FC<ChipProps> = ({ name }) => {
  return (
    <div>
      <button className={style.chipButton}>
        {name} <span className={style.spanX}>X</span>
      </button>
    </div>
  );
}

export default Chip;
