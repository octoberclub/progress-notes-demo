import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { NoteAction, NoteProps } from "../reducers/NotesReducer";
import EditNoteForm from "./EditNoteForm";

interface NoteCardProps {
  note: NoteProps,
  dispatch: React.Dispatch<NoteAction>,
}

export default function NoteCard({ note, dispatch }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const formattedDate = (date: Date) => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  
  const handleDeleteClick = () => {
    dispatch({ type: 'DELETE_NOTE', payload: { id: note.id } });
  }

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const onCloseForm = () => {    
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="card">
        <EditNoteForm note={note} dispatch={dispatch} onCloseForm={onCloseForm}/>
      </div>
    )
  }
  
  return (
    <div className="card">
      <div className="noteDate">{formattedDate(note.createdAt)}</div>
      <div className="note">{note.text}</div>
      <div className="noteTools">
        <button onClick={(handleEditClick)} aria-label='edit'>
          <FaEdit />
        </button>    
        <button onClick={handleDeleteClick} aria-label='delete'>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
