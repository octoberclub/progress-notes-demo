import { render, screen, fireEvent } from '@testing-library/react';
import AddNoteForm from './AddNoteForm';

describe('AddNoteForm', () => {
    it('should be blank text by default', () => {
        const mockDispatch = jest.fn();

        render(<AddNoteForm dispatch={mockDispatch} />);

        const input = screen.getByRole('textbox');
        expect(input.textContent).toBe('');
    });

    it('should disable add button when empty text', () => {
        const mockDispatch = jest.fn();

        render(<AddNoteForm dispatch={mockDispatch} />);

        const button = screen.getByRole('button', { name: /add/i});
        expect(button).toHaveAttribute('disabled');
    });

    it('should enable add button when not empty text', () => {
        const mockDispatch = jest.fn();

        render(<AddNoteForm dispatch={mockDispatch} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 123 } });
        expect(input.textContent).toBe('123');

        const button = screen.getByRole('button', { name: /add/i});
        expect(button).not.toHaveAttribute('disabled');
    });
});