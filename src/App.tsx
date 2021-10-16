import React from 'react';
import './App.css';
import CanvasArea from './components/CanvasArea';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CanvasArea />
    </div>
  );
}

export default App;
