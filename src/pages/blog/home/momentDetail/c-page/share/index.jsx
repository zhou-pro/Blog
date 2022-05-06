import React, { memo } from 'react'

import { ShareWrapper } from './style'

import  { ShareAltOutlined, WeiboOutlined,QqOutlined, WechatOutlined   } from '@ant-design/icons'

const ZYShare = memo((props) => {
  const { info } = props
  const weiboShare = () => {
    window.open(`https://service.weibo.com/share/share.php?title=${info.momentTitle+`http://www.zsygg.art:8080/#/Blog/moment/${info.id}`}`)
  }
  return (
    <ShareWrapper>
      <div className='item1'>
        <ShareAltOutlined/>
      </div>
      <div className='item1' onClick={ e => weiboShare()}>
      <WeiboOutlined />
      </div>
      <div className='item1'>
      <WechatOutlined />
      </div>
      <div className='item1'>
      <QqOutlined />
      </div>
      </ShareWrapper>
  )
})

export default ZYShare