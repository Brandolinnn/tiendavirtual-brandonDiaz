import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productoss, setProductoss] = useState();



  const getItem = () => {
    const db = getFirestore();

    const queryDoc = doc(db, "items", id );

    getDoc(queryDoc)
      .then(res => {
  
        setProductoss(res.data());
      })
      .catch(error => {
        console.log(error);
      });

  }




  useEffect(() => {
    getItem();
  }, [id]);

  return (

    productoss && <ItemDetail productoss={productoss} />


  )
}


export default ItemDetailContainer;