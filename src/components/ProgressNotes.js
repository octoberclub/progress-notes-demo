import { React, useState, useEffect } from "react";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default function ProgressNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes([
      {
        id: 1,
        createdAt: new Date(),
        author: "Michelle",
        authorType: "Clinician",
        text: "We ran out of time to successfully complete the first appointment so have booked in a follow up tomorrow afternoon.",
      },
    ]);
  }, []);

  const onAddNote = (note) => {
    const newNotes = [
      ...notes,
      {
        id: 2,
        createdAt: new Date(),
        author: "Michelle",
        authorType: "Clinician",
        text: note,
      },
    ];
    setNotes(newNotes);
  };

  return (
    <>
      
      <NotesList notes={notes} />
      <NotesForm onAddNote={onAddNote} />
    </>
  );
}
