const ItemDetail = ({productos}) => {
    return (
      <div className="productoAuto">
        <img width="600px" src={productos.image} alt={productos.title}/>
        <h1>Nombre : { productos.title }</h1>
        <h2>Precio : { productos.price }</h2>
        <h3>{productos.description}</h3>
      </div>
 
    )
      
  }
  
  export default ItemDetail;