import { useState  } from "react" ;



function ItemCount(props) {

    const [Carrito , setCarrito ] = useState(0) ;
    
    
    
    const suma = () => {
        if (Carrito > 9) {
            alert ("STOCK AGOTADO")
            
        } else {
            setCarrito (Carrito+ 1) 

        }


    }
    const resta = () => {
        if (Carrito <  1) {
            alert ("STOCK AGOTADO")
            
        } else {
            setCarrito (Carrito - 1) 

        }
 
    }
    
  return (
    <div>
        <h2>{Carrito}</h2>
        
        <button  onClick = {resta} >-</button>
        <button onClick = {suma} >+</button>
        <h2> STOCK DISPONIBLE: {props.stock}</h2>
        
    </div>
  )
}

export default ItemCount;