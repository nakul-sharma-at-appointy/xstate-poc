import React from "react";
import TaskItem2 from "../TaskItem/TaskItem2";
import './TaskList2.css'

function TaskList2({ tasks, send }) {

  const actions = ['delete', 'edit']

  return (
    <>
      {tasks?.length !== 0 ? (
        <ul>
          {tasks.map((task) => (
            <TaskItem2
              key={task.id}
              task={task}
              send={send}
              actions={actions}
            />
          ))}
        </ul>
      ) : (
        <div className="flex-column-center empty-tasklist-message-div-2">
          <h1 className="empty-message-2">No tasks yet</h1>
          <p>Tasks you add will appear here</p>
        </div>

      )}
    </>
  );
}

export default TaskList2;
