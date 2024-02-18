import React from 'react';
import './TaskItem2.css'

function TaskItem({ task, send, actions }) {
    const handleToggleTask = () => send({ type: 'toggleTask', taskId: task.id });
    const handleDeleteTask = () => send({ type: 'deleteTask', taskId: task.id });
    const handleEditTask = () => send({ type: 'editTask', taskId: task.id });
    const handleShowModal = () => send({ type: 'showModal' })

    return (

        <div className="task2-item-div">

            <div className="task2-item-main-info">

                <div tabIndex="0">
                    {
                        !task.completed ? <h2 className="task-item-name">{task.text}</h2> : <h2 className="task-item-name done-task2-item-name"> <s>{task.text}</s></h2>
                    }

                </div>

                <div className="task2-item-action-div">
                    {
                        actions.map((action) => {
                            if (action === "delete")
                                return <div className="task2-item-action delete-action" onClick={handleDeleteTask} role="button" tabIndex="0">
                                    <p>Delete</p>
                                </div>

                            else if (action === 'edit')
                                return <div className="task2-item-action edit-action-2" onClick={() => { handleEditTask(); handleShowModal() }} role="button" tabIndex="0">
                                    <p>Edit</p>
                                </div>

                            else if (action === 'mark-as-done')
                                return <div className="task2-item-action edit-action-2" onClick={() => { handleToggleTask(); }} role="button" tabIndex="0">
                                    <p>{`Mark as  ${task.completed ? 'Undone' : 'Done'}`}</p>
                                </div>

                            return<></>
                        })
                    }

                </div>

            </div>
        </div>


    );
}

export default TaskItem;
