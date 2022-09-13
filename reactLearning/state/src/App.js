import { useState } from "react";

function App() {
  const [name, setName] = useState("Enes");
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet", "Ali"]);
  const [address, setAddress] = useState({ city: "Istanbul", zip: 34100 });

  return (
    <div>
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName('Ahmet')}>Change name</button>
      <button onClick={() => setAge(20)}>Change age</button>

      <hr />

      <h2>Friends</h2>
      {
        friends.map((friend, index) => {
          return <div key={index}>{friend}</div>
        })
      }

      <br />

      <button onClick={() => setFriends([...friends, 'Enes'])}>Add new friend</button>

      <hr />

      <h2>Address</h2>
      <div>{address.city} {address.zip}</div>
      {console.log(address)}

      <br />

      <button onClick={() => setAddress({ ...address, zip: 44444 })}>Change the address</button>
      <button onClick={() => setAddress({ ...address, nickName: 'new Value' })}>Add value </button>

    </div>
  )
}

export default App;
