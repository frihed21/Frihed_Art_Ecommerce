import React, { useState, useEffect } from 'react';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';
import './CharacterList.css';
import Spinner from '../Spinner/Spinner';

// FIREBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';


const CharacterList = () => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log(productsData);

	useEffect(() => {
		const getProducts = async () => {
			const p = query(collection(db, 'frihed'));
			const docs = [];
			const querySnapshot = await getDocs(p);
			
			querySnapshot.forEach((doc) => {
				
				docs.push({ ...doc.data(), id: doc.id });
			});
			
			setProductsData(docs);
		};
		getProducts();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				<div className='CharacterListContainer'>
					{productsData.map((data) => {
						return (
							<Link to={`detail/${data.id}`} key={data.id}>
								<CardWidget productsData={data} />
							</Link>
						);
					})}
				</div>
			)}
		</>
	);
};

export default CharacterList;
