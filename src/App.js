import React from "react";
import { useMachine } from "@xstate/react";
import todoMachine from "./todoMachine";
import TaskList from "./Components/TaskList/taskList";
import AddToDoModal from "./AddTodoModal";
import Header from "./Components/Header/Header";
import LayoutChooser from "./Components/Layouts/LayoutChooser";
import './App.css'

function App() {
  const [state, send] = useMachine(todoMachine);
  const handleShowModal = () => {send({type: "showModal"});}

  return (
    <LayoutChooser />
  );
}

export default App;
