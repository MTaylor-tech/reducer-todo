import moment from 'moment';

export const initialTodos: Array<any> = [
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

export default function todoReducer(state: any, action: { type: string, payload?: any }): any {
  let newTodos: Array<any> = [];
  switch (action.type) {
    case 'INITIAL_VALUES':
      return { ...state, todos: initialTodos, visible: initialTodos };
    case 'ADD':
      newTodos = [...state.todos, { item: action.payload, completed: false, id: new Date() }];
      return { ...state, todos: newTodos, visible: newTodos };
    case 'TOGGLE_COMPLETED':
      newTodos = state.todos.map((task:any):any => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            completed: action.payload.completed,
            compDate: new Date(),
          };
        } else {
          return task;
        }
      });
      return { ...state, todos: newTodos, visible: newTodos };
    case 'CLEAR_COMPLETED':
      newTodos = state.todos.filter((t:any):any => t.completed === false);
      return { ...state, todos: newTodos, visible: newTodos };
    case 'SET_DUE_DATE':
      newTodos = state.todos.map((task:any):any => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            dueDate: action.payload.dueDate
          };
        } else {
          return task;
        }
});
      return { ...state, todos: newTodos, visible: newTodos };
    case 'SEARCH':
      return { ...state, visible: state.todos.filter((t:any):any=> t.item.toLowerCase().includes(action.payload.toLowerCase())) };
    case 'SORT_BY_TEXT':
      newTodos = state.todos.sort((a:any, b:any): Number => {
        const x = a.item.toLowerCase();
        const y = b.item.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
      if (action.payload.reverse) {
        newTodos.reverse();
      }
      return { ...state, visible: newTodos };
    case 'SORT_BY_DUE':
      newTodos = state.todos.sort((a:any, b:any):Number => {
        return moment(a.dueDate) - moment(b.dueDate);
      });
      if (action.payload.reverse) {
        newTodos.reverse();
      }
      return { ...state, visible: newTodos };
    case 'SORT_BY_STATUS':
      newTodos = state.todos.sort((a:any, b:any): Number => {
        if (a.completed && !b.completed) { return -1; }
        if (!a.completed && b.completed) { return 1; }
        if (a.completed && b.completed) { return a.compDate - b.compDate; }
        return 0;
      });
      if (action.payload.reverse) {
        newTodos.reverse();
      }
      return { ...state, visible: newTodos };
    default:
      return state;
  }
}
