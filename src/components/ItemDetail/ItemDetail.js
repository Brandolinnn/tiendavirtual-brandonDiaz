import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ productoss }) => {
  const stock = 10;
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`);
  };
  return (

    <div className="divProductos">
      <img width={"300px"} src={productoss.image} />
      <h1 className="titulo">{productoss.title}</h1>
      <h2 className="precio">Precio : ${productoss.price}</h2>
      <p className="pDes">{productoss.description}</p>
      <hr />

      <div>
        <h1>Carrito de productos</h1>
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      </div>


    </div>

  )

}

export default ItemDetail;