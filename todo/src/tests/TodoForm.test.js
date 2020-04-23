import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

const mockDispatch = jest.fn();
const sampleTask = {item: 'Sample Task', completed: false, id: 1234}


test('renders without crashing', () => {
  render(<TodoForm dispatch={mockDispatch} />);
});

test('renders placeholder', () => {
  const { getByPlaceholderText } = render(<TodoForm dispatch={mockDispatch} />);
  const taskInput = getByPlaceholderText(/task/i);
  expect(taskInput).toBeInTheDocument();
});

test('renders buttons', ()=> {
  const { getByText } = render(<TodoForm dispatch={mockDispatch} />);
  const addButton = getByText(/add task/i);
  expect(addButton).toBeInTheDocument();
  const clearButton = getByText(/clear completed/i);
  expect(clearButton).toBeInTheDocument();
});

test('allows change to task input', ()=> {
  const { getByPlaceholderText } = render(<TodoForm dispatch={mockDispatch} />);
  const taskInput = getByPlaceholderText(/task/i);
  fireEvent.change(taskInput, {target: {value: sampleTask.item}});
  expect(taskInput.value).toBe(sampleTask.item);
});

test('pressing add button invokes ADD correctly', (done)=>{
  let text = "Search";
  const mockFunction = ({type, payload}) => {
    expect(payload).toBe(text);
    done();
  }
  const { getByPlaceholderText, getByText } = render(<TodoForm dispatch={mockFunction} />);
  const taskInput = getByPlaceholderText(/task/i);
  fireEvent.change(taskInput, {target: {value: sampleTask.item}});
  expect(taskInput.value).toBe(sampleTask.item);
  const addButton = getByText(/add task/i);
  text = sampleTask.item;
  fireEvent.click(addButton);
});

test('pressing clear button invokes CLEAR_COMPLETED correctly', ()=> {
  const { getByText } = render(<TodoForm dispatch={mockDispatch} />);
  const clearButton = getByText(/clear completed/i);
  fireEvent.click(clearButton);
  expect(mockDispatch.mock.calls.length).toBeGreaterThan(0);
});

//<TodoForm addTask={addTodo} clearCompleted={clearCompleted} />
