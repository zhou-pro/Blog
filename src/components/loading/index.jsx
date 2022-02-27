import React, { memo } from 'react'

import { LoadingWrapper } from './style'

const Loading = memo(() => {
  return (
    <LoadingWrapper>
      <div id="preloader_4">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    </LoadingWrapper>
  )
})

export default Loading