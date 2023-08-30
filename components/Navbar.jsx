"use client"

import React from 'react'
import style from './styles/Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
  const scrollToAbout = (event) => {
    const aboutSection = document.getElementById('About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className={style.Navbar}>
      <Image
        className={style.logo}
        width={120}
        height={50}
        src="/MaxLiang.png"
        alt='Logo'
      />
      <nav className={style.navigation}>
        <a href='#About' className={style.about} onClick={scrollToAbout}>
           About
        </a>
        <a href='#' className={style.resume}>Resume</a>
        <a href='#' className={style.protflio}>Protflio</a>
      </nav>
    </header>
  )
}

export default Navbar

