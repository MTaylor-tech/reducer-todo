import React, {useReducer, useState} from 'react';
import styled from 'styled-components';
import '../stylesheets/App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import todoReducer, {initialTodos} from '../reducers/todoReducer';


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
  const [state, dispatch] = useReducer(todoReducer, {todos: initialTodos});

  const addTodo = (newTodo) => {
    dispatch({type: 'ADD', payload: newTodo});
  };

  const markComplete = (taskId, completed) => {
    dispatch({type: 'TOGGLE_COMPLETED', payload: {taskId: taskId, completed:completed}});
  };

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'});
  };

  return (
    <MainDiv>
      <h1>Quick To-Do List</h1>
      <TodoForm addTask={addTodo} clearCompleted={clearCompleted} />
      <TodoList list={state.todos} markComplete={markComplete} />
    </MainDiv>
  );
}

export default App;
