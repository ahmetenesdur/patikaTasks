import './App.css';
import User from './components/User';

const friends = [
  { id: 1, name: 'John', surname: 'Doe', age: 25 },
  { id: 2, name: 'Jane', surname: 'Doe', age: 24 },
  { id: 3, name: 'Jack', surname: 'Doe', age: 23 }
];

function App() {
  return (
    <>
      <User
        name='Ahmet Enes'
        surname='Dur'
        isLogin={true}
        age={'24'}
        friends={friends}
        address={{ city: 'Istanbul', zip: 34000 }}
      />
    </>
  );
}

export default App;
