import React from 'react';
import './Header.css';

import img from '../../assets/logo.svg';

const Header = (props) => {
	return (
		<div className='Header'>
			<img src={img} alt='logo de tienda' />
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
};

export default Header;
