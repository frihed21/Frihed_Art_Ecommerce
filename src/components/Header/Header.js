import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import img from '../../assets/logo.svg';

const Header = () => {
	return (
		
		<div className='Header'>
			<div className="container-fluid mt-4">
            <div className="row footer-center">
                <div className="col-md-4 mb-col-lg-6">
                    <a className="header__anchorlogo" href="/">
                        <h1 className="header__name animate__animated animate__backInLeft">Frihed Art</h1>
                    </a>
                </div>
                <div className="col-md-4 col-lg-4 text-center">
                    <a className="header__imagelogo" href="#">            
						<Link to='/'>
							<img src={img} alt='logo' width='150' />
						</Link>
                        <h3 className="header__h3">KATERIN HINOSTROZA</h3>
                    </a>
                </div>                
            </div>
        </div>

			
		</div>
	);
};

export default Header;