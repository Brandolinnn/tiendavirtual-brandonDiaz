import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  const stock = 10;
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`);
  }; 
  return (
    <div>
        <h1>Carrito de productos</h1>
        <ItemCount  initial={1} stock={stock} onAdd={handleOnAdd}/>
    </div>
  )
}



export default ItemListContainer;