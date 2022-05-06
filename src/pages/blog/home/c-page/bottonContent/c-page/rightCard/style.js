import styled from 'styled-components';

export const RightCardWrapper = styled.div`

      .cardInfoWrapper{
        width: 100%;
        max-height:270px ;
        margin-right:20px ;
        background-color: #FFFFFF;
        position: relative;
        overflow:hidden ;
        border-radius: 2px;
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
          /* height:40px ; */
          cursor: pointer;
          position: absolute ;
          left: 5px;
          top:50%;
          z-index:9 ;
          transition: left 1s linear ;
          background-image: linear-gradient(to right,#C4BFDF,#A1BAE2) ;
          opacity:.5 ;
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
            .icon{
              height:13px ;
              width:100% ;
              position:absolute ;
              left:6px ;
              top:10px;
             
              span{
                margin-right: 3px;
              }
            
            }
            .tag{
              border-top-right-radius:5px ;
              border-top-left-radius:5px ;
              border-bottom-right-radius:5px ;
              position:absolute ;
              right:0 ;
              top:5px ;
            }
          }
        }
      }
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
export const CategoryWrapper = styled.div`
  .tabWrapper{
    display:flex ;
    margin: 0 0 30px 0 ;
    .itemActive{
      background-color: pink;
      color:#FFFFFF;
      border-radius:8px ;
    }
    .Item{
      width:60px ;
      height:20px ;
      margin-right:15px ;
      
      text-align: center;
      line-height:20px ;
      position:relative ;
      .bot{
        width:0 ;
        height:0 ;
        border-left:5px solid transparent ;
        border-right:5px solid transparent ;
        border-top:5px solid pink ;
        position:absolute ;
        bottom: -5px;
        left:0 ;
        right:0;
        margin:auto;
      }
      &:hover{
        cursor: pointer;
      }
    }
  }

`



