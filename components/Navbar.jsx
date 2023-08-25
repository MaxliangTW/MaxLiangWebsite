import React from 'react'
import style from './styles/Navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
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
        <a href='#' className={style.about}>About</a>
        <a href='#' className={style.resume}>Resume</a>
        <a href='#' className={style.protflio}>Protflio</a>
      </nav>
    </header>
  )
}

export default Navbar

