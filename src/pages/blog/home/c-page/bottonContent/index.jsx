import React, { memo } from 'react'

import { BottonContentWrapper, BotttonLeftWrapper, BottonRightWrapper } from './style'

import ZYLeftDate from './c-page/leftDate'
import ZYRightCard from './c-page/rightCard'
export default memo(function ZYBottonContent( props ) {
  return (
    <BottonContentWrapper>
      
      <BotttonLeftWrapper>
        <ZYLeftDate/>
      </BotttonLeftWrapper>
      <BottonRightWrapper>
        <ZYRightCard {...props}/>
      </BottonRightWrapper>
    </BottonContentWrapper>
  )
})
