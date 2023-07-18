import Header from "./header/Header.jsx";
import {Outlet} from "react-router-dom";
import {UserContextProvider} from "../context/UserContext.jsx";

function App() {
    return (
        <>
            <UserContextProvider>
                <Header/>
                <div className="container">
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </UserContextProvider>
        </>
    )
}

export default App;
