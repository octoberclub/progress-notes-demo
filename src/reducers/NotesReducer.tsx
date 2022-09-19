export interface NoteProps {
    id: number,
    createdAt: Date,
    author: string,
    authorType: string,
    text:  string,
  }
  
  export interface AddNoteAction {
    type: 'ADD_NOTE',
    payload: { text: string },
  }
  
  export interface DeleteNoteAction {
    type: 'DELETE_NOTE',
    payload: { id: number},
  }

  export interface EditNoteAction {
    type: 'EDIT_NOTE',
    payload: { id: number, text: string},
  
  } 
  export type NoteAction = AddNoteAction | DeleteNoteAction | EditNoteAction;
  
  const newNote = (id: number, text: string) : NoteProps => {
    return {
        id,
        createdAt: new Date(),
        author: "Michelle",
        authorType: "Clinician",
        text,
      };
  };
  
  export const notesReducer = (notes: NoteProps[], action: NoteAction) : NoteProps[] => {
    switch(action.type) {
      case "ADD_NOTE":
        return [...notes, newNote(notes.length + 1, action.payload.text)];
      case "DELETE_NOTE":
        return notes.filter(note => note.id!==action.payload.id);
      case "EDIT_NOTE":
        return notes.map((item) => {
          if(item.id === action.payload.id) {
            return {
              ...item,
              text: action.payload.text,
            }
          }
          return item;
        });
      default: 
        return { ...notes };
    }
  };
  