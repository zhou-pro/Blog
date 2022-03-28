import styled from 'styled-components';

export const RightCardWrapper = styled.div`
width: 100%;
height:850px ;
display: flex;
justify-content: space-between;
flex-direction:column ;
flex-wrap: wrap;
      .cardInfoWrapper{
        width: 33%;
        max-height:270px ;
        margin-right:20px ;
        background-color: #FFFFFF;
        position: relative;
        overflow:hidden ;
        &:hover{
          box-shadow:0px 0px 20px rgba(0,0,0,.3) ;
          cursor:pointer ;
        }
        &:hover .hoverTitle{
          /* display: none ; */
          left:-300px ;
        }
        
        .hoverTitle{
          line-height: 35px;
          font-size:20px ;
          color:#FFFFFF ;
          height:40px ;
          cursor: pointer;
          position: absolute ;
          left: 5px;
          top:50%;
          z-index:9 ;
          transition: left 1s linear ;
          background-image: linear-gradient(to right,#C4BFDF,#A1BAE2) ;
          opacity:.8 ;
          border-top-right-radius:8px ;
          border-top-left-radius:8px ;
          border-bottom-right-radius:8px ;
          padding:0 3px ;
          
        }
        .image{
          width:100% ;
          height:100% ;
         
          &:hover + .hoverTitle{
          /* display: none ; */
          left:-300px ;
        }
        }
        .titleInfo{
          background-color: #FFF;
          height:40px ;
          .title{
            font-size: 13px;
            font-weight:600 ;
            position:relative ;
            .tag{
              border-top-right-radius:5px ;
              border-top-left-radius:5px ;
              border-bottom-right-radius:5px ;
              position:absolute ;
              right:0 ;
              top:2px ;
            }
          }
        }
      }
`

export const ItemCardWraper = styled.div`
height: 100%;
margin:8px 3px;
columns: 1;


& .ant-card-body{
  /* border:solid 1px #eee; */
  background-color: #fff;
}
`