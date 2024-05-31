import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../config/Api';

export default function Main() {
    const navigate = useNavigate();

    const logoutUser = async () => {
        try{
            await axios.post('/api/logout', {
                withCredentials: true,
            });
            sessionStorage.removeItem('token');
            navigate('/marvel-film-web/login');
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        logoutUser()
    }, [])

    return null;
}