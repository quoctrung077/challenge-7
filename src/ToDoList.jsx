import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Eat lunch",
    "Eat dinner",
  ]);
  const [newTask, setNewTask] = useState("");

  function handlenputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleMoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function handleMoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div className="">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handlenputChange}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => handleMoveTaskUp(index)}
            >
              Up
            </button>
            <button
              className="move-button"
              onClick={() => handleMoveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
