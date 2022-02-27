import React, { memo } from 'react';

import { ProfilWrqpper } from './style'

import { Card, Breadcrumb } from "antd"

export default memo(function Profill() {
  return <ProfilWrqpper>
    <Breadcrumb style={{marginBottom:10}}>
    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
    <Breadcrumb.Item>个人中心</Breadcrumb.Item>
    </Breadcrumb>
   <Card>
   个人中心
   </Card>
  </ProfilWrqpper>;
});
