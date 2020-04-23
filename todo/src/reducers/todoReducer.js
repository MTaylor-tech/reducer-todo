export const initialTodos = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    item: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default function todoReducer (state, action) {
  let newTodos = [];
  switch (action.type) {
      case 'INITIAL_VALUES':
        return {...state, todos: initialTodos, visible: initialTodos};
      case 'ADD':
        newTodos = [...state.todos, {item:action.payload, completed: false, id: new Date()}];
        return {...state, todos: newTodos, visible: newTodos};
      case 'TOGGLE_COMPLETED':
        newTodos = state.todos.map(task=>{
              if (task.id===action.payload.taskId) {
                return {
                  ...task,
                  completed: action.payload.completed,
                  compDate: new Date(),
                };
              } else {
                return task;
              }});
        return {...state, todos: newTodos, visible: newTodos};
      case 'CLEAR_COMPLETED':
        newTodos = state.todos.filter(t=>t.completed===false);
        return {...state, todos: newTodos, visible: newTodos};
      case 'SET_DUE_DATE':
        newTodos = state.todos.map(task=>{
              if (task.id===action.payload.taskId) {
                return {
                  ...task,
                  dueDate: action.payload.dueDate
                };
              } else {
                return task;
              }});
        return {...state, todos: newTodos, visible: newTodos};
      case 'SEARCH':
        return {...state, visible: state.todos.filter(t=>t.item.toLowerCase().includes(action.payload.toLowerCase()))};
      default:
        return state;
    }
}
