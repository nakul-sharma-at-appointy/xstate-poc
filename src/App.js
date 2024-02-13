import React, { useEffect, useState } from "react";
import { useMachine } from "@xstate/react";
import todoMachine from "./todoMachine";
import TaskList from "./taskList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [state, send] = useMachine(todoMachine);
  const [text, setText] = useState("");

  const handleAddTask = (text) => {
    if (text.length === 0) return;
    if (!taskToBeEdited) send({ type: "addTask", text });
    else {
      send({ type: "updateTask", taskToBeEdited: {...taskToBeEdited,text} });
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
    <div>
      <div className="modal-header">
        {taskToBeEdited ? <p>Edit this task</p> : <p>Add a Task</p>}
      </div>
      <h1>ToDo List</h1>

      <input
        type="text"
        placeholder="Add a task..."
        onChange={(e) => handleText(e.target.value)}
        value={text}
      />
      <button onClick={() => handleAddTask(text)}>Submit</button>
      <TaskList tasks={state.context.tasks} send={send} />
    </div>
  );
}

export default App;
