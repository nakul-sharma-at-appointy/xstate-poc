import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, send, showModal, setShowModal }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} send={send} setShowModal={setShowModal} />
      ))}
    </ul>
  );
}

export default TaskList;
