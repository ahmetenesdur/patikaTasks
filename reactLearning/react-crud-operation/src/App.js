import './App.css';
import Create from './components/Create/index';
import Read from './components/Read/index';
import Update from './components/Update/index';

function App() {
  return (
    <div className="main">
      <h2 className='main-header'>React CRUD Operations</h2>
      <div>
        <Create />
      </div>
      <div style={{ marginTop: 20 }}>
        <Read />
      </div>

    </div>
  );
}

export default App;