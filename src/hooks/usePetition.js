import {useEffect, useState} from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export function usePetition(endPoint, queryParams) {

    const [state, setState] = useState();
    useEffect(() => {
        (async () => {
            try {
                let axiosResponse = await axios.get(`${API_URL}${endPoint}`, {
                    ...(queryParams && {params: queryParams})
                });
                setState(axiosResponse.data.data);
            } catch (e) {
                console.error(`Se produjo un error al llamar la data:\n${e}`);
            }
        })();
    }, []);

    return state;
}
