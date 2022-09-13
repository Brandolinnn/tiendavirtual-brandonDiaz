
import './App.css';
import NavBar from './components/NavBar/Navbar';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <header className="App-header">
        
        <ItemDetailContainer/>        

      </header>
    </div>
  );
}

export default App;
