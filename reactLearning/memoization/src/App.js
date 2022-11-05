import './App.css';

import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // const data = useMemo(() => {
  //   return calculateObject(count);
  // }, [count]);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <Header
        count={count < 10 ? 0 : count}
        // data={data}
        increment={increment}
      />

      <hr />

      <h1>{count}</h1>

      <br />
      <br />

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

// function calculateObject(count) {
//   console.log('calculateObject called');
//   for (let i = 0; i < 1000000000; i++) { }
//   console.log('calculateObject finished');

//   return { name: 'John Doe', count };
// }

export default App;
