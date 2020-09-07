import React from 'react';
import logo from './logo.svg';
import './App.css';
import Schedule from './schedule';
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          412
        </p>
        <div className='contacts' onClick={() => history.push('/io-timetable/contacts')}>contacts</div>
        <Schedule />
      </header>
    </div>
  );
}

export default App;
