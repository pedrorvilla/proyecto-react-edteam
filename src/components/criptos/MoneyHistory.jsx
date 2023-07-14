import {usePetition} from "../../hooks/usePetition.js";
import {useParams} from "react-router-dom";
import {formatMXN} from "../../helpers/currency.js";
import {formatDate} from "../../helpers/dates.js";

const MoneyHistory = () => {

    const {id} = useParams()
    const history = usePetition(`assets/${id}/history`, {interval: 'd1'});

    return history && (
        <div className='my-4'>
            <h3 className='text-blue-900'>Historial de Precio</h3>
            <table className='w-full table-auto'>
                <thead>
                <tr>
                    <th>Precio Ponderado</th>
                    <th>Hora</th>
                </tr>
                </thead>
                <tbody>
                {
                    history.reverse().map(({priceUsd, time}) => {
                        return (
                            <tr key={time} className='text-center odd:bg-blue-100 even:bg-gray-100'>
                                <td>{formatMXN(priceUsd)}</td>
                                <td>{formatDate(time)}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );

}

export default MoneyHistory;
