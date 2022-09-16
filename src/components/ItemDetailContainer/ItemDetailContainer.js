import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import data from "../mockData";

const ItemDetailContainer = () => {
  const { ids } = useParams();

  const [productoss, setProductoss] = useState();



  const getItem = async () => {
    await fetch(`https://fakestoreapi.com/products/${ids}`)
    .then ((response)  => response.json())
    .then((pro) => {
      setProductoss(pro);
  });
};


  useEffect(() => {
    getItem();
  }, []);

  return (
        
    productoss &&  <ItemDetail productos={productoss} />

     
  )
}


export default ItemDetailContainer;