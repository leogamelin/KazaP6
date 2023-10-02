import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg'
// Style de la page
import "./header.css";

function Header() {
    
    return (
    <header className="header"> 
        <img src={logo} alt="Kasa" className="header__logo"/>
        <nav className="header__link">
            <Link to="/" className="header__link__active">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </nav>  
    </header>
    )
}

export default Header;