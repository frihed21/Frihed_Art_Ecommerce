import React, { useState, createContext } from 'react';

export const ItemsContext = createContext();

const initialState = () => [
	{
		id: 37842,
		artist: 'BURBUJAS DE AMOR',
		description: 'Digital 20CM * 40 CM',
		price: 70,
		stock: 4,
	},
];

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([initialState]);

	return (
		<ItemsContext.Provider value={[items, setItems]}>
			{children}
		</ItemsContext.Provider>
	);
};
