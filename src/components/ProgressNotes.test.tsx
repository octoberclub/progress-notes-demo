import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressNotes from './ProgressNotes';

describe('Progress Notes', () => { 
  it('renders progress notes', () => {
    render(<ProgressNotes />);
    const linkElement = screen.getByText(/We ran out of time/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders create notes form', () => {
    render(<ProgressNotes />);
    const linkElement = screen.getByText(/Add/i);
    expect(linkElement).toBeInTheDocument(); 
  });
});
