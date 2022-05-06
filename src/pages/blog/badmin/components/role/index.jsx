import React, { memo, useEffect, useState } from 'react'

import { Card, Breadcrumb,Table, Tag, Space,Switch, Button, Pagination   } from "antd"
import { DeleteOutlined , UserAddOutlined} from '@ant-design/icons'

import { getUserRoles } from '@/services/blog/back'
import { getCache } from '@/utils/cache'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title:'角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title:'权限等级',
    dataIndex: 'permission_name',
    key: 'permission_name',
    render:(text, record) => <div>
     {record.permission_level == '1'? <Tag color={'red'}>{text}</Tag>:<Tag color={'gold'}>{text}</Tag>}
    </div>
  },
  {
    title:'状态',
    dataIndex: 'state',
    key: 'state',
    render:text => <Switch defaultChecked disabled/>
  },
  {
    title:'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button ghost disabled={getCache('userInfo').id !== 1} icon={<DeleteOutlined/>} size={'small'} type={"link"}  >删除</Button>
        <Button ghost disabled={getCache('userInfo').id !== 1} icon={<UserAddOutlined />} size={'small'} type={"link"}  >编辑</Button>
      </Space>
    )
  
  }
]
 
const ZYRole = memo(() => {

 const [roleList,setRoleList]  =  useState([])
 const [isLoading, setIsLoading] = useState(true)
 const [pageSize, setPageSize] = useState(4)
  useEffect(() => {
    getUserRolesList()
  },[])

  const getUserRolesList = () =>{
    setIsLoading(true)
    getUserRoles({offset:0,size:100}).then(res => {
      if(res){
        setRoleList(res.data)
        setIsLoading(false)
      }
    })
  }
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  return (
    <div>
      <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
    <Breadcrumb.Item>权限管理</Breadcrumb.Item>
    </Breadcrumb>
   <Card>
   
   <Table 
   rowKey="id"
   loading={ isLoading } 
   columns={ columns  } 
   dataSource={ roleList } 
   pagination={{
     pageSize: pageSize,
     showSizeChanger: true,//设置每页显示数据条数
    showQuickJumper: false,
    onShowSizeChange:(current, pageSize) => setPageSize(pageSize)
   }}
   />

   </Card>
    </div>
  )
})

export default ZYRole