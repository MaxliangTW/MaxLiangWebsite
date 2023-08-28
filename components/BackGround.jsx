import React from 'react'
import style from './styles/BackGround.module.scss'
import Image from 'next/image'

const BackGround = () => {
  return (
    <div>
      <section className={style.BackGroundImg}>
        <div class={style.wrapper}>
          <h2>Hi, I'm Max Liang</h2>
          <h3>A Junior Front-end developer from Taiwan</h3>
          <p>I embrace a passion for making a world-changing impact.</p>
          <p>In pursuit of this goal,</p>
          <p>I am honing my skills in areas such as Front-end development, UIUX, Product Management and more</p>
        </div>
      </section>
      <section className={style.About}>
        <div className={style.MyPhoto}>
          <Image
          className={style.MaxLinagPhoto}
          width={200}
          height={200}
          src="/勝傑.jpg"
          alt='Logo'
          />
        </div>
        <div className={style.AboutMeText}>
          <h1>Max Liang <span>梁勝傑</span></h1>
        </div>
      </section>
    </div>
  )
}
export default BackGround
