import React, { memo, useState } from 'react'

import LazyLoad from 'react-lazyload';

import { getCache } from '@/utils/cache'
import { sendCommentById } from '@/services/blog/blog'

import ZYMomentContent from './moment-content'

import Comment from '../comment'

import { LeftContentWrapper, 
         MomentDetailTitle, 
         MomentDetailContent, 
         MomentCommentWrapper,
         MomentCommentListWrapper,
         MomentContentTopImageWrapper,
         AuthorInfoWrapper
      } from './style'

import { Input, Avatar, Button, Image, message, Spin} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useEffect } from 'react'
const { TextArea } = Input;

export default memo(function ZYLeftContent(props) {

  const [commentInfo, setCommentInfo] = useState('')
  const { info, title, updateMoment } = props
 const userInfo = getCache("userInfo")
 const formdat =info.createTime?info.createTime.split("T")[0]:''
  // console.log(info);

const sendComment = (id) => {
  if(!commentInfo) return
  if(!getCache('userInfo')) return message.error('请先登录')
  sendCommentById({momentId:id, content:commentInfo}).then(res => {
  if(res){
    setCommentInfo('')
    updateMoment()
  }
  })
  
}

// useEffect(() => {

// },[commentInfo])

  return (
    <LeftContentWrapper>
     <AuthorInfoWrapper>
     <div className="author">
      <Avatar src={info.author?info.author.avatarUrl:''}  size="large" icon={<UserOutlined />}  style={{marginRight:10}}/>
         <div >
         <span style={{fontSize:20,fontWeight:400}}>{info.author?info.author.name:''}</span><br/>
         <span>{ formdat }</span>
         </div>

       </div>
       <div><Button  size="middle">关注</Button></div>
     </AuthorInfoWrapper>
     <MomentContentTopImageWrapper>
       <LazyLoad height={380} >
       <Image
     className="topImage"
      width={690}
      height={380}
      src={info.imgaes?info.imgaes[0]:"https://w.wallhaven.cc/full/l3/wallhaven-l3r3jp.jpg"}
    />
       </LazyLoad>
     
     </MomentContentTopImageWrapper>
     <MomentDetailTitle>
       {title||''}
     </MomentDetailTitle>
     <MomentDetailContent>
       {
         info? <ZYMomentContent info={ info }/>:''
       }
      
     </MomentDetailContent>
     <MomentCommentWrapper>
       <div className="comment">
       <Avatar src={userInfo?`http://106.14.167.231:3000/users/${userInfo.id}/avatar`:''}  size="default" icon={<UserOutlined />}  style={{marginRight:10}}/>
       <TextArea value={ commentInfo } onChange={e => setCommentInfo(e.target.value)} rows={2} placeholder={"请输入评论"}/>
       </div>
      <Button onClick={e => sendComment(info.id)}>发表评论</Button>
      <MomentCommentListWrapper>
      <Comment momentInfo={ info } updateMoment={updateMoment}/>
      </MomentCommentListWrapper>
     </MomentCommentWrapper>
    </LeftContentWrapper>
  )
})
