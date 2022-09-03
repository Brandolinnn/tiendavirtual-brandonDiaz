import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <div className="divNavBar">
        <div>
        
        <h1>LIGA LSA</h1>

        </div>

        <div className="links">
            <ul>Sobre Nosotros</ul>
            <ul>Ubicacion</ul>
            <ul>Contacto</ul>
            
 
        </div>

        <div>
        
        <CartWidget />

        </div>
        

    </div>
  )
}

export default NavBar;