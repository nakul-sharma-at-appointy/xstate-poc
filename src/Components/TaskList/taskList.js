import React from "react";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, send }) {

  const actions = ['delete', 'edit']

  return (
    <>
      {tasks?.length !== 0 ? (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              send={send}
              actions={actions}
            />
          ))}
        </ul>
      ) : (
        <div className="flex-column-center empty-tasklist-message-div">
          <h1>No tasks yet</h1>
          <p>Tasks you add will appear here</p>
        </div>
      )}
    </>
  );
}

export default TaskList;
