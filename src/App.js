import React, {useState} from "react";
import { useMachine } from "@xstate/react";
import todoMachine from "./todoMachine";
import TaskList from "./taskList";
import AddToDoModal from "./AddTodoModal";
import Header from "./Header";
import './App.css'

function App() {
  const [state, send] = useMachine(todoMachine);
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {send({type: "showModal"}); console.log(state.context.showModal)}


  return (
    <div>
      <Header />
      <button type="button" onClick={handleShowModal} className="add-task-button">
            <p>Add a new task</p>  
          </button>
      <AddToDoModal state={state} send={send} showModal={showModal} setShowModal={setShowModal} />
      <TaskList tasks={state.context.tasks} send={send} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
