import Header from "./header/Header.jsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default App;
