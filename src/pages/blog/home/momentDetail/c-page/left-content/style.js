import styled from "styled-components";

export const LeftContentWrapper = styled.div`
& .author{
  margin: 20px 10px;
  display: flex;
}
`
export const AuthorInfoWrapper = styled.div`
display: flex;
position:relative ;
justify-content: space-between;
button{
  margin: 20px 10px;
}
.labelWrapper{
  height:40px ;
  position:absolute ;
  left:25% ;
  top:50% ;
  display: flex;
  .tag{
    padding:0 2px;
    margin-right:5px ;
    height:20px ;
    text-align:center ;
    line-height:20px ;
    background-color: #eee;
    color:#FFFFFF ;
    border-radius:4px ;
  }
}

`

export const MomentContentTopImageWrapper = styled.div`
& .topImage{
  /* margin-left: 200px; */
}

`

export const MomentDetailTitle = styled.div`
text-indent: 1em;
font-size: 20px;
font-weight: 800;
& .author{
  font-size: 13px;
  font-weight: 200;
}
`

export const MomentDetailContent = styled.div`
margin-top: 10px;
text-indent: 2em;

`
export const MomentCommentWrapper = styled.div`
.comment{
  display: flex;
  
}
& button{
  margin: 5px 0 0 600px !important;

}

`
export const MomentCommentListWrapper = styled.div`

`