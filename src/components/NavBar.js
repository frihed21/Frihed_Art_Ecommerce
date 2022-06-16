import "./NavBar.css";
import "../components/CartWidget/CartWidget";

const NavBar = () => {
    
    return (     
        
        <nav class="header__container2">           
            <ul class="header__list">
                    <li class="header__item"><a class="header__link" href="./nosotros/nosotros.html">BIO</a></li>
                    <li class="header__item header__item--hover"><a class="header__link" href="#">PINTURAS</a> 
                        <ul class="header__sublist"> 
                            <li class="header__subitem"><a class="header__sublink" href="./pinturas/acuarelas.html">ACUARELA</a></li>
                            <li class="header__subitem"><a class="header__sublink" href="./pinturas/acrilicos.html">ACRILICO</a></li>
                            <li class="header__subitem"><a class="header__sublink" href="./pinturas/digital.html">DIGITAL</a></li>
                        </ul>
                    </li>
                    <li class="header__item header__item--hover"><a class="header__link" href="#">PAPELERIA</a> 
                        <ul class="header__sublist"> 
                            <li class="header__subitem"><a class="header__sublink" href="./papeleria/cuadernos.html">CUADERNOS</a></li>
                            <li class="header__subitem"><a class="header__sublink" href="./papeleria/greetingcard.html">GREETING CARD SET</a></li>
                        </ul>
                    </li>
                    <li class="header__item header__item--hover"><a class="header__link" href="#">CROCHET</a> 
                        <ul class="header__sublist"> 
                            <li class="header__subitem"><a class="header__sublink" href="./crochet/amigurumis.html">AMIGURUMIS</a></li>
                            <li class="header__subitem"><a class="header__sublink" href="./crochet/ropa.html">ROPA</a></li>
                        </ul>
                    </li>
                    <li class="header__item"><a class="header__link" href="./contacto/contacto.html">CONTACTO</a></li>
            </ul>
            <form action="" method="get" enctype="text/plain">
                <input class="header__input" type="search" name="s" id="idsearch" placeholder="  Buscar..." /> 
            </form>    
        </nav>   
                              
    )
};

export default NavBar;