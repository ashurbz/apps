import React from "react";
const List = ({ tasks, deleteTodo }) => {
  const handleTodoDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            className=" flex justify-between p-3 border border-black m-2 bg-gray-300"
            key={task.id}
          >
            <ul>
              <li className="text-2xl">{task.text.toUpperCase()}</li>
            </ul>
            <button
              onClick={() => {
                handleTodoDelete(task.id);
              }}
            >
              ❌
            </button>
            {/* <DeleteTodo delTask={tasks} deleteTodo={deleteTodo} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default List;
