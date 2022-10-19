

const Item = ({ title, price, image}) => {
  return (
    <>
    <div className=" divCadaProducto">
      <div className="divProductos">
        <img className="productImg" width="200px" height={"200px"} src={image} alt={title} />
        <h3 className="titulo"> {title}</h3>
        <h4 className="precio"> Precio: {price}</h4>
        <button type="text" className="btn btn-outline-danger">Detalle</button>
        
      </div>
    </div>
    </>
    
  )
}

export default Item