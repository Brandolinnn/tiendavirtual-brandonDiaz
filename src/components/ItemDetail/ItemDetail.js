import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext"




const ItemDetail = ({ productoss, id, title, price }) => {  
  const [Count, setCount] = useState(0)

  const { addToCart } = useContext(CartContext)


  function OnAdd(productoss) {
    addToCart(productoss, Count);
  }


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
        <button onClick={() => OnAdd(productoss)} type="button" className="btn btn-dark ">Agregar</button>
        

        <ItemCount
          productoss={productoss}
          count={Count}
          setCount={setCount}
          stock={stock}
          onAdd={OnAdd}
        />

      </div>


    </div>



  )
}

export default ItemDetail;