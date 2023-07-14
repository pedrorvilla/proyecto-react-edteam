import {useParams} from "react-router-dom";
import MoneyHistory from "./MoneyHistory.jsx";
import {usePetition} from "../../hooks/usePetition.js";
import  {formatMXN, formatNatural} from "../../helpers/currency.js";

const CriptoMoney = () => {
    const {id} = useParams();

    const money = usePetition(`assets/${id}`)

    return money && (
        <div className='mt-3 flex flex-col items-center'>
            <div className='border border-dashed rounded border-gray-800 p-4'>
                <h2 className='text-blue-900'>{money.name} ({money.symbol})</h2>
                <p>Rango actual: <span className='font-bold text-blue-900'>{money.rank}</span></p>
                <p>Disponible para Comercio: <span
                    className='font-bold text-blue-900'>{formatNatural(money.supply)}</span></p>
                <p>Precio en dólares: <span
                    className='font-bold text-green-900'>{formatMXN(money.priceUsd)}</span>
                </p>
            </div>
            <MoneyHistory/>
        </div>
    ) || (<span>Cargando . . .</span>);
}

export default CriptoMoney;
