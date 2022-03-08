import React from 'react';
import NavBar from './NavBar/NavBar';

const layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default layout;
