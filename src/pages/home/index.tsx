import React from 'react';
import Header from '../../components/layout/Header';
import Main from './section/Home';

const Home: React.FC = () => {
  return (
    <div>
      <Header title = {'Marvel Film & Series'} /> 
      <Main/>
    </div>
  );
}

export default Home;