import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const differenceInMS = Date.now() - birthDate.getTime();
    const ageDate = new Date(differenceInMS);
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        class="input"
      /><br/><br/>
      <button className="calculate-age-button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age && <p>You are {age} years old</p>}
    </div>
  );
}

export default App;
