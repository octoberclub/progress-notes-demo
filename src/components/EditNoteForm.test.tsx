import { render, screen, fireEvent } from '@testing-library/react';

import { NoteAction, NoteProps } from "../reducers/NotesReducer";
import EditNoteForm from './EditNoteForm';

describe('EditNoteForm', () => {
    let note: NoteProps, mockDispatch: React.Dispatch<NoteAction>, mockOnCloseForm: Function;
    beforeEach(()=>{
      note = {
        id: 1,
        createdAt: new Date(),
        author: "Michelle",
        authorType: "Clinician",
        text: 'initial text'
      };
    
      mockDispatch = jest.fn();
      mockOnCloseForm = jest.fn();
    })

    it('should be initital note text by default', () => {
        render(<EditNoteForm dispatch={mockDispatch} note={note} onCloseForm={mockOnCloseForm} />);

        const input = screen.getByRole('textbox');
        expect(input.textContent).toBe('initial text');
    });

    it('should disable save button when empty text', () => {
        const emptyNote = {
          id: 1,
          createdAt: new Date(),
          author: "Michelle",
          authorType: "Clinician",
          text: '',
        };

        render(<EditNoteForm dispatch={mockDispatch} note={emptyNote} onCloseForm={mockOnCloseForm} />);

        const button = screen.getByRole('button', { name: /save/i});
        expect(button).toHaveAttribute('disabled');
    });

    it('should enable save button when not empty text', () => {
        note = {
          id: 1,
          createdAt: new Date(),
          author: "Michelle",
          authorType: "Clinician",
          text: 'initial text'
        };

        render(<EditNoteForm dispatch={mockDispatch} note={note} onCloseForm={mockOnCloseForm} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 123 } });
        expect(input.textContent).toBe('123');

        const button = screen.getByRole('button', { name: /save/i});
        expect(button).not.toHaveAttribute('disabled');
    });
});