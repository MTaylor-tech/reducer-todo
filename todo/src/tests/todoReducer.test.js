import React from 'react';
import { render } from '@testing-library/react';
import todoReducer, {initialTodos} from '../reducers/todoReducer';

const sampleTask = {item: 'Sample Task', completed: false, id: 1234}
const initialState0 = {todos: [...initialTodos, sampleTask], visible: [...initialTodos, sampleTask]};
const initialState1 = {todos: initialTodos, visible: initialTodos};
const completedTestingTodos: Array<{item:string,completed:boolean,id:Number,compDate?:any}> = [
  {
    item: 'Learn about reducers',
    completed: true,
    id: 3892987589,
    compDate: new Date()
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
const completedTestingState: any = {todos: completedTestingTodos, visible: completedTestingTodos};
const clearedTestingTodos: Array<{item:string,completed:boolean,id:Number,compDate?:any}> = [
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
const clearedTestingState: any = {todos: clearedTestingTodos, visible: clearedTestingTodos};

test('returns initial values in INITIAL_VALUES call', () => {
  const newState = todoReducer(initialState0, {type: 'INITIAL_VALUES'});
  expect(newState).not.toEqual(initialState0);
  expect(newState).toEqual(initialState1);
});

test('adds item on ADD call', ()=> {
  const newState = todoReducer(initialState1, {type: 'ADD', payload: sampleTask.item});
  expect(newState).not.toEqual(initialState0);
  expect(newState).not.toEqual(initialState1);
  expect(newState.todos.filter(t=>t.item===sampleTask.item)).toBeDefined();
});

test('CLEAR_COMPLETED works as promised', ()=> {
  const newState = todoReducer(completedTestingState, {type: 'CLEAR_COMPLETED'});
  expect(newState).toEqual(clearedTestingState);
});

test('Returns state on nonsense call', ()=> {
  const newState = todoReducer(initialState1, {type: 'POW'});
  expect(newState).toEqual(initialState1);
});
