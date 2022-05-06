import React, { memo, useState, useEffect } from 'react'
import { BackTop } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
 
import { getMomentById } from '@/services/blog/blog'

import  ZYLeftContent  from './c-page/left-content'
import ZYRightContent from './c-page/right-content'
import ZYShare from './c-page/share'

import { MomentDetailWrapper, MomentDetailLeftWrappwer, MomentDetailRightWrappwer,BgcWra, BgWrapperT } from './style'

export default memo(function ZYMomentDetail(props) {
  console.log(props);
  const [momentInfo, setMomentInfo] = useState({})
  const { match } = props
  
  

  useEffect( () => {
    getMomentInfo()

  }, [match.params.id])


  const getMomentInfo = async () =>{
    const res = await  getMomentById(match.params.id)
    setMomentInfo(res)
    
  }

  const updateMoment = () =>{
    getMomentInfo()
  }

  return (<BgcWra >
    <BgWrapperT imgaes={momentInfo.imgaes?momentInfo.imgaes[0]:''}>

    </BgWrapperT>
    <MomentDetailWrapper  className="wrap-v2">
      <MomentDetailLeftWrappwer className='animate__animated animate__bounceInLeft'>
        <ZYLeftContent info={momentInfo} updateMoment={updateMoment} title={props.location.state? props.location.state.title:''}/>
      </MomentDetailLeftWrappwer>
     <MomentDetailRightWrappwer >
      <ZYRightContent/>
      <ZYShare info={momentInfo}/>
     </MomentDetailRightWrappwer>
     
    </MomentDetailWrapper>
    <div className='backTopWrapper'>
      <BackTop className='backTop' visibilityHeight={600}><VerticalAlignTopOutlined /></BackTop>
    </div>
  </BgcWra>
    
  )
})
