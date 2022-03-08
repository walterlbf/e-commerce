import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { navLinks } from '../../utils/data';
import logo from '../../img/black.svg';
import winebox from '../../img/winebox.svg';
import conta from '../../img/conta.svg';
import busca from '../../img/Busca.svg';
import styles from './NavBar.module.css';
// import SearchBar from '../SeachBar/SearchBar';

export default function navBar() {
  return (
    <header className={styles.headerContainer}>
      <div className="logo-box">
        <Image src={logo} alt="logo" width={103} height={31} />
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
      <div className="right-itens">
        <Image src={busca} width={56} height={56} />
        <Image src={conta} width={56} height={56} />
        <Link href="/cart">
          <Image src={winebox} alt="Carrinho" />
        </Link>
        {/* <SearchBar /> */}
      </div>
    </header>
  );
}
