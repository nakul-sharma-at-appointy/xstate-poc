import React from 'react'
// import Header from '../Header/Header';
// import AddToDoModal from '../../AddTodoModal';
// import TaskList from '../TaskList/taskList';
import Header2 from '../Header/Header2';
import TaskForm2 from '../TaskForm/TaskForm2';
import TaskList2 from '../TaskList/TaskList2';

function Template3({state, send}) {

  const handleShowModal = () => {send({type: "showModal"});}

  return (
    <div>
    <Header2  heroText={'xState POC 3'}  />
    <button type="button" onClick={handleShowModal} className="add-task-button-2">
      <p>Add a new task</p>  
    </button>
    {/* <AddToDoModal state={state} send={send} /> */}
    <TaskList2 tasks={state.context.tasks} send={send} />
    <TaskForm2 state={state} send={send} />
  </div>
  )
}

export default Template3