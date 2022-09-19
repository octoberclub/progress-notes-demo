import { NoteAction } from "../reducers/NotesReducer";

const deleteNote = async (id: number, dispatch: React.Dispatch<NoteAction>) => {
    await fetch(`notes/${id}`, {
        method: "DELETE"
    });
    return dispatch({ type: 'DELETE_NOTE', payload: { id } });
};

export default deleteNote;
