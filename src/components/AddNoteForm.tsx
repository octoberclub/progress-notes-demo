import { useContext, useState } from "react";
import { NoteAction } from "../reducers/NotesReducer";
import UserContext from '../UserContext';
import addNote from "../api/AddNote";

interface AddNoteFormProps {
  dispatch: React.Dispatch<NoteAction>;
}

export const AddNoteForm = ({ dispatch }: AddNoteFormProps) => {
  const [text, setText] = useState('');
  const { user } = useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    addNote(text, user, dispatch);

    setText('');
  };

  return (
    <div className='form-add'>
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