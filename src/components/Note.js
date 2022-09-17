import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Note({ note }) {

  const formattedDate = date => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return (
    <div className="card">
      <div className="noteDate">{formattedDate(note.createdAt)}</div>
      <div className="note">{note.text}</div>
      <div className="noteTools"><FaEdit /> <FaTrash /></div>
    </div>
  );
}
