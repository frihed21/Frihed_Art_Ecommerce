import React from 'react';
import ItemCount from './ItemCount';
import './ItemListContainer.css';

const ItemListContainer = (props) => {

	const onAdd = (n) => {
		console.log (`felicitaciones se agregaron ${n} productos al carrito`);
	}

	
	return (
		<div className='ItemListContainer'>
			<h1>{props.greeting}</h1>
			<ItemCount initial={1} stock={5} onAdd={onAdd} />
		</div>
	);
};

export default ItemListContainer;
