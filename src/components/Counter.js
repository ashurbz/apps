import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3 className="text-xl text-center font-bold">This is counter</h3>
      <button
        className="border border-blue-700 w-20 bg-pink-500 text-white p-2 rounded-2xl m-10 shadow-2xl text-5xl"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <span className="text-5xl ">{counter}</span>
      <button
        className="border border-blue-700 w-20 bg-pink-500 text-white p-2 rounded-2xl m-10 shadow-2xl text-5xl"
        onClick={() => {
          setCounter(counter - 1);
          if (counter <= 0) {
            setCounter(0);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
