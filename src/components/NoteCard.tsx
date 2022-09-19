import React, { useState, useContext } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import classNames from 'classnames';
import UserContext from '../UserContext';
import deleteNote from "../api/DeleteNote";
import { NoteAction, NoteProps } from "../reducers/NotesReducer";
import EditNoteForm from "./EditNoteForm";

interface NoteCardProps {
  note: NoteProps,
  dispatch: React.Dispatch<NoteAction>,
}

export default function NoteCard({ note, dispatch }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useContext(UserContext);
    
  const formattedDate = (date: Date) => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  
  // TODO needs a tidy up - ony edit / delete your own notes
  const canEdit = note.authorType !== "System";
  const canDelete = note.authorType !== "System" && note.author === user;

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
    'card-editable': note.author===user,
    'card-note-system': note.authorType==='System',
    'card-note-clinician':note.authorType==='Clinician', 
  });

  return (
    <>
    <div className="card">
      <div className="note-info">
        {renderNoteInfo(note)}
                <div className="note-tools">
            {canEdit && (
              <button onClick={(handleEditClick)} aria-label='edit'>
                <FaEdit />
              </button>    
            )}
            {canDelete && (
              <button onClick={handleDeleteClick} aria-label='delete' disabled={note.authorType==="System"}>
                <FaTrash />
              </button>
            )}
          </div>
      
      </div>
      <div className={noteClass} onClick={(handleEditClick)}>{note.text}</div>
    </div>
    </>
  );
}
