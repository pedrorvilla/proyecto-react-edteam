import ReactDOM from 'react-dom/client'
import router from "./routes/routes.jsx";
import {RouterProvider} from "react-router-dom";

import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
