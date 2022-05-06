import React, { memo, useState } from 'react'
 
import { BadminWrapper } from './style'

import { Layout, Card, Menu } from 'antd';

import { renderRoutes } from "react-router-config";
import { HomeOutlined, EditOutlined, UserOutlined , MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;


export default memo(function ZYBadmin(props) {

  let history = useHistory()

  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const menuClick = (index) =>{
    const path = index.key
    if(path === '/Blog/home'){
      history.push(`${path}`)
      return
    }
    history.push(`/badmin${path}`)
  }
  return (
    <BadminWrapper>
      <Layout>
          
      <Sider  trigger={null} style={{backgroundColor:"#20232B"}} className='silder' collapsed={collapsed}>
      <div className="logo" >创作者中心</div>
       <Menu       
       defaultSelectedKeys={['/number']}
       theme="dark"
       defaultOpenKeys={['sub2']}
       mode="inline"
       onClick={e => menuClick(e)}
     >
              
       
       <SubMenu key="sub2" icon={<UserOutlined />} title="用户管理">
         <Menu.Item key="/profil">个人中心</Menu.Item>
         <Menu.Item key="/roles">权限管理</Menu.Item>
         <Menu.Item key="/number">数据统计</Menu.Item>
         
       </SubMenu>
       <SubMenu key="sub4" icon={<EditOutlined />} title="内容管理">
         <Menu.Item key="/addMoment">发布文章</Menu.Item>
         <Menu.Item key="/moment">文章管理</Menu.Item>
         <Menu.Item key="/label">标签管理</Menu.Item>
         
       </SubMenu>
       <Menu.Item key="/Blog/home" icon={<HomeOutlined />}>首页</Menu.Item>  
     </Menu>

     
       </Sider>
     
      <Layout style={{minHeight:"calc(100vh - 0px)"}}>
      <Header className='header'><div className='collapsedIcon'>
           
           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                 className: 'trigger',
                 onClick: toggle,
               })}
          </div></Header>
        <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
        >
          {renderRoutes(props.route.routes)}
       </Content>
        
      </Layout>
    </Layout>
    </BadminWrapper>
  )
})
