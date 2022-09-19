import { NoteAction } from "../reducers/NotesReducer";

const newNote = (text: string): any => {
  return {
    createdAt: new Date(),
    author: "Michelle",
    authorType: "Clinician",
    text,
  };
};

const addNote = async (text: string, dispatch: React.Dispatch<NoteAction>) => {
  const note = newNote(text);

  const response = await fetch("notes/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(note),
  });
  const data = await response.json();

  return dispatch({
    type: "ADD_NOTE",
    payload: { note: { ...note, id: data.id } },
  });
};

export default addNote;
