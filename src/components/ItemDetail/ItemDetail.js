const ItemDetail = ({productos}) => {
    return (
      <div>
        <img width="600px" src={productos.image} />
        <h1>Nombre :{ productos.title }</h1>
        <h2>Precio :{ productos.price }</h2>
      </div>
 
    )
      
  }
  
  export default ItemDetail;