import { Link } from "react-router-dom";



function ItemCount({ setCarrito, Carrito, stock, initial, agg }) {

  const suma = () => {
    if (Carrito > stock - 1) {
      alert("STOCK AGOTADO");
    } else {
      setCarrito(Carrito + 1);
    }
  };
  const resta = () => {
    if (Carrito < 1) {
      alert("STOCK AGOTADO");
    } else {
      setCarrito(Carrito - 1);
    }
  };
  const handleOnAdd = () => {
    if (Carrito <= stock) agg(Carrito);
  };

  return (
    <div>
      <h2>{Carrito}</h2>

      <button onClick={resta} type="button" class="btn btn-dark "> - </button>
      <button onClick={suma} type="button" class="btn btn-dark "> + </button>
      <h2> STOCK DISPONIBLE: {stock}</h2>
      <button onClick={handleOnAdd} type="button" class="btn btn-dark ">Agregar al carrito</button>
      
    </div>
  );
}

export default ItemCount;

