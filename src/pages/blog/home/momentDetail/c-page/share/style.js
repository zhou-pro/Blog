import styled from "styled-components";

export const ShareWrapper = styled.div`
margin-left:14px ;

width:20% ;
height:200px ;

position:sticky ;
top:70% ;
.item1{
  width:40px ;
  height:40px ;
  text-align:center ;
  font-size: 20px ;
  line-height:40px ;
  background-color: #fff;
  border-radius:50% ;
  margin-top:9px ;
  &:hover{
    box-shadow:5px 5px 10px rgba(0,0,0,.3) ;
    background-color: #eee;
   cursor: pointer;
  }
}
`