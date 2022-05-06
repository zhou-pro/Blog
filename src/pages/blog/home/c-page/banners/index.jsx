import React, { memo, useEffect, useState, useRef,useCallback } from 'react'

import { BannerListWrapper, ReadMoreWrapper,Bgerapper, BannerWrapperLeft, RecommendMomentWrapper } from './style'

import { getBannerList } from '@/services/blog/blog'

import { Carousel } from 'antd';

import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom';
const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
 
};



export default memo(function ZYBanner() {
const [images, setImages] = useState([])
const [currentIndex, setCurrentIndex] = useState(0);
const [bannerList, setBannerList] = useState([
  {
    imgurl:'http://106.14.167.231:3000/moment/images/f96a560e8458e42e897fef2459989f4a',
    title:'Pinia,完全版的Vue全局状态管理(Vuex的代替者)',
    id:40
},
  {
    imgurl:'http://106.14.167.231:3000/moment/images/1da32d8796d64a274f00ab05c70c8ac9',
    title:'React系列 - react-redux(一)',
    id:42
  },
  {
    imgurl:'http://106.14.167.231:3000/moment/images/54b1b215a5b0f3821a32bf23c43443d4',
    title:'防抖与节流',
    id:31
  },
])
const bannerRef = useRef(null)
let history = useHistory()
useEffect(() => {
  getBannerLists()
},[])

function getBannerLists(){
  getBannerList().then( res => {
    setImages(res?.imgaes)
  })
}
const bannerChange = useCallback((from, to) => {
  setTimeout(() => {
    setCurrentIndex(to);
  }, 0);
}, []);
function imagClick(id){
  history.push({pathname:`/Blog/moment/${id}`, state:{id}})
}
const bgImage = bannerList[currentIndex].imgurl
  return (
    <BannerListWrapper >
      <Bgerapper bgImage={bgImage}>

      </Bgerapper>
      <BannerWrapperLeft>
      <div className='wrap-v2'>
     <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
      {bannerList.map((item, index) => {
        return(
          <div className="itemImage" key={item.imgurl} >
          <img src={item.imgurl + '?type=middle'} alt="..." />
          <ReadMoreWrapper >
            <img src={item.imgurl} alt="..." onClick={e=> imagClick(item.id)} />
            <div className='nextWrapper'>
              <div className='btn left' onClick={e =>  bannerRef.current.prev()}><LeftOutlined /></div>
              <div className='btn right' onClick={e =>  bannerRef.current.next()}><RightOutlined /></div>
            </div>
          </ReadMoreWrapper>
          <RecommendMomentWrapper>
            <div className='text'>
             <div className='jian'></div>
             <div className='recommend'>推荐文章</div> 
            </div>
            <div className='momentTitle'>
              {item.title}
            </div>
          </RecommendMomentWrapper>
         </div>
        )
      })}
   
    
  </Carousel>
     </div>
      </BannerWrapperLeft>
    
  
    </BannerListWrapper>
  )
})
