import { useState } from "react";

function App() {
  const [name, setName] = useState("Enes");
  const [age, setAge] = useState(24);

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName('Ahmet')}>Change name</button>
      <button onClick={() => setAge(20)}>Change age</button>
    </div>
  )
}

export default App;
