import './App.css';

// import Header from './components/header';

// function App() {
//   return (
//     <>
//       <h1 className='xyz'>Hello React</h1>
//       <Header />

//       <label htmlFor="myInput">
//         Enter your name:
//         <input id="myInput" type="text" />
//       </label>
//     </>
//   );
// }

const name = 'Ahmet Enes';
const surname = 'Dur';
const isLogin = true;

function App() {
  return (
    <h1>{isLogin ? ` Benim adım ${name}, soyadım ${surname}. ` : 'Giriş yapmadınız.'} </h1>
  );
}

export default App;