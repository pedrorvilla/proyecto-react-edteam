import {createBrowserRouter} from "react-router-dom";
import App from "../components/App.jsx";
import Page404 from "../components/Page404.jsx";
import GridCriptos from "../components/criptos/GridCriptos.jsx";
import Home from "../components/Home.jsx";
import CriptoMoney from "../components/criptos/CriptoMoney.jsx";
import Profile from "../components/Profile.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/perfil',
                element: <Profile/>
            }
        ],
        errorElement: <Page404/>
    },
    {
        path: '/criptomonedas',
        element: <App/>,
        children: [
            {
                index: true,
                element: <GridCriptos/>
            },
            {
                path: ':id',
                element: <CriptoMoney />
            }
        ]
    }
]);

export default router;