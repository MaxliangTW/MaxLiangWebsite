import React from 'react'
import style from './styles/BackGround.module.scss'
import Image from 'next/image'

const BackGround = () => {
  return (
    <Image
        className={style.Background}
        width={1680}
        height={1200}
        src='/background.jpg'
        alt='background'
    />
  )
}

export default BackGround
