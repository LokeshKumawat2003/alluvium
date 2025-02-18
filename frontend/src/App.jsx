import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const url = "https://alluviumbackend-3.onrender.com/tasks"
  useEffect(() => {
    axios.get(url)
      .then(response => setTasks(response.data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  const addTask = (taskTitle) => {
    axios.post(url, { title: taskTitle })
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask("");
      })
      .catch(err => console.error("Error adding task:", err));
  };

  const updateTask = (id, updatedTitle) => {
    axios.put(`${url}/${id}`, { title: updatedTitle })
      .then(response => {
        const updatedTasks = tasks.map(task =>
          task._id === response.data._id ? response.data : task
        );
        setTasks(updatedTasks);
      })
      .catch(err => console.error("Error updating task:", err));
  };

  const deleteTask = (id) => {
    axios.delete(`${url}/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(err => console.error("Error deleting task:", err));
  };

  return (
    <div className="App">
      <p className="name-comp">Alluvium</p>
      <h1>Todo List</h1>

      <TaskForm newTask={newTask} setNewTask={setNewTask} onAdd={addTask} />

      <h2>Your Tasks</h2>
      <TaskList tasks={tasks} onEdit={updateTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
