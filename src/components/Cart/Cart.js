import { useContext  } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { collection, addDoc, getFirestore } from "firebase/firestore"

const Cart = () => {
    
    const { Cart, removeItem, totalCarrito } = useContext(CartContext)
    const createOrder = () => {
        const db = getFirestore();

        const order = {
            buyer: {
                name: "Brando",
                phone: "341341",
                email: "email@email.com"

            },
            items: Cart,
            total: Cart.reduce(
                (previousValue, currentValue) =>
                    previousValue + currentValue.price * currentValue.cantidad,
                0),

        };

        const query = collection(db, "orders");
        addDoc(query, order)
            .then(({ id }) => {
                console.log(id);
                alert("gracias por tu compra")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (

        <div>

            <h1>CARRITO</h1>
            {Cart.length === 0 ?
                (
                    <>
                        <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
                        <Link to={`/`}>
                            <button type="submit" className="btn btn-dark">VOLVER AL INICIO</button>
                        </Link>
                    </>
                )
                :
                (
                    <>
                        {Cart.map((item) => (
                            <div className="divCadaProducto" key={item.id}>
                                <div className="divProductos" >
                                    <img className="productImg" width="200px" height={"200px"} src={item.image} alt={item.title} />
                                    <h3 className="titulo"> {item.title}</h3>
                                    <h4 className="precio"> Precio: {item.price}</h4>
                                    <h5>Cantidad : {item.cantidad}</h5>
                                    <button type="submit" className="btn btn-danger" onClick={() => (removeItem(item.id))}>Eliminar</button>
                                    <h5>Precio : {totalCarrito}</h5>

                                </div>

                            </div>
                        ))}
                    </>

                )}


            <div>
                <button type="submit" className="btn btn-danger" onClick={createOrder}>ORDENAR</button>
            </div>


        </div >
    )
}

export default Cart