import React, { memo } from 'react';
import toc from 'markdown-toc'
import { Remarkable } from 'remarkable'

import { Wrapper } from './style'
export default memo(function ZYRightContent() {
  // console.log(toc('# One\n\n# Two').content);
  return <Wrapper>
    <div className='titleWrapper'>
    <div className='title'>
    <div className='titleLine'></div>
    <div style={{marginLeft:12}}>目录</div>
  </div>
    </div>
  </Wrapper>
});
