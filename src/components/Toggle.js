import React, { useState } from "react";

const Toggle = () => {
  //   const [show, setShow] = useState(false);
  const [on, setOn] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "On" : "Off"}
      </button>
      {/* {show ? (
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          On
        </button>
      ) : (
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Off
        </button>
      )} */}
    </div>
  );
};

export default Toggle;
