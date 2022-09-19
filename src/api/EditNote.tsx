import { NoteAction, NoteProps } from "../reducers/NotesReducer";

const editNote = async (note: NoteProps, text: string, dispatch: React.Dispatch<NoteAction>) => {
    await fetch(`notes/${note.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ ...note, text })
    });
    return dispatch({ type: "EDIT_NOTE", payload: { note, text }});
};

export default editNote;