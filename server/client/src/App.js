import React from 'react';
import './App.css';

function MyButton() {
  return (
    <button>
      <b>Hello World !!</b>
    </button>
  );
}

export default function MyApp() {
  return (
    <div className="container">
      <h1>WELCOME TO MY APP</h1>
      <MyButton />
    </div>
  );
}

