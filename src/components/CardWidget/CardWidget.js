import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CartContext from '../../Context/UseContext';

export default function CardWidget ({ items}) {
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
					height = '120'
					image={items.url}
					alt='products'
				 />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{items.login}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{items.id}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{items.title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}