import Link from 'next/link';
import React from 'react';
import { navLinks } from '../utils/data';
import logoIcon from '../img/black.svg';

export default function navBar() {
  return (
    <header>
      <nav>
        <img src={logoIcon} alt="logo" />
        {navLinks.map((link, index) => (
          <ul>
            <Link href={link.path}>
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
        ))}
      </nav>
    </header>
  );
}
