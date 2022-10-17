import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {




  const [productList, setProductList] = useState([]);

  const { categoryName } = useParams();



  const getProducts = () => {
    const db = getFirestore();

    const queryBase = collection(db, "items");

    const querySnapshot = categoryName ? query(queryBase, where("categoryId", "==", categoryName)) : queryBase;


    getDocs(querySnapshot)
      .then(res => {
        const data = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };

        })
        setProductList(data);
      });

  }

  useEffect(() => {
    getProducts();
  }, [categoryName]);

  return (
    <div>
      <ItemList lista={productList} />
    </div>
  )
};



export default ItemListContainer;