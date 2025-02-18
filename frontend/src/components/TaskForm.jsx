
import React from "react";

function TaskForm({ newTask, setNewTask, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAdd(newTask);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
