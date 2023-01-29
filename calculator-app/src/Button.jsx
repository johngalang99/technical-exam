import React from 'react';

const Button = ({ value, type, onButtonClick }) => {
  const buttonColor = () => {
    if (type === "number") return "bg-slate-700";
    else if (type === "function") return "bg-slate-500";
    else if (type === "operator") return "bg-orange-400";
  };
  return (
    <button
      onClick={onButtonClick(value)}
      className={`text-white p-5 w-[50px] h-[50px] ${buttonColor()} rounded-full inline-flex justify-center items-center ${
        value === "0" && "w-[100px]"
      }`}
    >
      {value}
    </button>
  );
};

export default Button;
