import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="what is the task today?"
        className="todo-input"
        onChange={(e) => setvalue(e.target.value)}
      />
      <button type=" submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
