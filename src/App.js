import React from "react";
import { useMachine } from "@xstate/react";
import todoMachine from "./todoMachine";
import TaskList from "./Components/TaskList/taskList";
import AddToDoModal from "./AddTodoModal";
import Header from "./Components/Header/Header";
import './App.css'

function App() {
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
  );
}

export default App;
