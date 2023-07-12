import {useEffect, useState} from "react";
import './App.css';
import axios from "axios";

function App() {

    const API_URL = import.meta.env.VITE_API_URL;

    const [criptos, setCriptos] = useState();

    useEffect(() => {
        (async () => {
            try {
                let responseAxios = await axios.get(`${API_URL}assets`);
                setCriptos(responseAxios.data.data);
            } catch (e) {
                console.error('Se produjo un error');
            }
        })();
    }, []);

    if (!criptos)
        return <span>Cargando . . .</span>;

    // Alterativa ya que para imprimir una lista, JSX requiere de una colección de
    // datos.
    /*const itemsCriptos = [];
    for (let {id, name, priceUsd} of criptos) {
        itemsCriptos.push(<li key={id}>Nombre: {name} Precio: {priceUsd}</li>)

    }*/

    return (
        <>
            <h1>Lista de criptomonedas</h1>
            <ul>
                {
                    criptos.map(({id, name, priceUsd}) => (
                        <li key={id}>Nombre: {name} <strong>Precio: {priceUsd}</strong></li>
                    ))
                }
            </ul>
        </>
    )
}

export default App;
