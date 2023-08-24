import React from 'react'
import style from './styles/Navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className={style.Navbar}>
      <nav className={style.navigation}>
        <p className={style.logo}>MaxLiang</p>
        <p href='#' className={style.about}>About</p>
        <p href='#' className={style.resume}>Resume</p>
        <p href='#' className={style.protflio}>Protflio</p>
      </nav>
    </header>
  )
}

export default Navbar

