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
        return initialTodos;
      case 'NEW_TODO':
        return [...state, {item:action.payload.item, completed: false, id: new Date()}];
      case 'MARK_COMPLETED':
        return state.map(task=>{
              if (task.id===action.payload.taskId) {
                return {
                  item: task.item,
                  completed: action.payload.completed,
                  id: task.id
                };
              } else {
                return task;
              }});
      case 'CLEAR_COMPLETED':
        return state.filter(t=>!t.completed);
      default:
        return state;
    }
}
