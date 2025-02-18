import React, { useState } from "react";

function Task({ task, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(task.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditingTitle(task.title);
  };

  const handleSave = () => {
    onEdit(task._id, editingTitle);
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <div>
          <input
            type="text"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{task.title}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default Task;
