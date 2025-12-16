import { Link } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Menu = () => {
    const usuario = useContext(UserContext);
    return (
        <nav className="main-menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/artists">Lista de artistas</Link></li>
                <li><Link to="/artists/BoyWithUke">BoyWithUke</Link></li>
                <li><Link to="/artists/LP">LP</Link></li>
                <li><Link to="/artists/Queen">Queen</Link></li>
                <li><Link to="/perfil">Perfil de {usuario.nombre}</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;
