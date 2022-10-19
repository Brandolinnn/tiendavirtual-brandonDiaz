import swal from "sweetalert"
function ItemCount({ count , setCount,  stock, onAdd }) {


  const suma = () => {
    if (count > stock - 1) {
      swal({
        title : "Limite de stock alcanzado",
        text: `Su stock es: ${stock}` ,
        icon: "info",
        timer:"2000"
    });
    } else {
      setCount(count + 1);
    }
  };
  const resta = () => {
    if (count < 1) {
      swal({
        title : "No puede haber numeros negativos",
        icon: "info",
        timer:"2000"
    });
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

