import React, {useContext} from "react";
import { CartContext } from "../Context/UseContext";

const Cart = () => {

    const {items, removeItem, clearItems} = useContext(CartContext);
        return (
            <div>
                <div>
                    {
                        items.map((item) =>(
                            <div key = {item.id}>
                                <br/>
                                <h3 style = {{marginBottom:0}}> {item.qty} - {item.name}</h3>
                                <h5 style ={{marginTop: 5, color:"gray", cursor:"pointer"}} onClick ={() => removeItem(item.id)}>Borrar producto</h5>
                            </div>
                            )   )   
                    }

                     <h5 style ={{marginTop: 45, color:"red", cursor:"pointer"}} onClick ={() => clearItems()}>Vaciar carrito</h5>
                                                  
                </div>
            </div> 
        )                              
        
    };


export default Cart;