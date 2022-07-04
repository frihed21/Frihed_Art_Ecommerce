import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import CardWidget from '../../components/CardWidget/CardWidget';
import './ProductDetail.css';

const ProductDetail = () => {
	const [character, setCharacter] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${id}`).then((res) =>
			setCharacter(res.data)
		);
	}, [id]);

	return (
		<div className='CharacterList-Container'>
			<div className='CharacterList-detail'>
				{character.map((char) => {
					return (
						<div key={char.char_id}>
							<CardWidget data={char} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductDetail;
