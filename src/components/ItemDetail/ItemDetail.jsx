
import React, {useState} from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/UseContext';
import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({ product }) => {
    const [add, setAdd] = useState(false)
    const {addItem} = useContext(CartContext)

    return (
        <div className="detail">
            <img src={product.img} alt={product.name} width="400" />
            <div>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3>
                <h4>Stock: {product.stock}</h4>
                <ItemCount item={item} stock={product.stock} initial={1} onAdd={addItem}/>
            </div>
            <Link to="/cart">
                Finalizar compra
            </Link>
        </div>
    );
};

export default ItemDetail;