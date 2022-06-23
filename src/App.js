import React, { useState } from 'react';
import './App.css';


// Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
import CardWidget from './components/CardWidget/CardWidget';
import Footer from './components/Footer/Footer';
import ItemList from './components/ItemListContainer/ItemList';

const title = 'FRIHED ART';
const App = () => {	
		
return (
		<div className='App'>
			<NavBar />
			<Header title={title} subtitle='Katerin Morales' />
			<ItemListContainer greeting= 'Bienvenido a mi tienda'/>		
			<ItemList />			
			<Footer />
		</div>
	);
};

export default App;