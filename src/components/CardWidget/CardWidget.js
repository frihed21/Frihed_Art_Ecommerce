import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CartContext from '../../Context/UseContext';

export default function CardWidget ({items}) {
	const {items} = React.useContext(CartContext)
	let itemsInCart = 0;

	items.map((item) => {
		itemsInCart = itemsInCart + item.qty;
	})
	
	return (
		<Card sx={{ maxWidth: 245, margin: 10  }}>
			<CardActionArea>
				<CardMedia 
					component='img'
					image={items.img} alt={items.title} 
				/>				
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						name: {items.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						description: {items.description}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						price: {items.price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						stock: {items.stock}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						genre: {items.genre}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}