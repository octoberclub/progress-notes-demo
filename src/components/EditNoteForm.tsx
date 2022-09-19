import { useState } from "react";
import { NoteAction, NoteProps } from "../reducers/NotesReducer";

interface EditNoteFormProps {
    note: NoteProps,
    dispatch: React.Dispatch<NoteAction>,
    onCloseForm: Function,
}

export const EditNoteForm = ({ note, dispatch, onCloseForm }: EditNoteFormProps) => {
  const [text, setText] = useState(note.text);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'EDIT_NOTE', payload: { id: note.id, text } });

    onCloseForm();
  };


  const handleAbort = () => {
    onCloseForm();
  };

  return (
    <div className='addForm'>
      <form onSubmit={handleSubmit}>
        <textarea aria-label="notes" value={text} onChange={handleChange} />
        <button aria-label="save" disabled={text===''}>
          Save
        </button>
        <button type="button" aria-label="cancel" onClick={handleAbort}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditNoteForm;