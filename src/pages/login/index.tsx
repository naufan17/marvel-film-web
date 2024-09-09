import React from 'react';
import Header from '../../components/layout/Header';
import Main from './section/Login';

const Login: React.FC = () => {
  return (
    <div>
      <Header title="Login"/>
      <Main/>
    </div>
  );
}

export default Login;