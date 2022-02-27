import React, { memo, useState } from 'react'


import { RightCardWrapper, ItemCardWraper} from './style'
import { Card, Avatar, Drawer, Button, Tag, Row, Col  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined ,CommentOutlined,LikeOutlined } from '@ant-design/icons';

import ZYComment from './comment'

import { getMomentById } from '@/services/blog/blog'
import { useHistory } from 'react-router-dom';

const { Meta } = Card;



export default memo(function ZYRightCard(props) {
  const [visible, setVisible] = useState(false);
  const [momentInfo, setMomentInfo] = useState(null)

  let history = useHistory()
  const showDrawer = async (id) => {
    setVisible(true);
   const data = await getMomentById(id)
   setMomentInfo(data)
  };
  const onClose = () => {
    setVisible(false);
  };
 const { moments } = props

 const showDetail = (id) =>{
   history.push({pathname:`/Blog/moment/${id}`, state:{id}})
 }

  return (
    <RightCardWrapper>
      <Row gutter={20}>
      {moments.map((item, index) => {
        return (
          <ItemCardWraper key={item.id}> 
            <Col span={8}>

            <Card
         
         hoverable
         size={'small'}
           style={{ width: 350 , height: 200}}
           cover={
             <img
             style={{height:180}}
             onClick={e => showDetail(item.id)}
               alt="example"
               src={item.imgaes ? item.imgaes[0]:'http://106.14.167.231:3000/users/7/avatar'}
             />
           }
           actions={[
             <CommentOutlined  onClick={e => showDrawer(item.id)} key="edit" />,
             <EditOutlined key="edit" />,
             <LikeOutlined key="like" />,
           ]}
         >
           <div style={{display:'flex'}}>
           <Tag color="#87d068">前端</Tag>
           <Meta
           onClick={e => showDetail(item.id)}
             title={item.momentTitle ? item.momentTitle : ''}
           />
           </div>
           
         </Card>
            </Col>
              </ItemCardWraper>
        )
      })}
      </Row>
     
      
     <Drawer title="最新评论" placement="bottom" onClose={onClose} visible={visible}>
        <ZYComment momentInfo={ momentInfo }/>
      </Drawer>
    </RightCardWrapper>
  )
})
