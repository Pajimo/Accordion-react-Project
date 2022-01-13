import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info }) => {
  const [change, setChange] = useState(true);

  if (change === false) {
    return (
      <>
        <div className="">
          <div onClick={() => setChange(!change)} className="btn">
            <AiOutlineMinus />
          </div>
          <p>{info}</p>
        </div>
      </>
    );
  }

  if (change === true) {
    return (
      <>
        <div onClick={() => setChange(!change)} className="btn">
          <AiOutlinePlus />
        </div>
      </>
    );
  }
};

export default Question;
