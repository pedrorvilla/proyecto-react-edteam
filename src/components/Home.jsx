import {Link} from "react-router-dom";

const Home = () => (
    <div className='container'>
        <h1 className='text-center'>Bienvenido</h1>
        <p className='text-center my-1'><small>Sitio para conocer el estado de las criptomonedas más utilizadas</small></p>
        <div className="flex justify-center">
            <Link to='/criptomonedas'>
            <span className='p-2 bg-sky-800 rounded text-base text-white font-bold hover:bg-sky-700'>
                    Ver Criptomonedas
            </span>
            </Link>
        </div>
    </div>
);

export default Home;
