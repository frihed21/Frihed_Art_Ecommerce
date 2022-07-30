import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './AlbumDetails.css';
import CardWidget from '../../components/CardWidget/CardWidget';
import Spinner from '../../components/Spinner/Spinner';

import { db } from '../../firebase/firebaseConfig';

// FIRBASE - FIRESTORE
import {
	collection,
	query,
	getDocs,
	documentId,
	where,
} from 'firebase/firestore';

const ItemDetail = () => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log(productsData);

	const { id } = useParams();

	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, 'frihed'), where(documentId(), '==', id));
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
	}, [id]);

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

export default ItemDetail;
