import React, { memo, useEffect,useState } from 'react';

import { MomentEditWrapper } from './style'

import { Card, Breadcrumb,  Table, Space,Button, message,Spin, Alert, Image, Upload,Tag,Modal,Select } from 'antd'
import { DeleteOutlined , UploadOutlined, EditOutlined } from '@ant-design/icons'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllMoments } from "../../store/actionCreator";


import { deleteMomentById,addLabelByMomentId, getLabelList } from "@/services/blog/blog"

import { getCache } from '@/utils/cache'

const fileList = [
 
];


export default memo(function ZYEditMoment() {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
 const [pageSize, setPageSize] = useState(10)
 const[momentId,setMomentId] = useState(0)
 const[labelList,setLabelList] = useState([{value:'前端'}])
 const[selectList,setSelectList] = useState([])
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
        <Button type={"link"} icon={<UploadOutlined />}>上传封面</Button>
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
        <Space size="middle">
          <Button ghost icon={<DeleteOutlined/>} size={'small'} type={"link"}  onClick={e => deleteMoment(record)}>删除</Button>
          <Button ghost icon={ <EditOutlined />} size={'small'} type={"link"}  onClick={e => deleteMoment(record)}>编辑</Button>
        </Space>
       
      ),
    },
  ];
  const addLabel = (id) => {
    setMomentId(id)
    setIsModalVisible(true);
  };
  function deleteMoment({id}){
    setIsLoading(true)
    deleteMomentById(id).then( res => {
      setIsLoading(false)
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
    getLabelData()
  },[dispath])
  
  function getZAllMoments (){
    dispath(getAllMoments({offset: 0, size:100}))
   
  }
  function onChangeV(value){
   
    setSelectList(value)
   }
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
  const getLabelData = () => {
    setIsLoading(true)
    getLabelList({offset:0,size:20}).then(res => {
     if(res){
      setIsLoading(false)
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
  const handleAddLabelOk = () => {
    addLabelByMomentId(momentId,{labels:selectList}).then(res => {
      if(res){
        message.success("添加标签成功")
        getZAllMoments()
      }
    })
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return <MomentEditWrapper>
     <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>内容管理</Breadcrumb.Item>
    <Breadcrumb.Item>文章管理</Breadcrumb.Item>
    </Breadcrumb>
    <Card>
    <Table  rowKey="id" loading={isLoading} columns={columns} dataSource={moments}
    pagination={{
      pageSize: pageSize,
      showSizeChanger: true,//设置每页显示数据条数
     showQuickJumper: false,
     onShowSizeChange:(current, pageSize) => setPageSize(pageSize)
    }}
    />
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
  </MomentEditWrapper>;
});
