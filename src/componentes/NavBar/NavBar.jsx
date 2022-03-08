import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { navLinks } from '../../utils/data';
import logo from '../../img/black.svg';
import winebox from '../../img/winebox.svg';
import conta from '../../img/conta.svg';
import busca from '../../img/Busca.svg';
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
        <Image src={busca} />
        <Image src={conta} />
        <Link href="/cart">
          <Image src={winebox} alt="Carrinho" />
        </Link>
        {/* <SearchBar /> */}
      </div>
    </header>
  );
}
