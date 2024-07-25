import { useEffect } from 'react';
import { useAuth } from '../context/UseAuth'

const Logout: React.FC = () => {
  const { logout } = useAuth();

  const logoutUser = async () => {
    try{
      await logout();
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