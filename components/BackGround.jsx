"use client"

import React from 'react'
import style from './styles/BackGround.module.scss'
import Image from 'next/image'

const BackGround = () => {
  return (
    <div>
      <section className={style.BackGroundImg}>
        <div class={style.wrapper}>
          <h2>Hi, I&apos;m Max Liang</h2>
          <h3>A Junior Front-end developer from Taiwan</h3>
          <p>I embrace a passion for making a world-changing impact.</p>
          <p>In pursuit of this goal,</p>
          <p>I am honing my skills in areas such as Front-end development, UIUX, Product Management and more</p>
        </div>
      </section>
      <section id='About' className={style.About}>
        <div className={style.MyPhoto}>
          <Image
          className={style.MaxLinagPhoto}
          width={200}
          height={180}
          src="/勝傑.jpg"
          alt='Logo'
          />
        </div>
        <div className={style.AboutMeText}>
          <h2>About Me</h2>
          <p>
            我是一位台師大圖資所的碩士生，將於 2023 年底畢業，
            目標成為一位前端工程師，目前主要使用 Next.js, React.js, SCSS進行開發，
            過去也有 UX Reseacher, SEO 等相關實習經驗，
            期許自己能為開發與產品團隊帶來更多想法
          </p>
          <div className={style.AboutOther}>
            <ul className={style.AboutOtherLeft}>
              <li>Study:National Taiwan Normal University</li>
              <li>Age:24</li>
            </ul>
            <ul>
              <li>Location:Taipei, Taiwan</li>
              <li>Hobby:Startups, Basketball</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
export default BackGround
