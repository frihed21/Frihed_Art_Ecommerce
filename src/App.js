import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// COMPONENTS
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation';
//Context
import { ItemsProvider } from './context/ItemsContext';
// VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Shop from './views/Shop/Shop';
import ItemDetail from './views/ItemDetail/ItemDetail';
import GenreType from './views/GenreType/GenreType';

const title = 'FRIHED ART';
const App = () => {
	return (
		<Router>
			<ItemsProvider>
				<div className='App'>
					<Header />
					<ResponsiveNavigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/detail/:id' element={<ItemDetail />} />
						<Route path='/genre/:genre' element={<GenreType />} />
					</Routes>
					<Footer />
				</div>
			</ItemsProvider>
		</Router>
	);
};

export default App;
