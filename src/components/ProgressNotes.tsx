import { useReducer } from "react";
import { noteReducer, NoteProps } from "../reducers/NotesReducer";
import Note from "./Note";
import NotesForm from "./NotesForm";


export default function ProgressNotes() {
  const initialState = [
    {
      id: 1,
      createdAt: new Date(),
      author: "Michelle",
      authorType: "Clinician",
      text: "We ran out of time to successfully complete the first appointment so have booked in a follow up tomorrow afternoon.",
    },
  ];

  const [notes, dispatch] = useReducer(noteReducer, initialState);
  
  const renderOrderedNotes = (notes: NoteProps[]) => {
    const orderedByDate = (notes: NoteProps[]) => {
      return notes.sort((a, b) => {
        return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
      });
    };

    return orderedByDate(notes).map((note: NoteProps) => <Note key={note.id} note={note} />);
  }

  return (
    <>
      {renderOrderedNotes(notes)}
      <NotesForm dispatch={dispatch} />
    </>
  );
}
