import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Enes");

  useEffect(() => {
    console.log("component mounted");
  }, []);

  // useEffect(() => {
  //   console.log("state changed");
  // });

  useEffect(() => {
    console.log("number state changed");
  }, [number]);
  
  useEffect(() => {
    console.log("name state changed");
  }, [name]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Ahmet")}>Click</button>
    </div>
  );
}

export default App;
