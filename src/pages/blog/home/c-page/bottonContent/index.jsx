import React, { memo } from 'react'

import { BottonContentWrapper, BotttonLeftWrapper, BottonRightWrapper,  RRightWrapper } from './style'

import ZYLeftDate from './c-page/leftDate'
import ZYRightCard from './c-page/rightCard'
import RRight from './c-page/Rright'
export default memo(function ZYBottonContent( props ) {
  return (
    <BottonContentWrapper>
      
      <BotttonLeftWrapper>
        <ZYLeftDate/>
      </BotttonLeftWrapper>
      <BottonRightWrapper>
        <ZYRightCard {...props}/>
      </BottonRightWrapper>
      {/* <RRightWrapper>
        <RRight />
      </RRightWrapper> */}
    </BottonContentWrapper>
  )
})
