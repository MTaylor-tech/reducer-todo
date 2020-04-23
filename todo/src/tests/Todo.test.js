import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';
import moment from 'moment';

const mockFunction = jest.fn();
const mockSaveDueDate = jest.fn();

const sampleTask = {
  item: 'Sample task',
  completed: false,
  id: 3892987589,
  dueDate: '2020-04-21'
};

test('renders without crashing', () => {
  render(<Todo task={sampleTask} saveDueDate={mockSaveDueDate}  />);
});

test('renders task text', () => {
  const { getByText } = render(<Todo task={sampleTask} saveDueDate={mockSaveDueDate} />);
  const taskElement = getByText(/sample task/i);
  expect(taskElement).toBeInTheDocument();
});

test('renders uncompleted task correctly', () => {
  const { container, getByText } = render(<Todo task={sampleTask} saveDueDate={mockSaveDueDate} />);
  const checkBoxElement = container.querySelector('input');
  expect(checkBoxElement.checked).toBeFalsy();
  const taskElement = getByText(/sample task/i);
  expect(taskElement.className).toBe('');
  expect(taskElement.className).not.toBe('strikeThru');
});

test('renders overdue task correctly', ()=> {
  const { getByTestId } = render(<Todo task={sampleTask} saveDueDate={mockSaveDueDate} />);
  const dueDateSpan = getByTestId('dueDateSpan');
  expect(dueDateSpan.textContent).toBe('Overdue! ');
  expect(dueDateSpan.textContent).not.toBe('Due date: ')
});

test('renders not overdue task correctly', ()=> {
  const { getByTestId } = render(<Todo task={{...sampleTask, dueDate:'9999-12-31'}} saveDueDate={mockSaveDueDate} />);
  const dueDateSpan = getByTestId('dueDateSpan');
  expect(dueDateSpan.textContent).not.toBe('Overdue! ');
  expect(dueDateSpan.textContent).toBe('Due date: ')
});

test('renders completed task correctly', () => {
  const { container, getByText, getByTestId } = render(<Todo task={{...sampleTask, completed: true, compDate:'2020-04-23T01:19:09.783Z'}} saveDueDate={mockSaveDueDate} />);
  const checkBoxElement = container.querySelector('input');
  expect(checkBoxElement.checked).toBeTruthy();
  const taskElement = getByText(/sample task/i);
  expect(taskElement.className).toBe('strikeThru');
  const completedSpan = getByTestId('completedSpan');
  expect(completedSpan.textContent).toBe('Completed: 04/22/2020 9:19 PM');
});

test('calls props.markComplete fn when clicked', () => {
  const { container, getByText } = render(<Todo task={sampleTask} markComplete={mockFunction} saveDueDate={mockSaveDueDate} />);
  const checkBoxElement = container.querySelector('input');
  const taskElement = getByText(/sample task/i);
  fireEvent.click(taskElement);
  expect(mockFunction.mock.calls.length).toBe(1);
  fireEvent.click(checkBoxElement);
  expect(mockFunction.mock.calls.length).toBe(2);
});
