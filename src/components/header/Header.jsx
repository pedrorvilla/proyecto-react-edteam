import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => (
    <header className="flex justify-center">
        <nav className='p-4 w-1/2'>
            <ul className='flex justify-around'>
                <li>
                    <NavLink to='/criptomonedas'>Criptomonedas</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
