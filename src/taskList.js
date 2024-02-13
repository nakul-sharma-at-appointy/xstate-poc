import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, send }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} send={send} />
      ))}
    </ul>
  );
}

export default TaskList;
