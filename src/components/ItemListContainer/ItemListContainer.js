import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

   const { categoryName } =useParams();
  
  const getProducts = async () => {
    let url;
    if (categoryName) {
      url = `https://fakestoreapi.com/products/category/${categoryName}`;  
    } else {
      url = `https://fakestoreapi.com/products` ;

    }
    fetch(url, {
      method: "GET" ,
      headers : {
        "Content-Type" : "application/json"
      } 
    })
    .then((response)=>response.json())
    .then(data => setProductList(data))
};
    
    
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