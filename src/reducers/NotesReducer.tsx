export interface NoteProps {
    id: number,
    createdAt: Date,
    author: string,
    authorType: string,
    text:  string,
  }
  
  export interface LoadNotesAction {
    type: 'LOAD_NOTES',
    payload: { notes: NoteProps[] },
  }

  export interface AddNoteAction {
    type: 'ADD_NOTE',
    payload: { note: NoteProps },
  }
  
  export interface DeleteNoteAction {
    type: 'DELETE_NOTE',
    payload: { id: number},
  }

  export interface EditNoteAction {
    type: 'EDIT_NOTE',
    payload: { note: NoteProps, text: string},
  
  } 
  export type NoteAction = AddNoteAction | DeleteNoteAction | EditNoteAction | LoadNotesAction;
   
  export const notesReducer = (notes: NoteProps[], action: NoteAction) : NoteProps[] => {
    switch(action.type) {
      case "LOAD_NOTES":
        return [...action.payload.notes];
      case "ADD_NOTE":
        return [...notes, action.payload.note];
      case "DELETE_NOTE":
        return notes.filter(note => note.id!==action.payload.id);
      case "EDIT_NOTE":
        return notes.map(note => (note.id === action.payload.note.id) ? { ...action.payload.note, text: action.payload.text } : note);
      default: 
        return { ...notes };
    }
  };
  