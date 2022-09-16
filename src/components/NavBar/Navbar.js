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
            <Link to={`/category/jewelery/`}>Joyeria</Link>
            </li>

            <li>
            <Link to={"/category/electronics"}>Electronica</Link>
            </li>

            <li>
            <Link to={"/"}>Home</Link>
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