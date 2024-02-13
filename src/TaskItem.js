import React from 'react';

function TaskItem({ task, send }) {
  const handleToggleTask = () => send({type: 'toggleTask', taskId: task.id });
  const handleDeleteTask = () => send({ type: 'deleteTask', taskId: task.id });
  const handleEditTask = () => send({ type: 'editTask', taskId: task.id });

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleTask}
      />
      {task.text}
      <button onClick={handleDeleteTask}>Delete</button>
      <button onClick={handleEditTask}>Edit</button>
    </li>
  );
}

export default TaskItem;
