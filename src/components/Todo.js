import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <BiEdit onClick={() => editTodo(task.id)} />
        <BsTrash3Fill onClick={() => deleteTodo(task.id)} className="trash" />
      </div>
    </div>
  );
};

export default Todo;
