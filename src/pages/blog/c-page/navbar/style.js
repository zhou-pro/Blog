import styled from "styled-components";

export const NavBarWrapper = styled.div`
height: 40px;
line-height: 37px;
display: flex;

.search{
  margin-top:6px ;
  position: 'relative';
  .showSearch{
  position:absolute ;
  width:0 ;
 border-radius:2px ;
  background-color: #FFFFFF;
  padding:0 10px ;
  max-height: 400px;
  overflow-y: auto;
  .listItem :hover{
    background-color: #eee;
    cursor: pointer;
  }
}
  .ant-input{
    border-top-left-radius:4px ;
    border-bottom-left-radius:4px ;
  }
}

`
export const NavBarLeft =styled.div`
margin-left: 300px;
margin-right: 200px;

`

export const NavBarList = styled.div`
display: flex;
font-size: 13px;
justify-content: space-between;
width: 500px;
.navItemWrapper{
  .navItem{
  text-align: center;
  padding: 0 3px 0 3px;
  width: 50px;
  cursor: pointer;
  font-size:13px ;
}
.active{
  border-bottom: solid 4px pink;
  border-radius: 4px;
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