import React, { useState } from 'react';
import './App.css';


// Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
import CardWidget from './components/CardWidget/CardWidget';
import ItemCount from './components/ItemListContainer/ItemCount';
import Footer from './components/Footer/Footer';


const title = 'FRIHED ART';
const App = () => {	
	
	const [name, setName] = useState('Lucía');
	const [counter, setcounter] = useState(0);

	const handlerCounterUp = () => {
		setcounter(counter + 1);
		// alert('Hello World');
	};

	const handlerCounterMinus = () => {
		setcounter(counter - 1);
	};

	const handlerUpdateName = () => {
		setName('Verónica');
	};

return (
		<div className='App'>
			<NavBar />
			<Header title={title} subtitle='Katerin Morales' />
			<ItemListContainer greeting= 'Bienvenido a mi tienda'/>			
			<p>User Name: {name}</p>			
			<button onClick={handlerUpdateName}>Actualizar Nombre</button>
				<div className='UserSection'>
					<CardWidget
						name='Woman In Aqua'
						price='s/ 120.00'
						description='Pintura en acuarela de 60x 80 cm'
						img ='https://i.pinimg.com/originals/ed/5f/d2/ed5fd2d4e24e4ed7103b046db665eaab.jpg'            
					/>
					<CardWidget
						name='The New Pink'
						price='s/ 70.00'
						description='Cuaderno tamaño A4 con 200 hojas blancas'
						img='http://d2r9epyceweg5n.cloudfront.net/stores/001/205/159/products/20200712_17271511-ff30c7a1fdb79ea17b15948493947185-640-0.jpg'
					/>
					<CardWidget
						name='Top Cuello Tortuga'
						price='s/ 140.00'
						description='Top a crochet con cuello tortuga tallas S/M'
						img='http://http2.mlstatic.com/D_750356-MLA45417495888_042021-O.jpg'
					/>
				</div>
			<div className='CounterSection'>
				<p>Counter: {counter}</p>
				<div className='btn-section'>
					<button onClick={handlerCounterUp}>Incrementar</button>
					<button onClick={handlerCounterMinus}>Decrementar</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;