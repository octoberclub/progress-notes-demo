import { useReducer } from "react";
import { notesReducer, NoteProps } from "../reducers/NotesReducer";
import NoteCard from "./NoteCard";
import AddNoteForm from "./AddNoteForm";


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

  const [notes, dispatch] = useReducer(notesReducer, initialState);
  
  const renderOrderedNotes = (notes: NoteProps[]) => {
    const orderedByDate = (notes: NoteProps[]) => {
      return notes.sort((a, b) => {
        return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
      });
    };

    // this could be an ordered list html element
    return (
      <div className="notesList">
        {orderedByDate(notes).map((note: NoteProps) => {
          return (
              <NoteCard key={note.id} note={note} dispatch={dispatch} />
          );
        })}
      </div>
    );
  };

  return (
    <>
      {renderOrderedNotes(notes)}
      <AddNoteForm dispatch={dispatch} />
    </>
  );
}
