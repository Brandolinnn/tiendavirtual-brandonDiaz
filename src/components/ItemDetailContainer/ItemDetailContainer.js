import { useEffect , useState } from "react"
import data from "../mockData";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState();
    const id = "1";


  useEffect(() => {
    getItem
      .then((response) => {
        setProductos(response.find((x)=> x.id === id));
      })
      .catch(() => {
        alert("Algo estuvo mal")
      })
  }, [])


  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

  return (
    productos && 
    <ItemDetail productos={productos} />
  )
}

export default ItemDetailContainer;