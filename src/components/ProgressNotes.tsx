import { useReducer, useEffect } from "react";
import { notesReducer, NoteProps } from "../reducers/NotesReducer";
import loadNotes from "../api/LoadNotes";
import NoteCard from "./NoteCard";
import AddNoteForm from "./AddNoteForm";

export default function ProgressNotes() {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    loadNotes(dispatch);
  }, []);
  
  const renderOrderedNotes = (notes: NoteProps[]) => {
    const orderedByDate = (notes: NoteProps[]) => {
      return notes.sort((a, b) => {
        return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
      });
    };
    
    // this could be an ordered list html
    return (
      <div className="notes-list">
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
