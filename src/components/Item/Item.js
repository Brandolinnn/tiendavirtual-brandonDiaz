

const Item = ({ title, price, image}) => {
  return (
    <div className="divProductos">
        <img width={400} src={image} alt={title} />
        <h3> {title}</h3>
        <h4> Precio: {price}</h4>

    </div>
  )
}

export default Item