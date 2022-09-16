import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="divNavBar">
        <div>
          <CartWidget />
        </div>

        <div className="links">
          <ul>
          
            <li>
            <Link to={`/category/`}>Electronica</Link>
            </li>

            <li>
            <Link to={"/category/ropa"}>Ropa</Link>
            </li>

            <li>
            <Link to={"/category/joyas"}>Joyas</Link>
            </li>
             

          </ul>
        </div>

        <div>
          <button type="submit" >LOGIN </button>
        </div>
        

    </div>
  )
}

export default NavBar;