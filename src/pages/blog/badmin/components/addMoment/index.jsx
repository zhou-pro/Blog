import React, { memo, useState } from 'react';

import Editor from 'for-editor'
import { AddMomentWrapper, TitleWrapper } from './style'

import { Input,Breadcrumb, Card, Modal, Button, message  } from 'antd';

import { createMoment } from '@/services/blog/blog'
import { sendCommentById } from '../../../../../services/blog/blog';

const { TextArea } = Input;
export default memo(function useAddMoment() {
  
 const [value,setValue] = useState('')
 const [title,setTitle] = useState('')
 const [isModalVisible,setIsModalVisible] = useState(false)

 function handleChange(valu){
  setValue(valu)
 }
 function addMoment(){
  setIsModalVisible(true)
  
 }

 function sendMoment(){
  setIsModalVisible(false)
  createMoment({content:value,momentTitle:title}).then(res => {
   if(res) message.info("发布文章成功")
  })
 }

 function addImg($file){
  

 }
  return <AddMomentWrapper>
     <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>内容管理</Breadcrumb.Item>
    <Breadcrumb.Item>发布文章</Breadcrumb.Item>
    </Breadcrumb>
  <Card>

    <TitleWrapper>
     <span>标题</span>
     <TextArea rows={1} value={title} onChange={e => setTitle(e.target.value)}/>
    </TitleWrapper>
    <div className='editor'>
      正文
    <Editor value={value} onChange={e => handleChange(e)}  onSave={e => addMoment()} addImg={($file) => addImg($file)}/>
    </div>
  </Card>
  <Modal title={null} visible={isModalVisible} onOk={e => sendMoment()} onCancel={e => setIsModalVisible(false)}>
       <span>确定发布文章吗</span>
      </Modal>
  </AddMomentWrapper>

});
