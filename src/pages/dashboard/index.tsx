import React from 'react';
import Header from '../../components/layout/Header';
import Main from './section/Dashboard';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default Dashboard;