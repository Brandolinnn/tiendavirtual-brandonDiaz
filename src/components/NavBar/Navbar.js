import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";


const NavBar = () => {
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
              <button type="button" class="btn btn-dark ">HOME</button>
            </Link>

          </li>

          <li>
            <Link to={"/category/electronics"}>
              <button type="button" class="btn btn-dark .container-fluid">ELECTRO</button>
            </Link>
          </li>

          <li>
            <Link to={`/category/jewelery/`}>
              <button type="button" class="btn btn-dark">JOYERIA</button>
            </Link>
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