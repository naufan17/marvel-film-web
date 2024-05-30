import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../middleware/AuthProvider';

import axios from '../../config/Api';

export default function Main() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const logoutUser = async () => {
        try{
            await axios.post('/api/logout', {
                withCredentials: true,
            });
            logout();
            navigate('/marvel-film-web/login');
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        logoutUser();
    })

    return null;
}