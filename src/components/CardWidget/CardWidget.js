import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import CartContext from '../../Context/UseContext';

const CardWidget = ({productsData}) => {
		
	return (
		<Card sx={{ maxWidth: 345, margin: 5 }}>		
				<CardMedia component='img' image={productsData.img} alt='frihed art'/>				
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{productsData.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Description: {productsData.description}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Genre: {productsData.genre}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Price: s/. {productsData.price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Stock: {productsData.stock}
					</Typography>					
				</CardContent>			
		</Card>
	);
};

export default CardWidget;