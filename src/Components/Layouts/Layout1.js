import React from 'react'
import Header from '../Header/Header';
import AddToDoModal from '../../AddTodoModal';
import TaskList from '../TaskList/taskList';
import { useMachine } from '@xstate/react';
import todoMachine from '../../todoMachine';

function Layout1() {

  const [state, send] = useMachine(todoMachine);
  const handleShowModal = () => {send({type: "showModal"});}

  return (
    <div>
    <Header />
    <button type="button" onClick={handleShowModal} className="add-task-button">
      <p>Add a new task</p>  
    </button>
    <AddToDoModal state={state} send={send} />
    <TaskList tasks={state.context.tasks} send={send} />
  </div>
  )
}

export default Layout1