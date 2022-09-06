import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  const stock = 10;
  return (
    <div>
        <h1>Carrito de productos</h1>
        <ItemCount stock={stock} />
    </div>
  )
}

export default ItemListContainer;