import React, { useEffect, useState } from "react";
import "./TaskForm2.css";

function TaskForm2({ state, send}) {
  const [text, setText] = useState('');

  const handleAddTask = (text) => {
    if (text.length === 0) return;
    if (!taskToBeEdited) send({ type: "addTask", text }, send({type: "hideModal"}));
    else {
      send({ type: "updateTask", taskToBeEdited: { ...taskToBeEdited, text } }, send ({type: "hideModal"}));
    }
  };
  const handleText = (text) => {
    setText(text);
  };
  const taskToBeEdited = state.context.tasks.find(
    (taskInList) => taskInList?.id === state.context.task?.id
  );

  const handleModalHide = () => {
    send ({type: "hideModal"})
  }

  useEffect(() => {
    if (taskToBeEdited) {
      setText(taskToBeEdited.text);
    }
  }, [taskToBeEdited]);

  return (
    state.context.showModal && 
<div className="task-form">
      <div className="task-input-container">
        <div className="modal">
          <div className="modal-header">
            {taskToBeEdited ? <p>Edit this task</p> : <p>Add a Task</p>}
          </div>

          <div className="task-input-container">
            <p className="task-input-title">Title:</p>

            <input
              type="text"
              placeholder="Enter title"
              value={text}
              onChange={(e) => handleText(e.target.value)}
            />

            {text.length === 0 ? (
              <p className="subtask-length-overflow">
                * Title should not be empty
              </p>
            ) : null}
          </div>

          <div className="modal-actions">
            {taskToBeEdited ? (
              <button
                type="button"
                className="add-button"
                onClick={() =>{ handleAddTask(text); setText('')}}
              >
                Update Task
              </button>
            ) : (
              <button
                type="button"
                className="add-button"
                onClick={() => {handleAddTask(text); setText('')}}
              >
                Add Task
              </button>
            )}

            <button type="button" className="cancel-button" onClick={() =>{ handleModalHide(); setText('')}}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm2;
