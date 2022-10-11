import React from "react";

type Props = {
  title?: string;
  image?: React.ReactNode;
  hasCard?: true | false;
  text?: string;
  orientation?: "top" | "bottom";
  colour?: "light" | "dark";
  align?: "left" | "right" | "center";
};

function Content({
  title,
  text,
  image,
  align = "center",
  colour = "dark",
  hasCard = true,
  orientation,
}: Props) {
  return (
    <div
      className={`absolute w-[130px] ${
        orientation === "top" ? "-top-[175px]" : "top-5"
      } -left-[60px]`}
    >
      {orientation === "bottom" && text && (
        <p
          className={` m-2 opacity-60 ${align === "left" ? "text-left" : ""}${
            align === "center" ? "text-center" : ""
          }${align === "right" ? "text-right" : ""}`}
        >
          {text}
        </p>
      )}
      {hasCard && orientation === "bottom" && (
        <div
          className={`w-[2px] h-4 bg-card-blue-light ${
            align === "left" ? "mx-2" : ""
          }${align === "center" ? "mx-auto" : ""}${
            align === "right" ? "mx-[120px]" : ""
          } my-2`}
        />
      )}
      {hasCard && (
        <>
          <div
            className={`${
              colour === "dark" ? "bg-card-blue" : "bg-card-blue-light"
            }  rounded-[5px] p-2 w-[130px] min-h-[136px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]`}
          >
            {image}
            <p className="text-sm text-center">{title}</p>
          </div>
        </>
      )}
      {hasCard && orientation === "top" && (
        <div
          className={`w-[2px] h-4 bg-card-blue-light ${
            align === "left" ? "mx-2" : ""
          }${align === "center" ? "mx-auto" : ""}${
            align === "right" ? "mx-[120px]" : ""
          } my-2`}
        />
      )}
    </div>
  );
}

export default Content;
