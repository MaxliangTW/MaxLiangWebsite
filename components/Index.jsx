import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import style from './styles/index.module.scss';

const Index = () => {
  return (
    <div>
      <Navbar />
      {/* 頭： Logo、麵包屑*/}
      {/* 中間：JiuTan 產品簡介、上線時程規劃（是否做個小互動遊戲？）、功能介紹圖塊、製作團隊介紹 */}
      <Footer />
      {/* 尾： 聯絡我們*/}
    </div>
  )
}

export default Index;
