import React from 'react';
import { render, screen } from '@testing-library/react';
import './firebase';
import LoginScreen from './usecases/login/LoginScreen';

test('renders login page', () => {
  render(<LoginScreen />);
  const memeclubText = screen.getByText(/meme/i);

  expect(memeclubText).toBeInTheDocument();
});
