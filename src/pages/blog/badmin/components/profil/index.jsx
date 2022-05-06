import React, { memo, useState, useEffect } from 'react';

import { ProfilWrqpper } from './style'

import { Card, Breadcrumb, Upload, Table, Space,Button, message,Spin, Alert, Image, Modal, Select, Tag} from "antd"
import { DeleteOutlined , UploadOutlined, EditOutlined } from '@ant-design/icons'
import ImgCrop from 'antd-img-crop';

import { getCache } from '@/utils/cache'
import { getMomentByUserId, deleteMomentById, getLabelList,addLabelByMomentId } from '@/services/blog/blog'

export default memo(function Profill() {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pageSize, setPageSize] = useState(10)
  const[moments,setMoments] = useState([])
  const[labelList,setLabelList] = useState([{value:'前端'}])
  const[selectList,setSelectList] = useState([])
  const[momentId,setMomentId] = useState(0)
  const [fileList, setFileList] = useState([ {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: `http://www.zsygg.art:3000/users/${getCache('userInfo').id}/avatar`,
  },])

  useEffect(() => {
    getMomentByUserdata()
    getLabelData()
  },[])
  const getMomentByUserdata = () => {
    setIsLoading(true)
    getMomentByUserId(getCache('userInfo').id).then(res => {
     if(res){
      setMoments(res.data)
      setIsLoading(false)
     }
    })
  }

  const getLabelData = () => {
    getLabelList({offset:0,size:20}).then(res => {
     if(res){
      let arr = []
      res.forEach(item =>{
        let obj = {}
        obj.value = item.name
        arr.push(obj)
      })
      setLabelList(arr)
     }
    })
  }

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }
  
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
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
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
        <Button size={'small'} type={"link"}>上传封面</Button>
      </Upload>}
        </>
      )
    },
    {
      title: '标签',
      key: 'labels',
      dataIndex: 'labels',
      width: 100,
      render: (labels,{id}) => (
        <>

        {labels?labels.map(label => (
            <Tag closable checked color="#f50" key={label.id} style={{marginRight:5,marginTop:10}}>{label.name}</Tag>
     
        )):<Button size={'small'} type={"link"} onClick={ e => addLabel(id)}>添加标签</Button>}
        </>   
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="small">
          <Button  icon={<DeleteOutlined/>} size={'small'} type={"link"}  onClick={e => deleteMoment(record)}>删除</Button>
          <Button  icon={ <EditOutlined />} size={'small'} type={"link"} >编辑</Button>
        </Space>
       
      ),
    },
  ]
  //渲染标签
  function tagRender(props) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = event => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={"lime"}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }
  function onChangeV(value){
   
   setSelectList(value)
  }
  function deleteMoment({id}){
    deleteMomentById(id).then( res => {
      if(res)message.info("删除成功~~")
     getMomentByUserdata()
     
    })
  }
  function uploadImage(){
    getMomentByUserdata()
  }
  const addLabel = (id) => {
    setMomentId(id)
    setIsModalVisible(true);
  };

  const handleAddLabelOk = () => {
    addLabelByMomentId(momentId,{labels:selectList}).then(res => {
      if(res){
        message.success("添加标签成功")
        getMomentByUserdata()
      }
    })
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return <ProfilWrqpper>
    <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
    <Breadcrumb.Item>个人中心</Breadcrumb.Item>
    </Breadcrumb>
   <Card>
  <div className='title'>
    <div className='titleLine'></div>
    <div>个人中心</div>
  </div>
  <div style={{marginBottom:20}}>
  <ImgCrop rotate>
      <Upload
      name='avatar'
        action="http://106.14.167.231:3000/upload/avatar"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        headers={
          {
            'authorization':'Bearer ' +getCache('userInfo').token,
          }
         }
      >
        {fileList.length < 5 && '上传头像'}
      </Upload>
    </ImgCrop>
  </div>
  <div className='title'>
    <div className='titleLine'></div>
    <div>我的文章</div>
  </div>

  <div>
  <Table  rowKey="id" loading={isLoading} columns={columns} dataSource={moments}
    pagination={{
      pageSize: pageSize,
      showSizeChanger: true,//设置每页显示数据条数
     showQuickJumper: false,
     onShowSizeChange:(current, pageSize) => setPageSize(pageSize)
    }}
    />
  </div>
   </Card>
   <Modal title="添加标签" visible={isModalVisible} onOk={handleAddLabelOk} onCancel={handleCancel}>
   <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    style={{ width: '100%' }}
    options={labelList}
    onChange={onChangeV}
   
  />
      </Modal>
  </ProfilWrqpper>;
});
