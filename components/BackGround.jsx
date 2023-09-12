"use client"

import React from 'react'
import style from './styles/BackGround.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { SassColor } from 'sass'

const BackGround = () => {
  return (
    <div>
      <article className={style.BackGroundImg}>
        <section class={style.wrapper}>
          <h2>Hi, I&apos;m Max Liang </h2>
          <h3>A Junior Front-end developer from Taiwan</h3>
          <p>I embrace a passion for making a world-changing impact.</p>
          <p>In pursuit of this goal,</p>
          <p>I am honing my skills in areas such as Front-end development, UIUX, Product Management and more</p>
          <div className={style.OtherLink}>
          <Link href="https://www.linkedin.com/in/shengchiehliang">
              <Image
                className={style.linkedln}
                width={30}
                height={30}
                src="/linkedln.png"
                alt='linkedln Logo'
              />
          </Link>
          <Link href="https://github.com/MaxliangTW">
              <Image
                className={style.Github}
                width={30}
                height={30}
                src="/github.png"
                alt='Github Logo'
              />
          </Link>
          </div>
        </section>
      </article>
      <article id='About' className={style.About}>
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
      </article>
      <article id='Resume' className={style.Resume}> 
        <section className={style.EDUCATION}>
          <div className={style.EDUCATIONtext}>
            <h1>EDUCATION</h1>
          </div>
          <div className={style.Degree}>
            <div className={style.Master}>
              <div className={style.MasterPhoto}>
                <Link href="https://www.ntnu.edu.tw/">
                  <Image
                    width={80}
                    height={80}
                    src="/NTNU.png"
                    alt='NTNU Logo'
                  />
                </Link>
              </div>
              <div className={style.MasterDoc}>
                <h2>Master&apos;s degree, library and information science</h2>
                <p>國立臺灣師範大學 National Taiwan Normal University</p>
                <p>2021.08 ~ Present</p>
              </div>
            </div>
            <div className={style.Bachelor}>
              <div className={style.BachelorPhoto}>
                <Link href="https://www.tku.edu.tw/">
                  <Image
                    width={80}
                    height={80}
                    src="/TKU.png"
                    alt='TKU Logo'
                  />
                </Link>
              </div>
              <div className={style.BachelorDoc}>
                <h2>Bachelor&apos;s degree, Information and Library Science</h2>
                <p>淡江大學 Tamkang University</p>
                <p>2017.08 ~ 2021.06</p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.Experience}>
            <div className={style.EXPERINCEtext}>
              <h1>EXPERINCE</h1>
            </div>
            <div className={style.AppWorksSchool}>
              <div className={style.AppWorksSchoolPhoto}>
                <Link href="https://school.appworks.tw/">
                  <Image
                    width={80}
                    height={80}
                    src="/AppWorksSchool.png"
                    alt='AppWorks School Logo'
                  />
                </Link>
              </div>
              <div className={style.AppWorksSchoolDoc}>
                <h2>Frontend Trianee</h2>
                <p>2023.06 ~ 2023.08</p>
                <b>Next.js, React.js, SCSS, Git</b>
                <p>Campus Program Summer / Front-End Class</p>
              </div>
            </div>
        </section>
      </article>
    </div>
  )
}
export default BackGround
