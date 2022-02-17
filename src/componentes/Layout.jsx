import React from 'react';
import NavBar from '../componentes/NavBar/NavBar';

const layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default layout;
