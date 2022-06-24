import React, { useState } from 'react';
import './App.css';


// Components
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const title = 'FRIHED ART';
const App = () => {	
		
return (
		<div className='App'>
			<NavBar />
			<Header title={title} subtitle='Katerin Morales' />	
			<ItemListContainer /> 
      		<ItemDetailContainer />			
			<Footer />
		</div>
	);
};

export default App;