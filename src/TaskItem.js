import React from 'react';
import './TaskItem.css'

function TaskItem({ task, send, setShowModal }) {
  const handleToggleTask = () => send({type: 'toggleTask', taskId: task.id });
  const handleDeleteTask = () => send({ type: 'deleteTask', taskId: task.id });
  const handleEditTask = () => send({ type: 'editTask', taskId: task.id });

  return (

     <div className="task-item-div">

            <div className="task-item-main-info">

                <div role="button" tabIndex="0">
                    {
                        !task.completed ? <h2 className="task-item-name">{task.text}</h2> : <h2 className="task-item-name"> <s>{task.text}</s></h2>
                    }
                  
                </div>
                
                    <div className="task-item-action-div">

                        <div className="task-item-action delete-action" onClick={handleDeleteTask} role="button" tabIndex="0">
                            <p>Delete</p>
                        </div>

                        <div className="task-item-action edit-action" onClick={() => {handleEditTask(); setShowModal(true)}} role="button" tabIndex="0">
                            <p>Edit</p>
                        </div>

                        <div className="task-item-action edit-action" onClick={() => {handleToggleTask();}} role="button" tabIndex="0">
                            <p>{`Mark as  ${task.completed ? 'Undone' : 'Done'}`}</p>
                        </div>

                    </div>

             </div>
        </div>


  );
}

export default TaskItem;
