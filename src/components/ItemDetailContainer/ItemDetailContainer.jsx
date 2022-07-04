import { useEffect, useState } from "react"
import { getProducts } from "../../data/asyncMock"
import ItemDetail  from "../ItemDetail/ItemDetail"

const ItemDetailContainer = (product) => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const id = 2

    useEffect(() => {
        getProducts()
            .then((res) => {
                setItem(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
         }, []);

//console.log(product);
return <ItemDetail product={product} />;
};

export default ItemDetailContainer;