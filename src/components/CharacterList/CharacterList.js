import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardWidget from '../CardWidget/CardWidget';
import './CharacterList.css';

//LINK ROUTER DOM

import { Link } from 'react-router-dom';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) =>
			setCharacters(res.data)
		);
	}, []);

	return (
		<div className='CharacterList-container'>
			{characters.map((char) => {
				return (
					<div key={char.char_id}>
						<Link to={`/detail/${char.char_id}`}>
							<CardWidget data={char} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default CharacterList;
