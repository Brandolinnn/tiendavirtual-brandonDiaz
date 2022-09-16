
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/NavBar/Navbar"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <BrowserRouter>   
      <Navbar/>
      
      <Routes>
      
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='detail/:id' element={<ItemDetailContainer/>} />
        <Route path='category/:categoryName' element={<ItemListContainer/>} />



      </Routes>

      
      
      </BrowserRouter>
      
    
  )
}

export default App;
