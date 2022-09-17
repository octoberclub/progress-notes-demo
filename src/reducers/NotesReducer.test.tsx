import { notesReducer } from './NotesReducer';

describe('NotesReducer', () => {
  it('should add note text to empty list', () => {
    const notes = notesReducer([], { type: 'ADD_NOTE', payload: { text: 'My text'}});

    expect(notes).toMatchObject([{
      text: 'My text',
    }]);
  });

  it('should add note to list with new sequential id', () => {
    const initialItem = {
      id: 1,
      createdAt: new Date(),
      author: "Michelle",
      authorType: "Clinician",
      text: 'initial text'
    };

    const notes = notesReducer([initialItem], { type: 'ADD_NOTE', payload: { text: 'more text'}});

    expect(notes).toMatchObject([{
      id: 1,
      text: 'initial text',
    }, {
      id: 2,
      text: 'more text',
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

    const notes = notesReducer([initialItem], { type: 'DELETE_NOTE', payload: { id: 1}});

    expect(notes).toEqual([]); 
  });
});