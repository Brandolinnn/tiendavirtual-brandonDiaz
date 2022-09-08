import  {useState} from "react";
import ItemList from "../ItemList/ItemList"
import data from "../mockData";

const ItemListContainer = () => {
  const [productList, setProductList] = useState ([]);

  const getProducts = new Promise ((resolve , reject) => {
    setTimeout (() => {
      resolve(data)
    } , 2000 );
  })
  .then ((response) => {
    setProductList(response);
  })
  .catch(() => {
    alert("Algo estuvo mal")
  })

  
  return (
    <>
    <ItemList lista= {productList}/>
    </>
  )
}



export default ItemListContainer;