import React from "react";
import family from "../images/family.svg";

type Props = { title: string; position: "top" | "bottom" };

function Card({ title, position }: Props) {
  return (
    <div
      className={`relative w-[130px] ${
        position === "top" ? "-top-[175px]" : "top-5"
      } -left-[57px]`}
    >
      {position === "bottom" && (
        <div className="w-[2px] h-4 bg-line-teal mx-auto my-2" />
      )}
      <div className="bg-card-blue  rounded-[5px] p-2 w-[130px] h-[136px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] after:-ml-1">
        <img className="my-[8px]" src={family} alt="Family" />
        <p className="text-sm text-center">{title}</p>
      </div>
      {position === "top" && (
        <div className="w-[2px] h-4 bg-line-teal mx-auto my-2" />
      )}
    </div>
  );
}

export default Card;
