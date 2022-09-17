
import { render, screen, fireEvent } from '@testing-library/react';
import NoteCard from './NoteCard';

describe('Note Card', () => { 
  it('renders progress notes', () => {
    const note = {
      id: 1,
      createdAt: new Date(),
      author: "Michelle",
      authorType: "Clinician",
      text: 'initial text'
    };


    render(<NoteCard note={note} />);
    const noteCard = screen.getByText(/initial text/i);
    expect(noteCard).toBeInTheDocument();
  });
});