import { notesReducer } from './NotesReducer';

describe('NotesReducer', () => {

  it('should load notes', () => {
    const notes = notesReducer([], {
      type: 'LOAD_NOTES', payload: {
        notes: [
          {
            id: 1,
            createdAt: new Date(),
            author: "Michelle",
            authorType: "Clinician",
            text: 'My text',
          },
        ]
      }
    });

    expect(notes).toMatchObject([{
      text: 'My text',
    }]);
  });
  it('should add note text to empty list', () => {
    const notes = notesReducer([], { type: 'ADD_NOTE', payload: { note: {    
      id: 0,
      createdAt: new Date(),
      author: "Michelle",
      authorType: "Clinician",
      text: 'My new text',
    } } });

    expect(notes).toMatchObject([{
      text: 'My new text',
    }]);
  });
 
  it('should remove note from list', () => {
    const initialItem = {
      id: 1,
      createdAt: new Date(),
      author: "Michelle",
      authorType: "Clinician",
      text: 'initial text'
    };

    const notes = notesReducer([initialItem], { type: 'DELETE_NOTE', payload: { id: 1 } });

    expect(notes).toEqual([]);
  });


  it('should update note in list', () => {
    const initialItem = {
      id: 1,
      createdAt: new Date(),
      author: "Michelle",
      authorType: "Clinician",
      text: 'initial text'
    };
   
    const notes = notesReducer([initialItem], { type: 'EDIT_NOTE', payload: { note: initialItem, text: 'updated text' } });

    expect(notes).toMatchObject([{
      id: 1,
      text: 'updated text',
    }]);
  });
});