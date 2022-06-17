import './NavBar.css';
import '../components/CardWidget/CardWidget';

const NavBar = (props) => {
	console.log(props);
    
    return (     
        
        <nav className="header__container2">           
            <ul className="header__list">
                    <li className="header__item"><a className="header__link" href="./nosotros/nosotros.html">BIO</a></li>
                    <li className="header__item header__item--hover"><a className="header__link" href="#">PINTURAS</a> 
                        <ul className="header__sublist"> 
                            <li className="header__subitem"><a className="header__sublink" href="./pinturas/acuarelas.html">ACUARELA</a></li>
                            <li className="header__subitem"><a className="header__sublink" href="./pinturas/acrilicos.html">ACRILICO</a></li>
                            <li className="header__subitem"><a className="header__sublink" href="./pinturas/digital.html">DIGITAL</a></li>
                        </ul>
                    </li>
                    <li className="header__item header__item--hover"><a className="header__link" href="#">PAPELERIA</a> 
                        <ul className="header__sublist"> 
                            <li className="header__subitem"><a className="header__sublink" href="./papeleria/cuadernos.html">CUADERNOS</a></li>
                            <li className="header__subitem"><a className="header__sublink" href="./papeleria/greetingcard.html">GREETING CARD SET</a></li>
                        </ul>
                    </li>
                    <li className="header__item header__item--hover"><a className="header__link" href="#">CROCHET</a> 
                        <ul className="header__sublist"> 
                            <li className="header__subitem"><a className="header__sublink" href="./crochet/amigurumis.html">AMIGURUMIS</a></li>
                            <li className="header__subitem"><a className="header__sublink" href="./crochet/ropa.html">ROPA</a></li>
                        </ul>
                    </li>
                    <li className="header__item"><a className="header__link" href="./contacto/contacto.html">CONTACTO</a></li>
            </ul>
            <form action="" method="get" enctype="text/plain">
                <input className="header__input" type="search" name="s" id="idsearch" placeholder="  Buscar..." /> 
            </form>    
        </nav>   
                              
    )
};

export default NavBar;