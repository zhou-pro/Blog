import React, { memo, useState } from 'react';

import Editor from 'for-editor'
import { AddMomentWrapper, TitleWrapper } from './style'

import { Input,Breadcrumb, Card, Modal, Button, message,Select  } from 'antd';

import { createMoment } from '@/services/blog/blog'
import { sendCommentById } from '../../../../../services/blog/blog';

const { TextArea } = Input;
const { Option } = Select;
export default memo(function useAddMoment() {
  
 const [value,setValue] = useState('')
 const [title,setTitle] = useState('')
 const [selectValue,setselectValue] = useState(null)
 const [selectData,setSelectData] = useState([
   {
     name:"前端",
     id:1
  },
   {
     name:"后端",
     id:2
  },
   {
     name:"PHP",
     id:3
  },
   {
     name:"人工智能",
     id:4
  },
   {
     name:"Python",
     id:5
  },
   {
     name:"C++",
     id:6
  },
  ])
 const [isModalVisible,setIsModalVisible] = useState(false)

 function handleChange(valu){
  setValue(valu)
 }
 function addMoment(){
  setIsModalVisible(true)
  
 }

 function sendMoment(){
  setIsModalVisible(false)
  if(value && title){
    createMoment({content:value,momentTitle:title,cId:selectValue}).then(res => {
      if(res) message.info("发布文章成功")
     })
  }else{
    message.info("不能为空")
  }
 
 }

 function addImg($file){
  

 }
 function onselectionchange(value){
  setselectValue(value)
 }
  return <AddMomentWrapper>
     <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>内容管理</Breadcrumb.Item>
    <Breadcrumb.Item>发布文章</Breadcrumb.Item>
    </Breadcrumb>
  <Card>

    <TitleWrapper>
    <div className='title'>
    <div className='titleLine'></div>
    <div>标题</div>
  </div>
     <TextArea rows={1} value={title} onChange={e => setTitle(e.target.value)}/>
    </TitleWrapper>
   
    <div>
    <div className='title'>
    <div className='titleLine'></div>
    <div>选择分类</div>
  </div>
        <Select 
        defaultValue={1}
        style={{width:100,marginBottom:50}} 
        onChange={onselectionchange}>
          {selectData.map((item,index)=>{
            return <Option key={item.id} value={item.id}>{item.name}</Option>
          })}
        </Select>
       
    </div>
    <div className='editor'>
    <div className='title'>
    <div className='titleLine'></div>
    <div>正文</div>
  </div>
    <Editor value={value} onChange={e => handleChange(e)}  onSave={e => addMoment()} addImg={($file) => addImg($file)}/>
    </div>
  </Card>
  <Modal title={null} visible={isModalVisible} onOk={e => sendMoment()} onCancel={e => setIsModalVisible(false)}>
       <span>确定发布文章吗</span>
      </Modal>
  </AddMomentWrapper>

});
