import React from "react";

type Props = {
  children: React.ReactNode;
  empty?: true | false;
  lastNode?: true | false;
};

function Node({ children, lastNode = false, empty = false }: Props) {
  return (
    <div
      className={`relative ${!empty && "rounded-full w-2 h-2 bg-teal mx-1"} ${
        lastNode && "-left-[80px]"
      } my-auto`}
    >
      {children}
    </div>
  );
}

export default Node;
