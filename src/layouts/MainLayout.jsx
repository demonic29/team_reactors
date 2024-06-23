import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div className='bg-gray-300'>
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;