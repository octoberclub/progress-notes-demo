import { useState } from "react";
import { NoteAction } from "../reducers/NotesReducer";

interface NotesFormProps {
  dispatch: React.Dispatch<NoteAction>;
}

export const NotesForm = ({ dispatch }: NotesFormProps) => {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'ADD_NOTE', payload: { text }});
    setText('');
  };

  return (
    <div className='addform'>
      <form onSubmit={handleSubmit}>
        <label>
          Add Patient Note
          <textarea aria-label="notes" value={text} onChange={handleChange} />
        </label>
        <input type="submit" aria-label="add" value="Add" />
      </form>
    </div>
  );
}

export default NotesForm;