import { render, screen, fireEvent } from '@testing-library/react';
import ProgressNotes from './ProgressNotes';

describe('Progress Notes', () => { 
  it('renders progress notes', () => {
    render(<ProgressNotes />);
    const linkElement = screen.getByText(/We ran out of time/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders create notes form', () => {
    render(<ProgressNotes />);
    const linkElement = screen.getByText(/Add Patient Note/i);
    expect(linkElement).toBeInTheDocument(); 
  });

  it('adds note', () => {
    render(<ProgressNotes />); 

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 123 } });
    expect(input.textContent).toBe('123');


    const addButton = screen.getByRole('button', { name: /add/i });
    fireEvent.click(addButton);

    expect(input.textContent).toBe('');
    expect(screen.getByText(/123/i)).toBeInTheDocument();
  });

  it('deletes note', () => {
    render(<ProgressNotes />); 

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/We ran out of time/i)).not.toBeInTheDocument();
  });
});
