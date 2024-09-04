import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Main from '../components/detailMovie/DetailMovie';

const DetailMovie: React.FC = () => {  
  const { id } = useParams();
  
  return (
    <div>
      <Header/> 
      <Main id={id}/>
    </div>
  )
}

export default DetailMovie;