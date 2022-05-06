import React, { memo, useState, } from 'react'
import { useHistory } from 'react-router'
import { Avatar , Menu, Dropdown,Input, Space, List, Skeleton} from 'antd';
import { UserOutlined ,DownOutlined,  AudioOutlined  } from '@ant-design/icons';



import { NavBarWrapper, NavBarList, NavBarLeft,  UserInfoWrapper } from './style'

import { NavLink } from "react-router-dom";

import { getMomentByKeyword } from '@/services/blog/blog'

import { getCache,clearCache } from '@/utils/cache'
const { Search } = Input;

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
  const [searWidth, setSearWidth] = useState(100)
  const [keyword, setKeyword] = useState("")
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchData, setSearchData] = useState([])
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
  function onSearch(){
    if(keyword.length > 0){
      setIsLoading(true)
      getMomentByKeyword({keyword}).then(res => {
        if(res){
          setSearchData(res.data)
          setIsLoading(false)
        }
        
      })
    }
    
  }
  function onFocus(){
   
  setTimeout(() => {
    setSearWidth(400)
    setIsShow(true)
  },100)
  }
  function onBlur(){
    
   setTimeout(() => {
    setSearWidth(100)
    setIsShow(false)

    setSearchData([])
   }, 500);
    
  }
  function onChange(e){
    setKeyword(e.target.value)
    
    if(e.target.value.length > 0){
      setIsLoading(true)
      getMomentByKeyword({keyword:e.target.value}).then(res => {
        if(res){
          setSearchData(res.data)
          setIsLoading(false)
        }
        
      })
    }
    
    
  }
  function searClick(id){
    history.push({pathname:`/Blog/moment/${id}`, state:{id}})
   
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
    <div className='search'>
       <Search size={"small"}  value={ keyword } onChange={ e => onChange(e)}  placeholder="search" onBlur={e => onBlur()} onFocus={e => onFocus()} onSearch={onSearch} style={{ width: searWidth ,transition:' width 1s linear',borderRadius:8}} />
      {isShow &&  <div className='showSearch' style={{width: searWidth,transition:' width 1s linear'}}>
    
     <div>
          <List
    itemLayout="horizontal"
    dataSource={searchData}
    renderItem={item => (
      <Skeleton loading={isLoading} active avatar>
     <List.Item key={item.id} className='listItem' onClick={e => searClick(item.id)}>
        <List.Item.Meta
        style={{whiteSpace:'nowrap',width:searWidth,overflow:'hidden',textOverflow:'ellipsis'}}
          avatar={<Avatar src={item.imgaes?item.imgaes[0]:''} />}
          title={<a href="https://ant.design">{item.momentTile}</a>}
          description={item.content}
        />
      </List.Item>
    </Skeleton>
      
    )}
  />
        </div>
    
     </div>}
       </div>
     <UserInfoWrapper >
     <Avatar src={getCache('userInfo')?`http://106.14.167.231:3000/users/${getCache('userInfo').id}/avatar`:''} icon={<UserOutlined />} style={{marginRight:5}} />
       {getCache('userInfo')? <Dropdown overlay={ menu }>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      {getCache('userInfo').name} <DownOutlined />
    </a>
  </Dropdown>:<span onClick={e => login()}>未登录</span>}
     </UserInfoWrapper>
     
    </NavBarWrapper>
  )
})
