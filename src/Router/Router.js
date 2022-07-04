import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
// import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// VIEWS
import Contacto from '../views/Contacto/Contacto';
import Crochet from '../views/Crochet/Crochet';
import Papeleria from '../views/Papeleria/Papeleria';
import Pintura from '../views/Pintura/Pintura';
import ProductDetail from '../views/ProductDetail/ProductDetail';
const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Header />
        <NavBar />
        <div className='App'>
            <Routes>
                <Route path='/' element={<Pintura />} />
                <Route path='/Papeleria' element={<Papeleria />} />
                <Route path='/Crochet' element={<Crochet />} />
                <Route path='/Contacto' element={<Contacto />} />
                <Route path='/detail/:id' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>			
        </div>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default Router