import React, {useReducer, useEffect} from 'react';
import '../stylesheets/App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import todoReducer, {initialTodos} from '../reducers/todoReducer.tsx';
import useLocalStorage from '../hooks/useLocalStorage.tsx';

function App () {
  const [todos, setTodos] = useLocalStorage("myVeryAwesomeTodos",initialTodos);
  const [state, dispatch] = useReducer(todoReducer, {todos: todos, visible: todos});

  useEffect(()=>{
    setTodos(state.todos);
  },[state, setTodos]);

  return (
    <div className="main-div">
      <h1 className="main-h1">Quick To-Do List</h1>
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
