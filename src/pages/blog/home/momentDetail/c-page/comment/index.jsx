import React, { memo , createElement, useState, useEffect } from 'react'

import { CommentWrapper } from './style'

import { Comment, Tooltip, Avatar, Input, Button } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

import { deleteComentById, replyComment, getCommentByMomentId } from '@/services/blog/blog'
import { getCache } from '@/utils/cache'
import Item from 'antd/lib/list/Item';

const { TextArea } = Input;

export default memo(function ZYComment(props) {
  // console.log(props);
  const { momentInfo, updateMoment } = props
  const { id: momentId } = momentInfo

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null)
  const [replyValue, setReplyValue] = useState('')
  const [commentList,setCommentList] = useState([])
  const [userId, setUserId] = useState(null)

useEffect(() => {
  const userInfo = getCache('userInfo')
  if(userInfo){
    setUserId(userInfo.id)
  }
})
// const getCommentList = () => {
//   getCommentByMomentId(momentId).then(res => {
//     console.log(res);
//     // setCommentList(res)
//   })
// }
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const deleteCom = (id) => {
    // console.log(id);
    deleteComentById(id).then(res => {
      if(res){
        updateMoment()
      }
    })
  }

  const replyCommentBox = (index) => {
    setCurrentIndex(index)
    
  }
const replyCommentById = (id) => {
  if(!replyValue)return
  replyComment(id,{momentId,content:replyValue}).then(res => {
    if(res){
      setCurrentIndex(null);
      updateMoment()
      setReplyValue('')
    }
  })
}
  return momentInfo?<div>
    {momentInfo.comments?momentInfo.comments.map((item, index) => {
      const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={dislike}>
            {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" onClick={e => replyCommentBox(index)}>回复</span>,<span onClick={e => deleteCom(item.id)}>{item.user?.id == userId ?'删除':''}</span>
      ]
      
      return  <CommentWrapper key={item.id}>
        {item.commentId?"": <Comment
      
      actions={actions}
      author={<a>{item.user.name}</a>}
      avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
      content={
        <p>
         {item.content}
        </p>
      }
      datetime={
        <Tooltip title={moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment(item.createTime).fromNow()}</span>
          {item.user.id === momentInfo.author.id?<span style={{width:20,marginLeft:5,backgroundColor:'#87d068',borderRadius:3,color:'#fff',padding:2,fontSize:3}}>作者</span>:''}

        </Tooltip>
      }
      
    />}
       {/* 回复 */}
    {momentInfo.comments.map((iten,indey)=>{
      const action2 = [
        // <Tooltip key="comment-basic-like" title="Like">
        //   <span onClick={like}>
        //     {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        //     <span className="comment-action">{likes}</span>
        //   </span>
        // </Tooltip>,
        // <Tooltip key="comment-basic-dislike" title="Dislike">
        //   <span onClick={dislike}>
        //     {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        //     <span className="comment-action">{dislikes}</span>
        //   </span>
        // </Tooltip>,
        <span key="comment-basic-reply-to" onClick={e => replyCommentBox(index)}>回复</span>,<span onClick={e => deleteCom(iten.id)}>{iten.user.id == userId ?'删除':''}</span>
      ]
      return <div key={iten.id}>{item.id == iten.commentId?<Comment
        actions={action2}
        style={{marginLeft:100}}
        author={<a>{iten.user.name + ' 回复 ' + item.user.name}</a>}
        avatar={<Avatar src={iten.user.avatarUrl} alt="Han Solo" />}
        content={
          <p>
           {iten.content}
          </p>
        }
        datetime={
          <Tooltip title={moment(iten.createTime).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(iten.createTime).fromNow()}</span>
            {iten.user.id === momentInfo.author.id?<span style={{width:20,marginLeft:5,backgroundColor:'#87d068',borderRadius:3,color:'#fff',padding:2,fontSize:3}}>作者</span>:''}
  
          </Tooltip>
        }
        
      />:''}</div>
    })}
   <div className='replyBox'>
     <div  className={currentIndex === index ? '':'deActive'}>
     <TextArea rows={4} value={replyValue} onChange={e => setReplyValue(e.target.value)}/>
    <div className='replyBtn'><Button size='small' onClick={e => replyCommentById(item.id)} type='primary' >回复</Button></div>
     </div>
   
   </div>
      </CommentWrapper>
    }):<div style={{textAlign:'center',fontSize:10}}>暂无评论哦~~</div> }
    
  </div>:''
})
