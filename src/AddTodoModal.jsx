import React, { useEffect, useState } from "react";
import "./Modal.css";

function AddToDoModal({ state, send, showModal, setShowModal }) {
  const [text, setText] = useState("");

  const handleAddTask = (text) => {
    if (text.length === 0) return;
    if (!taskToBeEdited) send({ type: "addTask", text });
    else {
      send({ type: "updateTask", taskToBeEdited: { ...taskToBeEdited, text } });
    }
  };
  const handleText = (text) => {
    setText(text);
  };
  const taskToBeEdited = state.context.tasks.find(
    (taskInList) => taskInList?.id === state.context.task?.id
  );

  useEffect(() => {
    if (taskToBeEdited) {
      setText(taskToBeEdited.text);
    }
  }, [taskToBeEdited]);

  return (
    // <div>
    //   <div className="modal-header">
    //     {taskToBeEdited ? <p>Edit this task</p> : <p>Add a Task</p>}
    //   </div>
    //   <h1>ToDo List</h1>

    //   <input
    //     type="text"
    //     placeholder="Add a task..."
    //     onChange={(e) => handleText(e.target.value)}
    //     value={text}
    //   />
    //   <button onClick={() => handleAddTask(text)}>Submit</button>
    // </div>
    showModal && <div className="modal-bg">
      <div className="modal-centered">
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
                onClick={() =>{ handleAddTask(text);  setShowModal(false); setText('')}}
              >
                Update Task
              </button>
            ) : (
              <button
                type="button"
                className="add-button"
                onClick={() => {handleAddTask(text); setShowModal(false); setText('')}}
              >
                Add Task
              </button>
            )}

            <button type="button" className="cancel-button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToDoModal;
