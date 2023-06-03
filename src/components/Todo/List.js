import React from "react";

const List = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            className="p-3 border border-black m-2 bg-gray-300"
            key={task.id}
          >
            <ul>
              <li className="text-2xl">{task.text.toUpperCase()}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default List;
