import styled from "styled-components";

export const LoadingWrapper = styled.div`
#preloader_4{
  position:absolute;
top: 50%;
left: 50%;
width:20px;
height:20px;
transform: translate(-200%,-50%);
}
#preloader_4 span{
position:absolute;
width:20px;
height:20px;
background:#3498db;
opacity:0.5;
border-radius:20px;
-webkit-animation: preloader_4 1s infinite ease-in-out;
-moz-animation: preloader_4 1s infinite ease-in-out;
-ms-animation: preloader_4 1s infinite ease-in-out;
-animation: preloader_4 1s infinite ease-in-out;
 
}
#preloader_4 span:nth-child(2){
left:20px;
-webkit-animation-delay: .2s;
-moz-animation-delay: .2s;
-ms-animation-delay: .2s;
animation-delay: .2s;
}
#preloader_4 span:nth-child(3){
left:40px;
-webkit-animation-delay: .4s;
-moz-animation-delay: .4s;
-ms-animation-delay: .4s;
animation-delay: .4s;
}
#preloader_4 span:nth-child(4){
left:60px;
-webkit-animation-delay: .6s;
-moz-animation-delay: .6s;
-ms-animation-delay: .6s;
animation-delay: .6s;
}
#preloader_4 span:nth-child(5){
left:80px;
-webkit-animation-delay: .8s;
-moz-animation-delay: .8s;
-ms-animation-delay: .8s;
animation-delay: .8s;
}
 
@-webkit-keyframes preloader_4 {
    0% {opacity: 0.3; -webkit-transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
    50% {opacity: 1; -webkit-transform: translateY(-10px); background:#f1c40f; box-shadow: 0px 20px 3px rgba(0, 0, 0, 0.05);}
   100%  {opacity: 0.3; -webkit-transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
}
@-moz-keyframes preloader_4 {
    0% {opacity: 0.3; -moz-transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
    50% {opacity: 1; -moz-transform: translateY(-10px); background:#f1c40f; box-shadow: 0px 20px 3px rgba(0, 0, 0, 0.05);}
   100%  {opacity: 0.3; -moz-transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
}
@-ms-keyframes preloader_4 {
    0% {opacity: 0.3; -ms-transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
    50% {opacity: 1; -ms-transform: translateY(-10px); background:#f1c40f; box-shadow: 0px 20px 3px rgba(0, 0, 0, 0.05);}
   100%  {opacity: 0.3; -ms-transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
}
@keyframes preloader_4 {
    0% {opacity: 0.3; transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
    50% {opacity: 1; transform: translateY(-10px); background:#f1c40f; box-shadow: 0px 20px 3px rgba(0, 0, 0, 0.05);}
   100%  {opacity: 0.3; transform:translateY(0px); box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);}
}


`