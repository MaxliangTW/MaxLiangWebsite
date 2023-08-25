import React from 'react'
import style from './styles/BackGround.module.scss'

const BackGround = () => {
  return (
    <div className={style.Background}>
      <div class={style.wrapper}>
        <h2>Hi, I'm Max Liang</h2>
        <h3>A Junior Front-end developer from Taiwan</h3>
        <p>I embrace a passion for making a world-changing impact.</p>
        <p>In pursuit of this goal,</p>
        <p>I am honing my skills in areas such as Front-end development, UIUX, Product Management and more</p>
      </div>
      <div className={style.otherlink}>
        {/* <a>
          <img className={style.Linkedin} src="/linkedin.png" alt="Linkedin" />
        </a>     */}
      </div>
    </div>
  )
}
export default BackGround
