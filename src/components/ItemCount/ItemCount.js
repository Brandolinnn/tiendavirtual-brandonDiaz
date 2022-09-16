import { useState } from "react";



function ItemCount({ stock, initial, onAdd }) {
  const [Carrito, setCarrito] = useState(initial);

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
    if (Carrito <= stock) onAdd(Carrito);
  };

  return (
    <div>
      <h2>{Carrito}</h2>

      <button onClick={resta}>-</button>
      <button onClick={suma}>+</button>
      <h2> STOCK DISPONIBLE: {stock}</h2>
      <button onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;

