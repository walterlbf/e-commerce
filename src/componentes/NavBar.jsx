import Link from 'next/link';
import React from 'react';
import { navLinks } from '../utils/data';
import logoIcon from '../img/black.svg';

export default function navBar() {
  return (
    <header>
      <img src={logoIcon} alt="logo" />
      <nav>
        <ul>
          {navLinks.map((link) => (
            <Link href={link.path}>
              <li key={link.id}>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <Link href="/cart">
          <img src="../img/winebox.svg" />
        </Link>
      </div>
    </header>
  );
}
