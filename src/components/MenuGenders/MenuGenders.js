import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

const MenuGenders = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const styles = {
		popUpBtn: {
			textDecoration: 'none',
			color: 'white',
			fontSize: 18,
			fontWeight: 'bold',
			textTransform: 'lowercase',
		},
		upperText: {
			textTransform: 'uppercase',
		},
		link: {
			color: 'black',
			fontSize: 16,
			textDecoration: 'none',
		},
	};

	return (
		<div>
			<Button
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Categorías
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem>
					<Link to='/genre/pintura' style={styles.link}>
						Pintura
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/genre/papeleria' style={styles.link}>
						Papeleria
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/genre/crochet' style={styles.link}>
						Crochet
					</Link>
				</MenuItem>				
			</Menu>
		</div>
	);
};

export default MenuGenders;
