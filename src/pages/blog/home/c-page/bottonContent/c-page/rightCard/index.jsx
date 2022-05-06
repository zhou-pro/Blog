import React, { memo, useEffect, useState } from 'react'


import { RightCardWrapper, ItemCardWraper, CategoryWrapper} from './style'
import { Card, Avatar, Drawer, Button, Tag, Row, Col, BackTop  } from 'antd';
import {  MessageOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import LazyLoad from 'react-lazyload';



import placeholder  from '../../../../../../../assets/img/loading/loading.gif'
import defaultImg from '../../../../../../../assets/img/default.jpg'

import { getCateMoment, getAllMoments } from '../../../../store/actionCreator'
// import { getCategoryMomentById } from '@/services/blog/blog'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const { Meta } = Card;



export default memo(function ZYRightCard(props) {
  let { moments } = props
  const dispath = useDispatch()
  const [momentInfo, setMomentInfo] = useState([])
  const [active, setActive] = useState(0)
  const [cateData,setCateData] = useState([
    {title:'全部',
        id: 0
    },
    {title:'前端',
        id: 1
    },
    {title:'后端',
        id: 2
    },
    {title:'PHP',
        id: 3
    },
    {title:'人工智能',
        id: 4
    },
    {title:'Python',
        id: 5
    },
    {title:'C++',
        id: 6
    },
  ])

  useEffect(() => {
    setMomentInfo(moments)
  },[])


  let history = useHistory()


 

 const showDetail = (id) =>{
   history.push({pathname:`/Blog/moment/${id}`, state:{id}})
 }
 const tabClick = id => {
  setActive(id)

  if(id > 0){
     dispath(getCateMoment(id))
  }else{
    dispath(getAllMoments({ offset: 0, size: 100 }))
  }
    
 
 
 }

 var holderImg = <img style={{width:'100%',height: '100%'}} src={ placeholder } />

  return (
    <RightCardWrapper>
      
      <CategoryWrapper>
      <div className='tabWrapper'>
        {cateData.map((item, index) => {
          return <div
          onClick={e => tabClick(index)}
          className={active === index?'itemActive Item':'Item'}
           key={item.id}>
            {item.title}
            <div className={active === index && 'bot'}>

            </div>
            </div>
        })}
      </div>
      </CategoryWrapper>
      <Row gutter={20}>
      {moments.map((item, index) => {
          return <Col style={{marginBottom: 10}}  span={ 8 } ><div key={item.id} className={ 'cardInfoWrapper animate__animated animate__rotateInUpLeft' } >
            
           
            <div  onClick={e => showDetail(item.id)} >
              <LazyLoad placeholder={holderImg}>
              <img className='image' src={item.imgaes ? item.imgaes[0] +'?type=middle':defaultImg} alt="" />
              </LazyLoad>
                   
                    {item.momentTitle && <div className='hoverTitle'>  {item.momentTitle ? item.momentTitle : ''}</div>}
                  <div className="titleInfo">
                    <div className="title">
                     <div className='icon'> <span style={{color:"#9999",lineHeight:1}}><MessageOutlined />{item.commentCount && item.commentCount > 0 ? item.commentCount:''}</span></div>
                      <Tag  className='tag' color="#87d068">{item?.labels? item.labels[0].name:"前端"}</Tag>
                    </div>
                  </div>
                </div>
                
          </div></Col>
        })}
      </Row>
     
  
        
    <div className='backTopWrapper'>
      <BackTop className='backTop' visibilityHeight={600}><VerticalAlignTopOutlined /></BackTop>
    </div>
    </RightCardWrapper>
  )
})
