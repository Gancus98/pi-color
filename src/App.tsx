import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Picker from './components/Picker/Picker';

function App() {
  const [isPickerView, setIsPickerView] = useState(true);

  const handleSetPicker = (state: boolean) => {
    setIsPickerView(state);
  };

  return (
    <div className="App">
      <NavBar isPickerView={isPickerView} handleSetPicker={handleSetPicker} />
      {isPickerView ? <Picker /> : <p>Library</p>}
    </div>
  );
}

export default App;
