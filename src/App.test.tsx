import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders progress notes title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Progress Notes/i);
  expect(linkElement).toBeInTheDocument();
});
