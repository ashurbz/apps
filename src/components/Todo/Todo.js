import React from "react";

const Todo = () => {
  return (
    <div className="w-full flex justify-center py-2">
      <input
        placeholder="Add a new Task..."
        className="border border-blue-900 p-1 m-2 w-96 items-center "
        type="text"
      />
      <button className="border border-blue-700 w-20 bg-pink-500 text-white p-1  rounded-2xl m-2 shadow-2xl">
        Add Task
      </button>
    </div>
  );
};

export default Todo;
