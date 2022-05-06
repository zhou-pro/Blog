import styled from "styled-components";


export const BgcWra = styled.div`
padding-top: 60px;
.backTopWrapper{
       
       .backTop{
         width:40px ;
       height:40px ;
       background-color: #fff;
       color: skyblue;
       border-radius:50% ;
       text-align:center ;
       line-height:40px ;
       font-size:20px ;
       }
       .backTop:hover{
         box-shadow:0px 0px 10px rgba(0,0,0,.3) ;
         color:#333333 ;
       }
     }
`
export const BgWrapperT = styled.div`
width: 100%;
height: 100%;

background:url(${props => props.imgaes});   

background-repeat:no-repeat;

background-size:cover;

-webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(6px);


position:fixed;

left:0;

top:0;


`

export const MomentDetailWrapper = styled.div`

display: flex;
/* margin-top: 60px; */
`
export const MomentDetailLeftWrappwer = styled.div`
padding: 20px;
width: 730px;
background-color: #fff;
`
export const MomentDetailRightWrappwer = styled.div`

 width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  position:relative ;
  z-index: 9 ;
`