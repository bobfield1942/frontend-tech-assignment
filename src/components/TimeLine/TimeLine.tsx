import React from "react";

import Node from "../Node/Node";
import family from "../images/family.svg";
import debt from "../images/debt.svg";
import emfund from "../images/emfund.svg";
import holiday from "../images/holiday.svg";
import home from "../images/home.svg";
import vision from "../images/vision.svg";

import Content from "../Content/Content";

type Props = {};

function TimeLine({}: Props) {
  return (
    <div className="flex my-auto h-screen mx-20">
      <Node empty={true}>
        <div
          id="start-node"
          className="rounded-full w-5 h-5 border-5 border-teal mx-1  my-auto"
        ></div>
        <Content orientation="bottom" hasCard={false} text={"You are here"} />
      </Node>
      <div className="bg-white flex-auto w-6 h-[2px] m-auto" />
      <Node>
        <Content
          orientation="top"
          title={"Baby's Birth"}
          image={<img className="my-[8px]" src={family} alt="Family" />}
        />
        <Content
          orientation="bottom"
          title={"New Home"}
          text={"In 1 year and 2"}
          image={<img className="my-[8px]" src={home} alt="Home" />}
        />
      </Node>
      <div className="bg-white flex-auto w-16 h-[2px] m-auto" />
      <Node>
        <Content
          orientation="top"
          title={"Holiday"}
          image={<img className="my-[8px]" src={holiday} alt="Holiday" />}
        />
        <Content
          orientation="bottom"
          hasCard={false}
          text={"In 3 years and 2 months"}
        />
      </Node>
      <div className="bg-white  flex-auto w-16 h-[2px]  m-auto" />
      <Node>
        <Content
          orientation="bottom"
          title={"Emergency Fund"}
          text={"In 4 years and 9 months"}
          image={<img className="my-[8px]" src={emfund} alt="Emergency Fund" />}
        />
      </Node>
      <div className="bg-white  flex-auto w-32 h-[2px]  m-auto" />
      <Node>
        <Content
          orientation="bottom"
          title={"Debt Free"}
          text={"In 8 years and 11 months"}
          image={<img className="my-[8px]" src={debt} alt="Debt Free" />}
        />
      </Node>
      <div className="border border-t border-white border-dashed  flex-auto w-10 h-[1px]  m-auto" />
      <Node empty={true}>
        <Content
          orientation="top"
          title={"Retire"}
          image={<img className="my-[8px]" src={family} alt="Family" />}
        />
      </Node>
      <div className="border border-t border-white border-dashed  flex-auto w-10 h-[1px]  m-auto" />
      <svg
        className="w-5 h-5 m-auto"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
      >
        <g>
          <path
            fill="#FFFFFF"
            d="M276.9,990c-10.8,0-21.6-4.2-29.8-12.5c-16.1-16.4-15.9-42.8,0.6-59L668,506L243.2,81.2c-16.3-16.3-16.3-42.7,0-59c16.3-16.3,42.7-16.3,59,0l454.6,454.6c7.9,7.9,12.3,18.6,12.2,29.7c-0.1,11.1-4.5,21.8-12.5,29.6l-450.4,442C298,986,287.4,990,276.9,990z"
          />
        </g>
      </svg>
      <Node empty={true} lastNode={true}>
        <Content
          colour="light"
          orientation="bottom"
          title={"Make a contribution to my community through philantrophy"}
          text={"Ultimately"}
          align="right"
          image={<img className="my-[8px]" src={vision} alt="Vision" />}
        />
      </Node>
    </div>
  );
}

export default TimeLine;
