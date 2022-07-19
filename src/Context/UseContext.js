import React,{createContext,useState} from 'react'

export const CartContext = createContext([])

export const CartProvider = (prov) => {
  const [data, setItems] = useState([])

  const isInCart = (id) =>{
    const found = data.find(item => item.id == id);
    return found;
  }
    
  
  const addItem = (item, qty) => {
    isInCart (item.id)
    ?
    setItems (data.map((prod =>{
        if (prod.id === item.id){
            prod.qty += qty
        }
        return prod
    })))
    :
      setItems ([...data, {id: item.id, name: item.title, price: item.price, qty: qty }])
  }

const removeItem = (id) => {
    setItems(data.filter(item => item.id !== id))
}

const clearItems = () =>{
    setItems([])
}
  return (
    <CartContext.Provider value = {{data, addItem}}>
    {prov}
    </CartContext.Provider>
  )
}

