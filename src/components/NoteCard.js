import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { NoteAction } from "../reducers/NotesReducer";

interface NoteCardProps {
  note: NoteProps,
  dispatch: React.Dispatch<NoteAction>,
}

export default function NoteCard({ note, dispatch }: NoteCardProps) {

  const formattedDate = date => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  
  const handleDeleteClick = () => {
    dispatch({ type: 'DELETE_NOTE', payload: { id: note.id } });
  }

  // const handleEditClick = () => {
  //   setIsEditing(!isEditing);
  // }

  // const onSaveNote = (note) => {    
  //   onUpdateNote(note);
  //   setIsEditing(false);
  // }

  // if (isEditing) {
  //   return (
  //     <div className="card">
  //       <NotesForm note={note} onSaveNote={onSaveNote}/>
  //     </div>
  //   )
  // }
  
  return (
    <div className="card">
      <div className="noteDate">{formattedDate(note.createdAt)}</div>
      <div className="note">{note.text}</div>
      <div className="noteTools">
        <button aria-label='edit'>
          <FaEdit />
        </button>    
        <button onClick={handleDeleteClick} aria-label='delete'>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
