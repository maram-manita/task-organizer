import React from "react";
import "../App.css";
import { FaTimes } from "react-icons/fa";

function Task({ task, deleteTask, toggleReminder }) {
  return (
    <div
      className={task.reminder === true ? "task reminder" : "task"}
      onDoubleClick={toggleReminder}
    >
      <span>
        <p className="task-text">{task.text}</p>
        <p className="task-date">{task.date}</p>
      </span>
      <FaTimes onClick={deleteTask} />
    </div>
  );
}

export default Task;
