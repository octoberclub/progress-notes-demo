import React, { useState } from 'react';
import UserContext from './UserContext';
import './App.css';
import ProgressNotes from './components/ProgressNotes';
import { UserSelect } from './components/UserSelect';

function App() {
  const [user, setUser] = useState('Michelle');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Progress Notes</h1>
      </header>
      <UserContext.Provider value={{ user, setUser }}>
        <UserSelect />
        <ProgressNotes/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
