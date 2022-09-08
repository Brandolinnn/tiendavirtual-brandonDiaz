import { useState  } from "react" ;
import ItemListContainer from "../ItemListContainer/ItemListContainer";


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

    const handleOnAdd = () => {
        if (Carrito <= props.stock) props.onAdd(Carrito);
      };
    
  return (
    <div>
        <h2>{Carrito}</h2>
        
        <button  onClick = {resta} >-</button>
        <button onClick = {suma} >+</button>
        <h2> STOCK DISPONIBLE: {props.stock}</h2>
        <button onClick={handleOnAdd}>Agregar al carrito</button>
        
    </div>
  )
}

export default ItemCount;