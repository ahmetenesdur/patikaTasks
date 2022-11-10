import './App.css';
import { useEffect, useState } from 'react';

import Palatte from './components/Palatte';
import { initSocket, subscribe } from './services/socketApi';

function App() {
  const [activeColor, setActiveColor] = useState('#282c34');

  useEffect(() => {
    initSocket();

    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Palatte activeColor={activeColor} />
    </div>
  );
}

export default App;
