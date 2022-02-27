import styled from "styled-components";

export const NavBarWrapper = styled.div`
height: 40px;
line-height: 37px;
display: flex;

`
export const NavBarLeft =styled.div`
margin-left: 300px;
margin-right: 200px;
`

export const NavBarList = styled.div`
display: flex;
font-size: 13px;
justify-content: space-between;
width: 700px;
.navItemWrapper{
  .navItem{
  text-align: center;
  padding: 0 3px 0 3px;
  width: 50px;
  cursor: pointer;
}
.active{
  border-bottom: solid 3px pink;
}

}
& .active:hover{
  border-bottom: solid 3px pink;
}



`

export const UserInfoWrapper= styled.div`
width: 200px;
text-align: center;
font-size: 13px;
cursor: pointer;

 &:hover{
   color: pink;
 }
`