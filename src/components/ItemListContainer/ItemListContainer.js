import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import data from "../mockData";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts
      .then((response) => {
        setProductList(response);
      })
      .catch(() => {
        alert("Algo estuvo mal")
      })
  }, [])


  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

  return (
    <>
      <ItemList lista={productList} />
    </>
  )
}



export default ItemListContainer;