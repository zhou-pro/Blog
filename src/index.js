import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/base.css";
import App from './App';
import 'animate.css'
// import { message } from 'antd';
// message.config({
//   duration: 2,// 持续时间
//   maxCount: 3, // 最大显示数, 超过限制时，最早的消息会被自动关闭
//   top: 70,// 到页面顶部距离
//  });
  
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

