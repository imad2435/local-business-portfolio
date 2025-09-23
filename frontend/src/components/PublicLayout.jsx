import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';

const PublicLayout = () => {
  return (
    <>
      <Hero />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;