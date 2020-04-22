import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../components/TodoList';

const initialTodos = [
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

test('renders without crashing', () => {
  render(<TodoList list={initialTodos} />);
});

test('renders todo items', () => {
  const { getByText } = render(<TodoList list={initialTodos} />);
  const firstTodo = getByText(/learn about reducers/i);
  expect(firstTodo).toBeInTheDocument();
  const secondTodo = getByText(/organize garage/i);
  expect(secondTodo).toBeInTheDocument();
  const thirdTodo = getByText(/bake cookies/i);
  expect(thirdTodo).toBeInTheDocument();
});
