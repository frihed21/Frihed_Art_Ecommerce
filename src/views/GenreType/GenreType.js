import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardWidget from '../../components/CardWidget/CardWidget';
import Spinner from '../../components/Spinner/Spinner';

import { db } from '../../firebase/firebaseConfig';

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from 'firebase/firestore';

const GenreType = () => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log(productsData);

	const { genre } = useParams();

	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, 'arte'), where('genre', '==', genre));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setProductsData(docs);
		};
		getProducts();
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	}, [genre]);

	return (
		<div>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				productsData.map((data) => {
					return <CardWidget productsData={data} />;
				})
			)}
		</div>
	);
};

export default GenreType;
