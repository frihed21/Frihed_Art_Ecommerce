import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardWidget = ({ img, name, price, description }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={img} alt='products' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CardWidget;