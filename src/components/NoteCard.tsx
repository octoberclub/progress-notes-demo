import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import classNames from 'classnames';
import deleteNote from "../api/DeleteNote";
import { NoteAction, NoteProps } from "../reducers/NotesReducer";
import EditNoteForm from "./EditNoteForm";

interface NoteCardProps {
  note: NoteProps,
  dispatch: React.Dispatch<NoteAction>,
}

export default function NoteCard({ note, dispatch }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const canEdit = note.authorType!=="System";
  const formattedDate = (date: Date) => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  
  const handleDeleteClick = () => {
    deleteNote(note.id, dispatch);
  }

  const handleEditClick = () => {
    setIsEditing(canEdit);
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
      <div className="note-info">
        <dl>
            <dt><span>Author: </span></dt>
            <dd><span>{note.author}</span></dd>
            <dt><span>Created At: </span></dt>
            <dd><span>{formattedDate(new Date(note.createdAt))}</span></dd>             
        </dl>        
        {/* <br/> */}
      </div>
    )
  };

  const noteClass = classNames({
    card: true,
    'card-note-system': note.authorType==='System',
    'card-note-clinician':note.authorType==='Clinician', 
  });

  return (
    <div className="card">
      {renderNoteInfo(note)}
      {canEdit && (
        <div className="note-tools">
          <button onClick={(handleEditClick)} aria-label='edit'>
            <FaEdit />
          </button>    
          <button onClick={handleDeleteClick} aria-label='delete' disabled={note.authorType==="System"}>
            <FaTrash />
          </button>
        </div>
      )}
      <div className={noteClass} onClick={(handleEditClick)}>{note.text}</div>
      </div>
  );
}
