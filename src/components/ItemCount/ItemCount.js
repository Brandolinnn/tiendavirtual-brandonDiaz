

function ItemCount({ count , setCount,  stock, onAdd }) {


  const suma = () => {
    if (count > stock - 1) {
      alert("STOCK AGOTADO");
    } else {
      setCount(count + 1);
    }
  };
  const resta = () => {
    if (count < 1) {
      alert("STOCK AGOTADO");
    } else {
      setCount(count  - 1);
    }
  };
  const OnAdd = () => {
    if (count <= stock) onAdd(count);
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={resta} type="button" className="btn btn-dark "> - </button>
      <button onClick={suma} type="button" className="btn btn-dark "> + </button>
      <h2> STOCK DISPONIBLE: {stock}</h2>
      
      
    </div>
  );
}

export default ItemCount;

