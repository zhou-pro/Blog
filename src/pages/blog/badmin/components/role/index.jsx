import React, { memo } from 'react'

import { Card, Breadcrumb,Table, Tag, Space,Switch, Button  } from "antd"
import { DeleteOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title:'角色',
    dataIndex: 'roles',
    key: 'roles',
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
        <Button disabled icon={<DeleteOutlined/>} size={'small'} type={"primary"} danger ></Button>
      </Space>
    )
  
  }
]
  const data = [
    {
      key: '1',
      name: 'coderZhou',
      roles: "超级管理员",
      state:'0'
      
    }]
const ZYRole = memo(() => {
  return (
    <div>
      <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
    <Breadcrumb.Item>权限管理</Breadcrumb.Item>
    </Breadcrumb>
   <Card>
   
   <Table columns={columns} dataSource={data} />
   </Card>
    </div>
  )
})

export default ZYRole