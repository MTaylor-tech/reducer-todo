import React, {useReducer, useEffect} from 'react';
import styled from 'styled-components';
import '../stylesheets/App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import todoReducer, {initialTodos} from '../reducers/todoReducer';
import useLocalStorage from '../hooks/useLocalStorage';


const MainDiv = styled.div`
  height: 100vh;
  width: 90vw;
  padding: 5%;
  background-color: black;
  color: white;

  h1 {
    font-size: 3.6rem;
  }
`;

function App () {
  const [todos, setTodos] = useLocalStorage("myVeryAwesomeTodos",initialTodos);
  const [state, dispatch] = useReducer(todoReducer, {todos: todos, visible: todos});

  useEffect(()=>{
    setTodos(state.todos);
  },[state, setTodos]);

  return (
    <MainDiv>
      <h1>Quick To-Do List</h1>
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </MainDiv>
  );
}

export default App;
