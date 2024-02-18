import React from 'react'
import Header from '../Header/Header';
import TaskForm1 from '../TaskForm/TaskForm1'
import TaskList from '../TaskList/taskList';

function Template1({state, send}) {

  const handleShowModal = () => {send({type: "showModal"});}

  return (
    <div>
    <Header heroText={'xState POC'} />
    <button type="button" onClick={handleShowModal} className="add-task-button">
      <p>Add a new task</p>  
    </button>
    <TaskForm1 state={state} send={send} />
    <TaskList tasks={state.context.tasks} send={send} />
  </div>
  )
}

export default Template1