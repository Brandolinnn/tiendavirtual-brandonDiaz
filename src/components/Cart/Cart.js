import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { collection, addDoc, getFirestore } from "firebase/firestore"
import swal from "sweetalert"


const Cart = () => {
    
    const { Cart, removeItem , clear} = useContext(CartContext)
    const [order , setOrder] = useState({
        buyer: {
            name: "",
            phone: 0,
            email: ""

        },
        items: Cart,
        total: Cart.reduce(
            (previousValue, currentValue) =>
                previousValue + currentValue.price * currentValue.cantidad,
            0),

        });
        const handleInputChange = (e) =>{
            setOrder({
                ...order,
                buyer: {
                    ...order.buyer,
                    [e.target.name] : e.target.value,
                },
            });
        };
    const createOrder = () => {
        const db = getFirestore();


        const query = collection(db, "orders");
        addDoc(query, order)
            .then(({ id }) => {
                
                    swal({
                        title : "Gracias por su compra",
                        text: `Su id de orden es: ${id}` ,
                        icon: "success",
                        timer:"3000"
                    });
                    clear();
                
            })
            .catch((err) => {
                console.log(err);
            })

    }
    return (

        <div className="carrito">

            <h1 className="formulario">CARRITO</h1>
            {Cart.length === 0 ?
                (
                    <>
                        <h2 className="formulario">NO HAY PRODUCTOS EN EL CARRITO</h2>
                        <Link to={`/`}>
                            <button type="submit" className="btn btn-dark ">VOLVER AL INICIO</button>
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
                                    
                                </div>

                            </div>
                        ))}
                    </>

                )}

            <div className="formulario">
                <div className="form" >
                    <label>Nombre</label>
                    <input name="name" type="text" value={order.buyer.name} onChange={handleInputChange}/>

                </div>

                <div className="form">
                    <label>Numero</label>
                    <input name="phone" type="number" value={order.buyer.phone} onChange={handleInputChange}/>

                </div>

                <div className="form">
                    <label>Email</label>
                    <input name="email" type="email" value={order.buyer.email} onChange={handleInputChange}/>

                </div>

            </div>




            <div className="formularioo">
                <h5 className="precioTotal">Precio total: ${order.total}</h5>
                <button type="submit" className="btn btn-outline-success " onClick={createOrder}>Comprar</button>
            </div>


        </div >
    )
}

export default Cart