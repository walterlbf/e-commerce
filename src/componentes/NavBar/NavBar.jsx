import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { navLinks } from '../../utils/data';
import logo from '../../img/black.svg';
import winebox from '../../img/winebox.svg';
// import SearchBar from '../SeachBar/SearchBar';

export default function navBar() {
  return (
    <header>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <Link key={link.id} href={link.path}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <Link href="/cart">
          <Image src={winebox} alt="Carrinho" />
        </Link>
        {/* <SearchBar /> */}
      </div>
    </header>
  );
}
