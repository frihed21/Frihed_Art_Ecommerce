import React, { useState, useEffect } from 'react';

import CardWidget from '../CardWidget/CardWidget';

const ItemList = () => {
	const [produc, setProduc] = useState([]);

	
	useEffect(() => {
		// Llamada a la api
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((json) => setProduc(json));
	}, []);

	return (
		<div>
			<h1>Productos</h1>
			{produc.map((prod) => (
				<CardWidget key={prod.id} items={prod} />
			))}
		</div>
	);
};

export default ItemList;
