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
  
  export type NoteAction = AddNoteAction | DeleteNoteAction;
  
  const newNote = (text: string) : NoteProps => {
    return {
        id: 2,
        createdAt: new Date(),
        author: "Michelle",
        authorType: "Clinician",
        text,
      };
  };
  
  export const noteReducer = (notes: NoteProps[], action: NoteAction) : NoteProps[] => {
    switch(action.type) {
      case "ADD_NOTE":
        return [...notes, newNote(action.payload.text)];
      default: return { ...notes };
    }
  };
  