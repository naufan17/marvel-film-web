import React from 'react';
import Header from '../components/layout/Header';
import Main from '../components/home/Home';

const Home: React.FC = () => {
  return (
    <div>
      <Header title = {'Marvel Film & Series'} /> 
      <Main/>
    </div>
  );
}

export default Home;