import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <h1>About Cecilia</h1>
      <h1>哈囉你好！</h1>
      <h2>這裡是簡單的自我介紹～</h2>
      <h3>資管3C張涴淋</h3>

      <img src="corgi.png" alt="柯基" />
      <p>About me</p>

      <table>
        <tr>
          <th>名字：</th>
          <td>張涴淋</td>
        </tr>
        <tr>
          <th>年紀：</th>
          <td>20</td>
        </tr>
      </table>

      <ol>
        <li>背景：
          <ul>
            <li>國小：苗栗縣后庄國民小學</li>
            <li>國中：苗栗縣立建國國中</li>
            <li>高中：國立竹南高級中學</li>
            <li>大學（目前就讀）：淡江大學</li>
          </ul>
        </li>
        <li>興趣愛好：
          <ul>
            <li>睡覺</li>
            <li>吃飯</li>
            <li>打球</li>
            <li>去海邊</li>
          </ul>
        </li>
        <li>語言：
          <ul>
            <li>中文</li>
            <li>英文</li>
          </ul>
        </li>
        <li>聯繫方式：<a href="https://www.instagram.com/cecilia.2_19?igsh=MTY1eG9wYTlmemZjZg%3D%3D&utm_source=qr">這是我的IG</a></li>
      </ol>

      <div>
        <p>提醒：<strong>N'oublie pas de t'aimer</strong> <em>（別忘了愛自己）</em></p>
      </div>

      <p>以上是我的自我介紹</p>




    </>
  )
}

export default App
