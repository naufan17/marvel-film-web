import React from 'react';
import Header from '../components/layout/Header';
import Main from '../components/createMovie/CreateMovie';

const CreateMovie: React.FC = () => {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default CreateMovie;