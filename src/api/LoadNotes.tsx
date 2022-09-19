import { NoteAction } from "../reducers/NotesReducer";

const loadNotes = async (dispatch: React.Dispatch<NoteAction>) => {
    const response = await fetch('notes/');
    const data = await response.json();
    dispatch({ type: "LOAD_NOTES", payload: { notes: data } });
};

export default loadNotes;