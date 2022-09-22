import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ productoss, id, title, price }) => {
  const initial = 1;

  const [IrAlCarrito, setIrAlCarrito] = useState(false)


  function handleOnAdd(cantidad) {
    setIrAlCarrito(true);
    IrAlCarrito({ id, title, price });
  }

  const [Carrito, setCarrito] = useState(initial);
  const stock = 10;

  return (

    <div className="divProductos">
      <img width={"300px"} src={productoss.image} />
      <h1 className="titulo">{productoss.title}</h1>
      <h2 className="precio">Precio : ${productoss.price}</h2>
      <p className="pDes">{productoss.description}</p>


      <hr />


      <div>
        <h1>Carrito de productos</h1>
        {IrAlCarrito ? (
          <Link to={"/cart"}>
            <button type="button" class="btn btn-dark .container-fluid">CARRITO</button>
          </Link>)

          : (

            <ItemCount
              setCarrito={setCarrito}
              Carrito={Carrito}
              stock={stock}
              agg={handleOnAdd}
            />
          )}

      </div>


    </div>



  )
}

export default ItemDetail;