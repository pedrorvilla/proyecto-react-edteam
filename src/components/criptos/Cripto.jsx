import './Cripto.css';
import {Link} from "react-router-dom";
import {formatMXN, formatNatural} from "../../helpers/currency.js";

const Cripto = ({id, name, priceUsd, symbol, changePercent24Hr}) => {

    return (
        <li className='list-cripto'>
            <Link to={`/criptomonedas/${id}`}>
                <h6 className='text-blue-900'>{name}</h6>
                <p>Símbolo: <span className='info text-violet-900'>{symbol}</span></p>
                <p>Precio: <span className='info text-violet-900'>{formatMXN(priceUsd)}</span></p>
                <p>Variación en 24Hr: <span
                    className={`info ${changePercent24Hr < 0 ? 'text-red-600' : 'text-lime-600'}`}>{formatNatural(changePercent24Hr)}%</span>
                </p>
            </Link>
        </li>
    )
}

export default Cripto;
