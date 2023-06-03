import React, { useState } from "react";

const EditTodo = ({ editTodo, tasks }) => {
  const [show, setShow] = useState(false);
  const [editText, setEditText] = useState("");
  console.log(tasks);
  const handleOnChange = (e) => {
    setEditText(e.target.value);
  };

  const handleShowEdit = () => {
    setShow(!show);
  };

  const handleOnClick = () => {
    editTodo(tasks.id, editText);
    setShow(false);
  };

  return (
    <div>
      <button onClick={handleShowEdit} className="text-3xl">
        ✍🏻
      </button>
      {show && (
        <div>
          <input
            type="text"
            placeholder="Edit Task..."
            value={editText}
            onChange={handleOnChange}
          />
          <button onClick={handleOnClick}>Save Task</button>
        </div>
      )}
    </div>
  );
};

export default EditTodo;
