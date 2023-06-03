import React, { useState } from "react";

const EditTodo = () => {
  const [show, setShow] = useState(false);
  const handleShowEdit = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleShowEdit} className="text-3xl">
        ✍🏻
      </button>
      {show && (
        <div>
          <input />
          <button>Save Task</button>
        </div>
      )}
    </div>
  );
};

export default EditTodo;
