import { useState } from "react";
import { NoteAction } from "../reducers/NotesReducer";

interface AddNoteFormProps {
  dispatch: React.Dispatch<NoteAction>;
}

export const AddNoteForm = ({ dispatch }: AddNoteFormProps) => {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'ADD_NOTE', payload: { text } });
    setText('');
  };

  return (
    <div className='addform'>
      <form onSubmit={handleSubmit}>
        <textarea aria-label="notes" placeholder='Add patient note here' value={text} onChange={handleChange} />
        <button aria-label="add" disabled={text===''}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNoteForm;