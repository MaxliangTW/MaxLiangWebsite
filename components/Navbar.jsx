import React from 'react'
import style from './styles/Navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <Image
        className={style.Logo}
        src="/image/CanChu.png" 
        alt="JiuTan Logo"
        width={113}
        height={24}
        />
      <div className={style.nav}>
        <p className={style.About}>About</p>
        <p className={style.Contact}>聯絡我們</p>
      </div>
    </div>
  )
}

export default Navbar
