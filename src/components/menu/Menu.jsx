import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/artists">Lista de artistas</Link></li>
                <li><Link to="/artists/BoyWithUke">BoyWithUke</Link></li>
                <li><Link to="/artists/LP">LP</Link></li>
                <li><Link to="/artists/Queen">Queen</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;
