import React from 'react';
import NavBar from './NavBar';

const layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default layout;
