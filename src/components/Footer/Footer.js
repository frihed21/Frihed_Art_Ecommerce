import React from 'react';
import "./Footer.css";

// import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'
// import {faInstagram} from '@fortawesome/free-brands-svg-icons';
// import {faTwitter} from '@fortawesome/free-brands-svg-icons';
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';
// import {faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    
    return (

        <footer class="footer">
            <div class="pt-5 fs-5 footer__bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mb-lg-0">
                            <h3 class="fw-bold text-uppercase mb-3 footer__title">frihed art</h3>
                            <p class="footer__subtitle">Káterin Hinostroza galería</p>
                            <p class="footer__text">Calle 7 Urb. Pta de Pro - Los Olivos, Lima - Perú</p>
                            <p class="footer__subtitle">Atención al cliente: <span class="footer__text">+51 997127018| krafort2121@gmail.com</span> </p>
                            <p class="footer__subtitle">Contactos comerciales/corporativos: <span class="footer__text">+51 945223183</span></p>
                            <p class="footer__text">Katerin Hinostroza® | Pollito de acuarela® 2022</p>
                        </div>

                        <div class="col-md-6 mb-lg-0">
                            <h3 class=" fw-bold text-heading mb-3 footer__title">BOUTIQUES DONDE ENCUENTRAS NUESTRAS OBRAS</h3>
                            <div class="textwidget">
                                <div style="display: flex;">
                                    <ul class="footer__ul">
                                        <li class="footer__li">
                                            <div class="title-footer-gal footer__subtitle">DecoArt</div>
                                            <div class="footer__text">Av. Los Pinos 165 - San Isidro</div>
                                        </li>
                                        <li class="footer__li">
                                            <div class="title-footer-gal footer__subtitle">Makart</div>
                                            <div class="footer__text">Calle Asturias 345 - Los Olivos</div>
                                        </li>
                                        <li class="footer__li">
                                            <div class="title-footer-gal footer__subtitle">Artset</div>
                                            <div class="footer__text">Jr. Camana 162 - Centro Lima</div>
                                        </li>
                                    </ul>
                                    <ul class="footer__ul">
                                        <li class="footer__li">
                                            <div class="title-footer-gal footer__subtitle">Lunadeco</div>
                                            <div class="footer__text"> Av. Petit Thouars 34 - Miraflores</div>
                                        </li>
                                        <li class="footer__li">
                                            <div class="title-footer-gal footer__subtitle">Drafty</div>
                                            <div class="footer__text">Av. San Geronimo 162 - San Borja</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row pt-4 footer__links">
                        <div class="col-md-3 mb-3 mb-lg-0">
                            <h3 class="fw-bold mb-3 footer__title">LINKS RÁPIDOS</h3>
                            <ul class="footer__ul">
                                <li class="footer__li"><a class="footer__a" href="./pages/nosotros.html">Biografía</a></li>
                                <li class="footer__li"><a class="footer__a" href="./pages/preguntas.html">Preguntas</a></li>
                                <li class="footer__li"><a class="footer__a" href="./pages/contacto.html">Contacto</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 mb-3 mb-lg-0">
                            <h3 class="fw-bold mb-3 footer__title">MI CUENTA</h3>
                            <ul>
                                <li class="footer__li"><a class="footer__a" href="#">Inicio de Sesión/Regístrate</a></li>
                                <li class="footer__li"><a class="footer__a" href="#">Carrito</a></li>
                                <li class="footer__li"><a class="footer__a" href="#">Lista de Favoritos</a></li>
                                <li class="footer__li"><a class="footer__a" href="#">Órdenes</a></li>
                            </ul>
                        </div>

                        <div class="col-md-6 mb-3 mb-lg-0">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="footer__a" href="https://www.facebook.com/KaterinHinostroza21/" target="_blank">
                                         <faFacebook className="footer__svg" />   
                                    </a>
                                    <p class="footer__text">Facebook</p>
                                </li>
                                <li class="list-inline-item">
                                    <a class="footer__a" href="https://www.instagram.com/katmor_frihed21/" target="_blank">
                                        <faInstagram className="footer__svg" />
                                    </a>
                                    <p class="footer__text">Instagram</p>
                                </li>
                                <li class="list-inline-item">
                                    <a class="footer__a" href="https://twitter.com/zhindiikraf" target="_blank">
                                         <faTwitter className="footer__svg" />   
                                    </a>
                                    <p class="footer__text">Twitter</p>
                                </li>
                                <li class="list-inline-item">
                                    <a class="footer__a" href="https://github.com/frihed21/Tienda_Frihed_Art" target="_blank">
                                        <faGithub className="footer__svg" />
                                    </a>
                                    <p class="footer__text">Github</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__last p-2">
                <p class="footer__text footer__textlast">Todos los derechos reservados.Lima - Perú
                    <br></br> Diseñado por Katerin Hinostroza® </p>
            </div>
        </footer>

    );
}

export default Footer;