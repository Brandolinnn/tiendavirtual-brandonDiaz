import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import data from "../mockData"



const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  
  const getProducts = new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve(data);
      reject("hubo error")
    }, 2000)
  })
    
    
    useEffect(() => {
      getProducts.then((response) => {
        setProductList(response)
      })
    }, []);

  return (
    <div>
      <ItemList lista={productList} />
    </div>
  )
 };



export default ItemListContainer;