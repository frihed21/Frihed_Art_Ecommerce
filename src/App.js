import React, {Component} from 'react';
import './style.css';
import './App.css';

// Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header/Header';
import CardComponent from './components/CartWidget/CartWidget';
import Footer from './components/Footer/Footer';

const title = 'FRIHED ART';

class App extends Component{
  
  constructor() {
		super();
		this.state = {
			name: 'Sebastian',
			counter: 0,
		};
	}
 

	handlerCounterUp = () => {
		this.setState({ counter: this.state.counter + 1 });
		// alert('Hello World');
	};

	handlerCounterMinus = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	handlerUpdateName = () => {
		this.setState({ name: 'Lorena' });
	};

	render() {
		return (
                   
			<div className='App'>
        <NavBar/>              
        <ItemListContainer greeting='BIENVENIDO A MI TIENDA'/>  
				<Header title={title} subtitle='Katerin Hinostroza' />
				<p>User Name: {this.state.name}</p>

				<button onClick={this.handlerUpdateName}>Actualizar Nombre</button>
				<div className='UserSection'>
					<CardComponent
						name='Woman In Aqua'
						price='s/ 120.00'
						description='Pintura en acuarela de 60x 80 cm'
						img ='https://i.pinimg.com/originals/ed/5f/d2/ed5fd2d4e24e4ed7103b046db665eaab.jpg'            
					/>
					<CardComponent
						name='The New Pink'
						price='s/ 70.00'
						description='Cuaderno tamaño A4 con 200 hojas blancas'
						img='http://d2r9epyceweg5n.cloudfront.net/stores/001/205/159/products/20200712_17271511-ff30c7a1fdb79ea17b15948493947185-640-0.jpg'
					/>
					<CardComponent
						name='Top Cuello Tortuga'
						price='s/ 140.00'
						description='Top a crochet con cuello tortuga tallas S/M'
						img='http://http2.mlstatic.com/D_750356-MLA45417495888_042021-O.jpg'
					/>
				</div>
				<div className='CounterSection'>
					<p>Counter: {this.state.counter}</p>
					<div className='btn-section'>
						<button onClick={this.handlerCounterUp}>Incrementar</button>
						<button onClick={this.handlerCounterMinus}>Decrementar</button>
					</div>
				</div>
        <Footer/>
			</div>
		);
	}
}

export default App;

