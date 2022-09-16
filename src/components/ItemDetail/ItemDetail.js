const ItemDetail = ({productoss}) => {
    return (
      <div>
        <img width="600px" src={productoss.image} />
        <h1>Nombre :{ productoss.title }</h1>
        <h2>Precio :{ productoss.price }</h2>
      </div>
 
    )
      
  }
  
  export default ItemDetail;