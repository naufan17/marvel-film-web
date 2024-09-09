import { useEffect } from 'react';
import { useAuth } from '../../context/UseAuth'

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
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [])

  return null;
}

export default Logout;