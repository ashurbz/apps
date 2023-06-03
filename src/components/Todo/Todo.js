import React, { useState } from "react";
import List from "./List";
const Todo = () => {
  const [text, setText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handelOnChange = (e) => {
    setText(e.target.value);
  };

  const id = Math.floor(Math.random() * 999);

  const handleOnClick = () => {
    setTaskList([...taskList, { text: text, id: id }]);
    setText("");
  };

  const handleDeleteTodo = (id) => {
    const deletedItems = taskList.filter((task) => {
      if (id !== task.id) {
        return task;
      }
    });
    setTaskList(deletedItems);
  };

  return (
    <>
      <div className="w-full flex justify-center py-2">
        <input
          placeholder="Add a new Task..."
          className="border border-blue-900 p-1 m-2 w-96 items-center bg-gray-300 "
          type="text"
          value={text}
          onChange={(e) => {
            handelOnChange(e);
          }}
        />
        <button
          onClick={handleOnClick}
          className="border border-blue-700 w-20 bg-pink-500 text-white p-1  rounded-2xl m-2 shadow-2xl"
        >
          Add Task
        </button>
      </div>
      <div>
        <List deleteTodo={handleDeleteTodo} tasks={taskList} />
      </div>
    </>
  );
};

export default Todo;
