import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import img from '../../assets/logo.svg';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/'>
				<img src={img} alt='logo' width='150' />
			</Link>
		</div>
	);
};

export default Header;