import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/Api';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try{
      await axiosInstance.post('/api/logout', {
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

export default Logout;