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
  switch (action.type) {
      case 'INITIAL_VALUES':
        return {...state, todos: initialTodos};
      case 'ADD':
        return {...state, todos: [...state.todos, {item:action.payload, completed: false, id: new Date()}]};
      case 'TOGGLE_COMPLETED':
        return {...state, todos: state.todos.map(task=>{
              if (task.id===action.payload.taskId) {
                return {
                  item: task.item,
                  completed: action.payload.completed,
                  id: task.id
                };
              } else {
                return task;
              }})};
      case 'CLEAR_COMPLETED':
        return {...state, todos: state.todos.filter(t=>t.completed===false)};
      default:
        return state;
    }
}