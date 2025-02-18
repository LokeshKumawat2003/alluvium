
import React, { useState } from "react";

function TaskList({ tasks, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = (task) => {
    setEditMode(task._id);
    setNewTitle(task.title);
  };

  const handleSave = (id) => {
    if (newTitle) {
      onEdit(id, newTitle);
      setEditMode(null);
      setNewTitle("");
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          {editMode === task._id ? (
            <input 
              type="text" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)} 
            />
          ) : (
            <span>{task.title}</span>
          )}
          
          <div className="task-actions">
            {editMode === task._id ? (
              <button onClick={() => handleSave(task._id)} className="edit-btn">Save</button>
            ) : (
              <button onClick={() => handleEdit(task)} className="edit-btn">Edit</button>
            )}
            <button onClick={() => onDelete(task._id)} className="delete-btn">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
