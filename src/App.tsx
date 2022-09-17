import React from 'react';
import './App.css';
import ProgressNotes from './components/ProgressNotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Progress Notes</h1>
      </header>
      {/* <body className="body"> */}
        <ProgressNotes />
      {/* </body> */}
    </div>
  );
}

export default App;
