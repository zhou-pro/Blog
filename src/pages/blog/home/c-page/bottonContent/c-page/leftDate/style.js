import styled from "styled-components";

export const LeftDateWrapper = styled.div`



`

export const CardContentWrapper = styled.div`
margin-top:30px ;
  width:250px ;
  height:200px ;
  border-radius:8px ;
  overflow:hidden ;
  position:relative ;
  .top{
    height:70% ;
    width:100% ;
    img{
      width:100% ;
      height:100% ;
    }
  }
  .bottom{
    height:30% ;
    width:100% ;
    background-color: #fff;
  }
  .time{
    width:250px ;
    height:50px ;
    text-align:center ;
    color:#FFFFFF ;
    font-size:19px ;
    position:absolute ;
    top:20% ;
   
  }
  .avatar{
    width:70px ;
    height:70px ;
    background-color: #bfa;
    position:absolute ;
    top:70% ;
    left:0 ;
    right:0 ;
    margin:auto ;
    transform:translateY(-50%) ;
    border-radius:50% ;
    padding:2px ;
    /* overflow:hidden ; */
    img{
      width:100% ;
      height:100% ;
      border-radius:50% ;
    }
  }


`