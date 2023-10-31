import React, { useState } from "react";
import "../App.css";

function AddTask({ onAddTask, showAddTask }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(true);
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setError(true);
      return;
    }
    onAddTask({ text, date, reminder });
    setError(false);
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form
      className={showAddTask ? "form slide-down" : "form slide-up"}
      onSubmit={onSubmit}
    >
      <div className={error ? "form-control error" : "form-control"}>
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <label
          style={{ display: error ? "block" : "none" }}
          className="error-text"
        >
          Please Add Text
        </label>
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="text"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="checkbox-control">
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
        <label>Reminder</label>
      </div>
      <button className="btn">Add Task</button>
    </form>
  );
}

export default AddTask;
