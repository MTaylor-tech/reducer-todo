import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/quick to-do list/i);
  expect(titleElement).toBeInTheDocument();
});
