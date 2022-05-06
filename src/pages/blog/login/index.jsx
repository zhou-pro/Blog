import React, { memo, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'

import { Form, Input, Button, message } from 'antd';

import { login as loginByURser, signUpuser} from '@/services/blog/blog'
import { setCache, getCache } from '@/utils/cache'

import { LoginWrapper } from './style'

export default memo(function ZYLogin() {
  let history = useHistory()
const [name, setName] = useState('')
//登录数据
const [password, setPassword] = useState('')
const [isActive, setIsActive] = useState(false)

//注册数据
const [signupname, setSignupname] = useState('')
const [signuppassword, setSignuppassword] = useState('')

useEffect(() => {
  
})

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  const login = (e) => {
    setIsActive(false)
  }
  const sigup = (e) => { 
    setIsActive(true)
  
  }

  //登录注册回调

  const loginByUser = async () => {
    const userInfo = await loginByURser({name,password})
    
    if(userInfo){
      setCache('userInfo', userInfo)
      history.replace('/Blog/home')
    }
    
  }
  const registerUser = async () => {
  const data = await  signUpuser({name:signupname, password:signuppassword})
  if(data){
    message.success('注册成功')
    setIsActive(false)
  }
  
  }
  return (
    <LoginWrapper>
    <div className="container">
  <div className="welcome">
    <div className={isActive?'pinkbox tra' : 'pinkbox tre'} >
     
      <div  className={isActive?'signup':'signup nodisplay'} >
        <h1>注册</h1>
        <Form
        style={{marginLeft:-10}}
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        hasFeedback
        label="用户名"
        name="username"
        rules={[
          { required: true, message: 'Please input your username!' },
          {max:10,message:'用户名不能超过10个字符'},
          {min:2,message:'用户名不能少于2个字符'},
          { pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, "g") , message: '名称只允许包含数字、字母和下划线' }
        ]}
      >
        <Input onChange={e => setSignupname(e.target.value)}/>
      </Form.Item>

      <Form.Item
      hasFeedback
        label="密码"
        name="password"
        rules={[
          { required: true, message: 'Please input your password!' },
          {max:10,message:'密码不能超过10位'},
          {min:6,message:'密码不能少于6位'}
        ]}
      >
        <Input.Password onChange={ e => setSignuppassword( e.target.value )}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ width:100,textAlign:'center',lineHeight:0}} onClick={e => registerUser()}  type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
      </div>

     
      <div  className={isActive?'signup nodisplay':'signup'} >
        <h1>登录</h1>
        <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={e => setName(e.target.value)} />
      </Form.Item>

      <Form.Item
      
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  onChange={e => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item   wrapperCol={{ offset: 6, span: 16 }}>
        <Button style={{ width:100,textAlign:'center',lineHeight:0}} onClick={e => loginByUser()}  type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
        
      </div>
    </div>

    <div className="leftbox">
      <h2 className="title"><span>BLOOM</span><br/>BOUQUET</h2>
      <p className="desc">Pick your perfect <span>bouquet</span></p>
      {/* <img className="flower smaller" src="https://hbimg.huabanimg.com/c09305167a883e60179a45374df73252304001359acca-W3qbYm_fw658/format/webp" /> */}
      <p className="account">Have an account?</p>
      <button className="button"  id="signin" onClick={ e => login(e)}>登录</button>
    </div>

    <div className="rightbox">
      <h2 className="title"><span>BLOOM</span><br/>BOUQUET</h2>
      <p className="desc">Pick your perfect <span>bouquet</span></p>
      {/* <img className="flower" src="https://hbimg.huabanimg.com/b28be92c8198975a74ad656eba00b352c9b9e589819af-lDXUAS_fw658/format/webp" /> */}
      <p className="account">Don't have an account?</p>
      <button className="button" id="signup" onClick={e => sigup(e)}>注册</button>
    </div>
  </div>
</div> 
    </LoginWrapper>
  )
})
