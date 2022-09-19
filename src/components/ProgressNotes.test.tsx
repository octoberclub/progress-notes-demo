import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProgressNotes from './ProgressNotes';

describe('Progress Notes', () => { 
  it('renders progress notes', async () => {
    render(<ProgressNotes />);
    await screen.findByText(/We ran out of time/i);
  });

  it('renders create notes form', () => {
    render(<ProgressNotes />);
    const linkElement = screen.getByText(/Add/i);
    expect(linkElement).toBeInTheDocument(); 
  });

  it('adds note', async () => {
    render(<ProgressNotes />); 
    await screen.findByText(/We ran out of time/i); 

    
    const input = screen.getByRole('textbox');
    await fireEvent.change(input, { target: { value: 123 } });
    expect(input.textContent).toBe('123');
    
    const addButton = screen.getByRole('button', { name: /add/i });
    await fireEvent.click(addButton);

    expect(input.textContent).toBe('');
    await screen.findByText(/123/i);
  });

  it('deletes note', async () => {
    render(<ProgressNotes />); 
    await screen.findByText(/We ran out of time/i);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    await fireEvent.click(deleteButton);
    
    await waitFor(() => expect(screen.queryByText(/We ran out of time/i)).not.toBeInTheDocument());
  });
});
