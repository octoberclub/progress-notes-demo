
import { fireEvent, render, screen } from '@testing-library/react';

import { NoteAction, NoteProps } from "../reducers/NotesReducer";
import NoteCard from './NoteCard';

describe('Note Card', () => { 
  let note: NoteProps, mockDispatch: React.Dispatch<NoteAction>;
  beforeEach(()=>{
    note = {
      id: 1,
      createdAt: new Date(),
      author: "Michelle",
      authorType: "Clinician",
      text: 'initial text'
    };
  
    mockDispatch = jest.fn();
  })
  
  it('renders progress note', () => {
    render(<NoteCard note={note} dispatch={mockDispatch} />);

    const noteCard = screen.getByText(/initial text/i);
    expect(noteCard).toBeInTheDocument();
  });

  it('should show editable form when edit clicked', () => {
    render(<NoteCard note={note} dispatch={mockDispatch} />);

    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    expect(screen.queryAllByRole('textbox')).toHaveLength(1);
  });
});