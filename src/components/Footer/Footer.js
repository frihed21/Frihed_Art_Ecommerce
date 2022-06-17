import * as React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    
    return (  

    <div className="footer">
        <div className="row pt-4 footer__links">
            <div className="col-md-3 mb-3 mb-lg-0">
                <h3 className="fw-bold mb-3 footer__title">LINKS RÁPIDOS</h3>
                <ul className="footer__ul">
                    <li className="footer__li"><a className="footer__a" href="./pages/nosotros.html">Biografía</a></li>
                    <li className="footer__li"><a className="footer__a" href="./pages/preguntas.html">Preguntas</a></li>
                    <li className="footer__li"><a className="footer__a" href="./pages/contacto.html">Contacto</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-3 mb-lg-0">
                <h3 className="fw-bold mb-3 footer__title">MI CUENTA</h3>
                <ul>
                    <li className="footer__li"><a className="footer__a" href="#">Inicio de Sesión/Regístrate</a></li>
                    <li className="footer__li"><a className="footer__a" href="#">Carrito</a></li>
                    <li className="footer__li"><a className="footer__a" href="#">Lista de Favoritos</a></li>
                    <li className="footer__li"><a className="footer__a" href="#">Órdenes</a></li>
                </ul>
            </div>

            <div className="col-md-6 mb-3 mb-lg-0">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a className="footer__a" href="https://www.facebook.com/KaterinHinostroza21/" target="_blank">
                          <FontAwesomeIcon icon = {faFacebookF} className="footer__svg" />
                        </a>
                        <p className="footer__text">Facebook</p>
                    </li>
                    <li className="list-inline-item">
                        <a className="footer__a" href="https://www.instagram.com/katmor_frihed21/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="footer__svg" />   
                        </a>
                        <p className="footer__text">Instagram</p>
                    </li>
                    <li className="list-inline-item">
                        <a className="footer__a" href="https://twitter.com/zhindiikraf" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="footer__svg" />   
                        </a>
                        <p className="footer__text">Twitter</p>
                    </li>
                    <li className="list-inline-item">
                        <a className="footer__a" href="https://github.com/frihed21/Frihed_Art_Ecommerce" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="footer__svg" />   
                        </a>
                        <p className="footer__text">Github</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer__last">
                <p className="footer__text footer__textlast">Todos los derechos reservados.<br></br>Lima - Perú
                    <br></br> Diseñado por Katerin Hinostroza® </p>
        </div>
    </div>
);
    
}

export default Footer;