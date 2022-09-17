import { React, useState } from "react";

export default function NotesForm({ onAddNote }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    onAddNote(value);
    e.preventDefault();
  };

  return (
    <div className='addform'>
      <form onSubmit={handleSubmit}>
        <label>
          Notes:
          <textarea type="text" aria-label="notes" value={value} onChange={handleChange} />
        </label>
        <input type="submit" aria-label="add notes" value="Add" />
      </form>
    </div>
  );
}