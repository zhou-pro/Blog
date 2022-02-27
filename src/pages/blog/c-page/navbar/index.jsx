import React, { memo, useState, } from 'react'
import { useHistory } from 'react-router'
import { Avatar , Menu, Dropdown} from 'antd';
import { UserOutlined ,DownOutlined } from '@ant-design/icons';


import { NavBarWrapper, NavBarList, NavBarLeft,  UserInfoWrapper } from './style'

import { NavLink } from "react-router-dom";

import { getCache,clearCache } from '@/utils/cache'

const menuClick = ({key}) => {
  if(key === '0'){
    clearCache()
    
  }
}

const menu = (
  <Menu onClick={menuClick}>
    <Menu.Item key="0">
    <NavLink to="/Blog/login" exact/>退出登录
    </Menu.Item>
    <Menu.Item key="1">
    <NavLink to="/badmin" exact/>  控制台
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);

export default memo(function ZYNavBar() {

  let history = useHistory()
  const menuList= [
    {
      title:'首页',
      path:'/Blog/home'
    },
    {
      title:'音乐盒',
      path:'/discover'
    },
    {
      title:'关于',
      path:'/Blog/about'
    },
   
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const navClick = (index,item) => {
    setCurrentIndex(index)
    history.push(item.path)
  }
  const login = () => {
    history.push('/Blog/login')
  }
  return (
    <NavBarWrapper>
     <NavBarLeft>
      icon
     </NavBarLeft>
     <NavBarList>
      {menuList.map((item, index) => {
        return <div key={item.path} className="navItemWrapper" onClick={ e => navClick(index,item)}>
           <div className="navItem" >{item.title}</div>
           <div  className={currentIndex === index ? 'active':''}><span></span></div>
        </div>
      })}
     </NavBarList>
     <UserInfoWrapper >
     <Avatar src={getCache('userInfo')?`http://106.14.167.231:3000/users/${getCache('userInfo').id}/avatar`:''} icon={<UserOutlined />} style={{marginRight:5}} />
       {getCache('userInfo')? <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      {getCache('userInfo').name} <DownOutlined />
    </a>
  </Dropdown>:<span onClick={e => login()}>未登录</span>}
     </UserInfoWrapper>
    </NavBarWrapper>
  )
})
