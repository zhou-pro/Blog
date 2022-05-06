import styled from "styled-components";


export const BannerListWrapper = styled.div`
position: relative;
/* padding: 3px;
background-color: #ffff; */
`

export const ReadMoreWrapper = styled.div`
  width: 200px;
  height: 100px;
  background-color: #fff;
  border-radius: 3px;
  /* overflow: hidden; */
  position: absolute;
  top: 70%;
  right: 10%;
 
  
  &:hover{
    box-shadow: 0px 6px 10px rgba(0,0,0, .3);
    cursor: pointer;
  }
.nextWrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  /* z-index: 10; */
  transform: translateY(-50%);
 
    .btn{
      position: absolute;
      transform: translateY(-50%);
      width: 37px;
      height: 43px;
      text-align:center;
      line-height:43px;
      color: #fff;
      &:hover {
      background-color: rgba(0, 0, 0, .1);
      color: #333333;
    }
      
    }
    .left{
      left: -40px;
      
    }
    .right{
      right: -40px;
    }
  
}
`
export const Bgerapper = styled.div`
background: url(${props => props.bgImage}) center center/8000px;
background-size: 100% 100%;
width:99vw;
height: 350px;
-webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(20px);
position:absolute;

`
export const BannerWrapperLeft = styled.div`
width:100% ;
height:350px ;
border-radius: 8px;
position: relative;
left:50% ;
transform:translateX(-25%) ;
overflow: hidden;


& .itemImage{
  width: 100%;
  height: 350px;
 
  img{
    border-radius: 2px;
    width: 100%;
    height: 100%;
  }
}
`

export const RecommendMomentWrapper = styled.div`
  width: 320px;
  height: 150px;
  position:absolute ;
  top: 30%;
  left: 10%;
  color:#FFFFFF ;
 
  .text{
    display:flex ;
    margin-bottom:20px ;
    .jian{
      width:0;
    height:0;
    border-top:7px solid transparent;
    border-bottom:7px solid transparent;
    border-left:7px solid red;
    margin-top: 4px;
    margin-right:5px ;
    }
    .recommend{

      color:#FFFFFF;
  
    }
  }
  .momentTitle{
    font-size:31px ;
    width: 320px;
      display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
   overflow: hidden;
    
  }
`

