import { createMachine, assign } from 'xstate';
import { v4 as uuidv4 } from 'uuid';

const todoMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBcD2ARVBBADjgdAJYB2hyhAhgDYDEFEEAKhbANYDaADALqKg6pYZQqmJ8QAD0QBGAOwAOfAGZZKztKUAmAJzTtAVgBsAGhABPREoAsm-J06Gd0zlaX6bSgL6fTaTLgIKAGNyADcwOgZmNi5eJBABIXJRcSkEJQdlXU15K215TU1pK1kTc0RNWWl8eVlNJW0lQ30mjX1vXwxsPHxgsIjIMmiOHnFE4RT4i3S6-GKqrStpTVdSsrT9DXx8laUleUbnZo6QP27AkMJwmjQoKCowYdixwQmxeLSdWSyq1wPDbRFJSmaZyQz4fTaUruA4lWEnM4BXqXa4QMAPZCPFgjOL8V7Jd6gT5Q-BVQzSfRGdQlfIgxDyapaJzktzaZr1BFdJGDZA0ACuOAgFExT1G8XGBNSMnkSnwzXk8k2jjcbmkZWmVjy+CsLjqitc7g5J2IqDR8HiiLwLySIkJkkQAForPI6QgHeD7J6WppNmzDIZOO0fKcuT0SMJqNa3lKEIZZYYdY5yZxZPpODoXeV0gmavl5IZcim5I1Of4en0rmAo5KPpY1TU9to2Q0lEcWq6VLZ5hoVstVv7S+d8Dzq7aY5xXZTwQcFQWdVVZCXvJ4gA */
    id: 'toDoApp',
    initial: 'initial',
    states: {
      initial: {
        on: {
          showModal: {
            actions: assign({
                showModal: ({context}) => context.showModal = true
            })
          },
          hideModal: {
            actions: assign({
                showModal: ({context}) =>  context.showModal = false
            })
          },
          addTask: {
            target: 'active',
            actions: assign({
                tasks: ({context, event}) => [...context.tasks, { id: uuidv4(), text: event.text, completed: false }],
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
            target: 'edit',
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
          showModal: {
            actions: assign({
                showModal: ({context}) => context.showModal = true
            })
          },
          hideModal: {
            actions: assign({
                showModal: ({context}) =>  context.showModal = false
            })
          },
        //   updateTask: {
        //     target: 'active',
        //     actions: assign({
        //         tasks: ({context, event}) => context.tasks.map((taskInList) => {
        //             if (taskInList.id === event.taskToBeEdited?.id) {
        //                 return {...event.taskToBeEdited};
        //             }
        //             else {
        //                 return taskInList;
        //             }
        //         }),
        //       task: () => {}
        //     })
        // }
        },
      },
      edit: {
        on: {
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
            },
            showModal: {
                actions: assign({
                    showModal: ({context}) => context.showModal = true
                })
              },
              hideModal: {
                actions: assign({
                    showModal: ({context}) =>  context.showModal = false
                })
            },
        }
      }
    },
    context: {
      tasks: [],
      task: {},
      showModal: false
    },

  });
  
  export default todoMachine;