import React, { useState } from "react";

const Toggle = ({ onn, off }) => {
  //   const [show, setShow] = useState(false);
  const [on, setOn] = useState(false);

  return (
    <div>
      <h1 className="text-xl text-center font-bold">This is Toggle Button</h1>
      <button
        className="border border-blue-700 w-20 bg-pink-500 text-white p-2 rounded-2xl m-10 shadow-2xl"
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? onn : off}
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
