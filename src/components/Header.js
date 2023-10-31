import "../App.css";

function Header({ toggleAddTask, showAddTask }) {
  return (
    <header className="header">
      <p className="title">Task Tracker</p>
      <button className="btn" onClick={toggleAddTask}>
        {showAddTask ? "Hide" : "Add"}
      </button>
    </header>
  );
}

export default Header;
