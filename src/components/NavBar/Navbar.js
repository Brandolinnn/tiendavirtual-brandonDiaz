import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";




const NavBar = () => {
  const { cartTotal } = useContext(CartContext)
  return (
    <div className="divNavBar">
      <div>
        <Link to={"/"}>
          <CartWidget />
        </Link>
      </div>

      <div >
        <ul className="links">

          <li>
            <Link to={"/"}>
              <button type="button" className="btn btn-dark ">HOME</button>
            </Link>

          </li>

          <li>
            <Link to={"/category/electronics"}>
              <button type="button" className="btn btn-dark .container-fluid">ELECTRO</button>
            </Link>
          </li>

          <li>
            <Link to={`/category/jewelery/`}>
              <button type="button" className="btn btn-dark">JOYERIA</button>
            </Link>
          </li>


        </ul>
      </div>

      <div>
        <Link to={`/cart`}>
          <button type="submit" className="btn btn-dark"> CARRITO {
            <span className="btn btn-light">
              {cartTotal() > 0 ? cartTotal() : ""}
            </span>
          } </button>
        </Link>
      </div>


    </div>
  )
}

export default NavBar;