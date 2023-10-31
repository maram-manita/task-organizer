import React from "react";
import Task from "./Task";

function Tasks({ tasks, deleteTask, toggleReminder }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(task.id)}
          toggleReminder={() => toggleReminder(task.id)}
        />
      ))}
    </div>
  );
}

export default Tasks;
