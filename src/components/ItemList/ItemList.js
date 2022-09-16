import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {
    return (
        <div>
            {
                lista.map((product) => (
                    <Link to={"/detail/" + product.id } key={product.id}>
                    
                    <Item
                     title={product.title} 
                     price={product.price} 
                     image={product.image}/>
                    
                    </Link>

                ))

            }
        </div>

    );
};

export default ItemList;
