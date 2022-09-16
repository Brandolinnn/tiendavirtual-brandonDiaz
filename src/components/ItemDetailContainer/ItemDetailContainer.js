import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const { id } = useParams();

  const [productoss, setProductoss] = useState();

  const getItem = () => {
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method : "GET"
      })
     .then((res) => res.json() )
     .then(response=> {
      setProductoss(response)
      });
  
};

  useEffect(() => {
    getItem();
  }, [id]);

  return (
        
    productoss &&  <ItemDetail productoss={productoss} />

     
  )
}


export default ItemDetailContainer;