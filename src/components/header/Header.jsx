import {useContext} from "react";
import {NavLink} from "react-router-dom";
import './Header.css';
import {UserContext} from "../../context/UserContext.jsx";

const Header = () => {
    const user = useContext(UserContext)
    return (
        <header className="flex justify-center">
            <nav className='p-4 w-1/2'>
                <ul className='flex justify-around'>
                    <li>
                        <NavLink to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/criptomonedas'>Criptomonedas</NavLink>
                    </li>
                    <li>
                        <NavLink to='/perfil'>Perfil de {user.name}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
