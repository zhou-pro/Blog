import React, { memo, useEffect } from 'react';

import { MomentEditWrapper } from './style'

import { Card, Breadcrumb,  Table, Space,Button, message,Spin, Alert, Image, Upload } from 'antd'
import { DeleteOutlined , UploadOutlined } from '@ant-design/icons'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllMoments } from "../../store/actionCreator";


import { deleteMomentById } from "@/services/blog/blog"

import { getCache } from '@/utils/cache'

const fileList = [
 
];


export default memo(function ZYEditMoment() {
  const columns = [
    {
      title: '标题',
      dataIndex: 'momentTitle',
      key: 'momentTitle',
      render: text => <a>{text}</a>,
    },
    {
      title: '发布时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      render:author=>(
        <>
        {author.name}
        </>
      )
    },
    {
      title: '封面',
      dataIndex: 'imgaes',
      key: 'imgaes',
      render: (images, {id}) => (
        <>
        {images?<Image 
          width={100}
          height={100}
          src={images[0]}
        />: <Upload
        name='picture'
        action={`http://106.14.167.231:3000/upload/picture?momentId=${id}`}
        listType="picture"
        multiple
        onChange={e => uploadImage()}
       headers={
        {
          'authorization':'Bearer ' +getCache('userInfo').token,
        }
       }
        // defaultFileList={[...fileList]}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>}
        </>
      )
    },
    {
      title: '标签',
      key: 'label',
      dataIndex: 'label',
    
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<DeleteOutlined/>} size={'small'} type={"primary"} danger onClick={e => deleteMoment(record)}></Button>
        </Space>
      ),
    },
  ];
  function deleteMoment({id}){
    deleteMomentById(id).then( res => {
      if(res)message.info("删除成功~~")
      getZAllMoments()
     
    })
  }
  function uploadImage(){
    getZAllMoments()
  }
const dispath =  useDispatch();
const {moments = []} = useSelector(state => ({
  moments: state.getIn(["blogMoments", "moments"]),
}), shallowEqual)
  useEffect(() => {
    getZAllMoments()
  },[dispath])
  
  function getZAllMoments (){
    dispath(getAllMoments({offset: 0, size:100}))
  }
  return <MomentEditWrapper>
     <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>内容管理</Breadcrumb.Item>
    <Breadcrumb.Item>文章管理</Breadcrumb.Item>
    </Breadcrumb>
    <Card>
    <Table  rowKey="id" columns={columns} dataSource={moments}/>
    </Card>
  </MomentEditWrapper>;
});
