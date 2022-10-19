
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/NavBar/Navbar"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from "./Context/CartProvider";
import Cart from "./components/Cart/Cart";




function App() {


  return (
    <div className="app">

    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='detail/:id' element={<ItemDetailContainer />} />
          <Route path='category/:categoryName' element={<ItemListContainer />} />
          <Route path='cart' element={<Cart />} />



        </Routes>



      </BrowserRouter>


    </CartProvider >
    </div>


  )
}

export default App;
