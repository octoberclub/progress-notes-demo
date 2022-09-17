import React from "react";
import Note from "./Note";

export default function NotesList({ notes }) {
  const orderedByDate = (notes) => {
    return notes.sort((a, b) => {
      return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
    });
  };

  return orderedByDate(notes).map((note) => <Note key={note.id} note={note} />);
}
