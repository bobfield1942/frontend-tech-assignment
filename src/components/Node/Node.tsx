import React from "react";

type Props = {
  text: string;
  children: React.ReactNode;
};

function Node({ text, children }: Props) {
  return (
    <div>
      {text}
      <div>{children}</div>
    </div>
  );
}

export default Node;
