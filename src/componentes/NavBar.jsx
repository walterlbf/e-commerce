import Link from 'next/link';
import React from 'react';
import { navLinks } from '../utils/data';
import logoIcon from '../img/black.svg';

export default function navBar() {
  return (
    <header>
      <nav>
        <img src={logoIcon} alt="logo" />
        {navLinks.map((link) => (
          <ul>
            <Link href={link.path}>
              <li>{link.name}</li>
            </Link>
          </ul>
        ))}
      </nav>
    </header>
  );
}
