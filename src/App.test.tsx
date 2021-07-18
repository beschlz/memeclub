import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);
  const memeclubText = screen.getByText(/meme/i);

  expect(memeclubText).toBeInTheDocument();
});
