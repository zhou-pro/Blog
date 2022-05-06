import React, { memo, useState, useEffect } from 'react'


import { RightCardWrapper, ItemCardWraper, ItemCard} from './style'
import { Card,  List, message, Avatar, Skeleton, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined ,CommentOutlined,LikeOutlined } from '@ant-design/icons';
import LazyLoad from 'react-lazyload';
import VirtualList from 'rc-virtual-list';

import { getAllMoments } from "../../../../store/actionCreator";

import { shallowEqual, useDispatch, useSelector } from "react-redux";



import placeholder  from '../../../../../../../assets/img/loading/loading.gif'

import { useHistory } from 'react-router-dom';

import { getAllMoment } from '@/services/blog/blog'

const { Meta } = Card;
const ContainerHeight = 800;



export default memo(function ZYRightCard(props) {
 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
    const [size, setSize] = useState(3);
  
  const appendData = (size = 3) => {
    dispatch(getAllMoments({offset:0,size:size}));
  };

  

  let { moments = [] } = useSelector(
    (state) => ({
      moments: state.getIn(["blogMoments", "moments"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    // getAllMoment({offset:0,size:100})
    appendData()

  }, []);


  let history = useHistory()
 const showDetail = (id) =>{
   history.push({pathname:`/Blog/moment/${id}`, state:{id}})
 }
 var holderImg = <img style={{width:'100%',height: '100%'}} src={placeholder} />

 const onScroll = e => {
   
  if (Math.floor(e.target.scrollHeight - e.target.scrollTop)> ContainerHeight) {
    let limit = size + 1;
    setSize(limit);
    appendData(limit);
  }
}
  return (
    <RightCardWrapper>
      
      <List className='leftList'>
      <VirtualList
        data={moments}
        height={ContainerHeight}
        itemKey="id"
        onScroll={e => onScroll(e)}
      >
        {item => (
          <List.Item key={item.id}>
           <div className="momentItem">
           <div className='imageInfo'> 
           <div className='momentLabel'></div>
           <div className='image' > <img src={item.imgaes ? item.imgaes[0] +'?type=middle':'http://106.14.167.231:3000/users/7/avatar'} alt="" /></div>
           <div className='title'> {item.title}</div>
           </div>
           <div className='momentInfo'></div>
           </div>
         </List.Item>
        )}
      </VirtualList>
    </List>
     
      
  
      
    
    </RightCardWrapper>
  )
})
