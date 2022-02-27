import React, { memo, useEffect, useState, useRef,useCallback } from 'react'

import { BannerListWrapper, ReadMoreWrapper,Bgerapper, BannerWrapperLeft } from './style'

import { getBannerList } from '@/services/blog/blog'

import { Carousel } from 'antd';

import { RightOutlined, LeftOutlined } from '@ant-design/icons'
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
const bannerRef = useRef(null)

useEffect(() => {
  getBannerLists()
},[])

function getBannerLists(){
  getBannerList().then( res => {
    setImages(res.imgaes)
  })
}
const bannerChange = useCallback((from, to) => {
  setTimeout(() => {
    setCurrentIndex(to);
  }, 0);
}, []);
const bgImage = images[currentIndex]
  return (
    <BannerListWrapper >
      <Bgerapper bgImage={bgImage}>
666
      </Bgerapper>
      <BannerWrapperLeft>
      <div className='wrap-v2'>
     <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
      {images.map((item, index) => {
        return(
          <div className="itemImage" key={item}>
          <img src={item} alt="..." />
          <ReadMoreWrapper>
            <img src={item} alt="..." />
            <div className='nextWrapper'>
              <div className='btn left' onClick={e =>  bannerRef.current.prev()}><LeftOutlined /></div>
              <div className='btn right' onClick={e =>  bannerRef.current.next()}><RightOutlined /></div>
            </div>
          </ReadMoreWrapper>
         </div>
        )
      })}
   
    
  </Carousel>
     </div>
      </BannerWrapperLeft>
    
  
    </BannerListWrapper>
  )
})
