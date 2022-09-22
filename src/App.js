
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/NavBar/Navbar"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./Context/CartProvider";




function App() {


  return (
    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='detail/:id' element={<ItemDetailContainer />} />
          <Route path='category/:categoryName' element={<ItemListContainer />} />
          <Route path='cart' element={<div>Estas por procesar la compra</div>} />



        </Routes>



      </BrowserRouter>


    </CartProvider >


  )
}

export default App;
