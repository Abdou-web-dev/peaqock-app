import "antd/dist/antd.css"; //this import is essential in antd
import React, { useState } from "react";

const MemberShip = ({ text }) => {
  const [word, setText] = useState(text);
  return (
    <div className="">
      <span>MemberShip page</span> <br />
      <span>{word}</span>
      <button
        onClick={() => {
          setText("changed");
        }}
      >
        btn
      </button>
    </div>
  );
};

export default MemberShip;
