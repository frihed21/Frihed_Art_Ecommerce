import React, { useState, useEffect } from 'react';
import './App.css';


// Firebase
import { db } from './firebase/firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';

// COMPONENTS
import Header from '../src/components/Header/Header';
import CardProduct from '../src/components/CardWidget/CardWidget';

const title = 'FRIHED ART';
const App = () => {
	const [productData, setProductsData] = useState([]);

	// Call Products in firestore
	const getProducts= async () => {
		const p = query(collection(db, 'arte'));
		
		const querySnapshot = await getDocs(p);
		const docs = [];
		// console.log(querySnapshot);
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			docs.push({ ...doc.data(), id: doc.id });
		});
		// console.log(docs);
		setProductsData(docs);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className='App'>
			<Header />
			{productData.map((producto) => {
				return <CardProduct data={producto} key={producto.id} />;
			})}
		</div>
	);
};

export default App;






