import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";

const Profile = () => {
    const user = useContext(UserContext);
    return (
        <div className='my-4 flex flex-col items-center'>
            <h2 className='text-blue-800'>Bienvenid@ {user.name}</h2>
            <small className='italic'>Fecha de suscripción: {user.date}</small>
        </div>
    );
}

export default Profile;
