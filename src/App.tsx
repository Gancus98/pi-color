import React, { useState } from 'react';
import './App.css';
import CanvasArea from './components/CanvasArea';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [isPickerView, setIsPickerView] = useState(true);

  const handleSetPicker = (state: boolean) => {
    setIsPickerView(state);
  };

  return (
    <div className="App">
      <NavBar isPickerView={isPickerView} handleSetPicker={handleSetPicker} />
      {isPickerView ? <CanvasArea /> : <p>Library</p>}
    </div>
  );
}

export default App;
