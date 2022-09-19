import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import deleteNote from "../api/DeleteNote";
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
    deleteNote(note.id, dispatch);
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

  const renderNoteInfo = (note: NoteProps) => {
    return (
      <div className="noteDate">
        <dl>
            <dt><span>Author: </span></dt>
            <dd><span>{note.author}</span></dd>
            <dt><span>Created At: </span></dt>
            <dd><span>{formattedDate(new Date(note.createdAt))}</span></dd>             
        </dl>        
        <br/>
      </div>
    )
  };

  return (
    <div className="card">
      {renderNoteInfo(note)}
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
