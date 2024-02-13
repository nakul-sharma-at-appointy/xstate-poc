import { createMachine, assign } from 'xstate';
import { v4 as uuidv4 } from 'uuid';
const todoMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBcD2ARVBBADjgdAJYB2hyhAhgDYDEFEEAKhbANYDaADALqKg6pYZQqmJ8QAD0QBGAOwAOfAGZZKztKUAmAJzTtAVgBsAGhABPREoAsm-J06Gd0zlaX6bSgL6fTaTLgISYWoaCDAqMGQwZjYuXiQQASFyUXEpBBtTCwRNQyt8RytpHTz5N305b18MbDx8CgBjcgA3MDoGGI4ecSThVIT0pQdlXU15K215TU1pK1kTc0RNWWl8eVlNJW0lQ30djX0qkD9agkaWtrQoKAjOuJ7BPrEBpe1ZEZXXeW1DbRmlLIyeb4fRvXZWb5zSFHE4BepNQitULhSLRFhdeL8R4pZ6gdI6d4rQzSfRGdRzSaAhDyVZaJzEtw-fSbbw+EDEVBheAJWF4B7JES4ySIAC0C2yYrs9nszhchiUzkqbN5gVI5Go-KeaUQ8oKVgcuWcsn0nB08ipO3y33k8kM404K1k2xhNTh50RYE1OO1CAVhjWSi2Py2CocewtG3wsxWWiKmlc80MrM8QA */
    id: 'toDoApp',
    initial: 'initial',
    states: {
      initial: {
        on: {
          addTask: {
            target: 'active',
            actions: assign({
                tasks: ({context, event}) => [...context.tasks, { id: uuidv4(), text: event.text, completed: false }],
            })
          },
          deleteTask: {
            actions: assign({
                tasks: ({context, event}) => context.tasks.filter((task) => task.id !== event.taskId),
            })
          }
        },
      },
      active: {
        on: {
          addTask: {
            actions: assign({
                tasks: ({context, event}) => [...context.tasks, { id: uuidv4(), text: event.text, completed: false }],
            })
      
          },
          editTask: {
            actions: assign({
                tasks: ({context, event}) => context.tasks.map((task) => task.id === event.taskId ? { ...task, isEdit: !task.isEdit } : task),
                task: ({context, event}) => context.tasks.find((task) =>
                  task.id === event.taskId),
            })
          },
          toggleTask: {
            actions: assign({
                tasks: ({context, event}) => context.tasks.map((task) =>
                  task.id === event.taskId ? { ...task, completed: !task.completed } : task
                ),
            }),
          },
          deleteTask: {
            actions: assign({
                tasks: ({context, event}) => context.tasks.filter((task) => task.id !== event.taskId),
            })
          },
          updateTask: {
            target: 'active',
            actions: assign({
                tasks: ({context, event}) => context.tasks.map((taskInList) => {
                    if (taskInList.id === event.taskToBeEdited?.id) {
                        return {...event.taskToBeEdited};
                    }
                    else {
                        return taskInList;
                    }
                }),
              task: () => {}
            })
        }
        },
      },
      edit: {
        on: {
            editTask: {
                target: 'active',
                actions: assign({
                    tasks: ({context, event}) => [...context.tasks, ...event.updatedTaskList],
                  task: () => {}
                })
            }
        }
      }
    },
    context: {
      tasks: [{
        id: uuidv4(),
        title: 'sample',
        completed: false,
        isEdit: false
      }],
      task: {}
    },

  });
  
  export default todoMachine;