import { createMachine, assign } from 'xstate';
import { v4 as uuidv4 } from 'uuid';

const todoMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBcD2ARVBBADjgdAJYB2hyhAhgDYDEsAFqgO4CyqE1A2gAwC6ioHKlhlCqYgJAAPRABYATABoQAT0Tzu8-ADYArNwCMAZgDs8gBxGD3WeYC+d5Wky4CJUdRr1CEMGw5UPPxIIEIi5OKSMgiyuvgmBiayRnrc2qZpRspqCNYm+Ka6Ctw22nq6iQ5OGNh4RKTknhQQEAAqFLAA1kGSYaKRIdEG5lrmAJzmCkbm3EbyySPZ6jP4s-JWKSYT2rZVIM61BBQAxuQAbmA0zW0d3Xy9wv0Sg4hGsTpGY-LaY9pJYyZdOYljFtFoFMNZD8-m95nsDq58CdzpdIGR2l0eiE+hFnqBoho4iYfvoTJpzEUASDZFD8OYTCMbLIxjTzAYxvCaojkYQLjQ0FAoFQwBi7sFBI9cVFXikdLEDN91roARYQZt8AZZAluGMjMqUpNOS46jy+b5hcgRbcsRLwmI8dIZdp8L9ZJrktwzOYZroQfIEnSzJ95Ar5GNhiYTEbDkjTrzLgxmP4uPdsZL7dKEEY3vFDJGGTNjAYQYlncriUlvTsfvJo9y43zvL5k4FU7anpns+Z8G6vtMDLo5sDVIg2QV5GGDD80gCdXW6mjkDQAK44DiW0U20Lpgb4xDDUYTKYzOYLJQjhBFLQDsNgrWfGa1xz7LkLiBkOiMVjsFPi7d23dHRiLQShKYwgWsKd5F0X0L1iZ1tHGDQTA2T0pnnAhFy8Hw-B-Vs-xxDMXhiIlEng+kGRZMZfjVbQDB7d0xhKYk7yjPZiHYOBJARPAHgAh1ogAWm0EFBLiaiJMkqSjAw+oPCoPiO2IvQXU0ajvm4IokkQtVNBdeZxl0RVtDWWTTTARSpWIvVnW4Nkjz+GtmRBXQwR0X5XOKUwvlkxdLKIvcEDJHR2QLdlwJQkwXNcl10i+WJmSMz4HAcIA */
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
                task: ({context, event}) => { console.log(context.tasks.find((task) =>
                  task.id === event.taskId)); return context.tasks.find((task) =>
                  task.id === event.taskId);}
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
        },
      },
      edit: {
        on: {
          editTask: {
            target: 'edit',
            actions: assign({
                tasks: ({context, event}) => context.tasks.map((task) => task.id === event.taskId ? { ...task, isEdit: !task.isEdit } : task),
                task: ({context, event}) => { console.log(context.tasks.find((task) =>
                  task.id === event.taskId)); return context.tasks.find((task) =>
                  task.id === event.taskId);}
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