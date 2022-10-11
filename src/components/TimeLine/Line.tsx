import React from "react";
import Card from "../Card/Card";

type Props = {};

function Line({}: Props) {
  return (
    <div className="flex my-auto h-screen mx-20">
      <div
        id="line-start"
        className="rounded-full w-6 h-6 border-8 border-line-teal mx-1  my-auto"
      />
      <div className="bg-white flex-auto w-34 h-[2px] m-auto" />
      <div className="rounded-full w-4 h-4 bg-line-teal mx-1  my-auto">
        <Card position="top" title={"Baby's birth"} />
      </div>
      <div className="bg-white flex-auto w-34 h-[2px] m-auto" />
      <div className="rounded-full w-4 h-4 bg-line-teal mx-1  my-auto">
        <Card position="top" title={"Holiday"} />
      </div>
      <div className="bg-white  flex-auto w-64 h-[2px]  m-auto" />
      <div className="rounded-full w-4 h-4 bg-line-teal mx-1 my-auto">
        <Card position="bottom" title={"Holiday"} />
      </div>
      <div className="border border-t border-white border-dashed  flex-auto w-64 h-[1px]  m-auto" />
      <div className="rounded-full w-4 h-4 bg-line-teal mx-1  my-auto" />
      <svg
        className="h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Line;
