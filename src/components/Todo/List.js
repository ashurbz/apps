import React from "react";
import EditTodo from "./EditTodo";
const List = ({ tasks, deleteTodo, editTodo, id }) => {
  const handleTodoDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div
            className=" flex justify-between p-3 border border-black m-2 bg-gray-300"
            key={task.id}
          >
            <div>
              <ul>
                <li className="text-2xl">{task.text}</li>
              </ul>
            </div>
            <div className="flex">
              <button
                className="text-2xl mx-10"
                onClick={() => {
                  handleTodoDelete(task.id);
                }}
              >
                ❌
              </button>

              <EditTodo tasks={tasks} editTodo={editTodo} id={id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
