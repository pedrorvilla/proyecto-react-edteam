import {useEffect, useState} from "react";
import axios from "axios";
import Cripto from "./Cripto.jsx";
import {usePetition} from "../../hooks/usePetition.js";

const GridCriptos = () => {

    const criptos = usePetition('assets');

    if (!criptos)
        return <span>Cargando . . .</span>

    return (
        <>
            <h1 className='text-center'>Lista de Criptomonedas</h1>
            <div className="p-2">
                <ul className="grid grid-cols-3 gap-2">
                    {
                        criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
                            <Cripto
                                key={id}
                                id={id}
                                name={name}
                                priceUsd={priceUsd}
                                symbol={symbol}
                                changePercent24Hr={changePercent24Hr}/>)
                        )
                    }
                </ul>
            </div>
        </>
    );
}

export default GridCriptos;
