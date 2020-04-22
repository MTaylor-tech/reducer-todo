import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';

const mockFunction = jest.fn();

const sampleTask = {
  item: 'Sample task',
  completed: false,
  id: 3892987589
};

test('renders without crashing', () => {
  render(<Todo task={sampleTask} />);
});

test('renders task text', () => {
  const { getByText } = render(<Todo task={sampleTask} />);
  const taskElement = getByText(/sample task/i);
  expect(taskElement).toBeInTheDocument();
});

test('renders uncompleted task correctly', () => {
  const { container, getByText } = render(<Todo task={sampleTask} />);
  const checkBoxElement = container.querySelector('input');
  expect(checkBoxElement.checked).toBeFalsy();
  const taskElement = getByText(/sample task/i);
  expect(taskElement.className).toBe('');
  expect(taskElement.className).not.toBe('strikeThru');
});

test('renders completed task correctly', () => {
  const { container, getByText } = render(<Todo task={{...sampleTask, completed: true}} />);
  const checkBoxElement = container.querySelector('input');
  expect(checkBoxElement.checked).toBeTruthy();
  const taskElement = getByText(/sample task/i);
  expect(taskElement.className).toBe('strikeThru');
});

test('calls props.markComplete fn when clicked', () => {
  const { container, getByText } = render(<Todo task={sampleTask} markComplete={mockFunction} />);
  const checkBoxElement = container.querySelector('input');
  const taskElement = getByText(/sample task/i);
  fireEvent.click(taskElement);
  expect(mockFunction.mock.calls.length).toBe(1);
  fireEvent.click(checkBoxElement);
  expect(mockFunction.mock.calls.length).toBe(2);
});
