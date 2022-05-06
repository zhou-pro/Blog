import React, { memo, useState } from 'react'

import { LeftDateWrapper,  CardContentWrapper} from './style'

import { Card , Calendar,Collapse  } from 'antd';




  

export default memo(function ZYLeftDate() {

  const [time, setTime] = useState('')

  function getCurDate(){
    var timeStr = '-';
    var curDate = new Date();
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth()+1;
    var curDay = curDate.getDate();
    var curWeekDay = curDate.getDay()+1;
    var curHour = curDate.getHours();
    var curMinute = curDate.getMinutes();
    var curSec = curDate.getSeconds();
     
    var Current= curYear+' '+timeStr+' '+curMonth+' '+timeStr+' '+curDay+' '+curHour+':'+curMinute+':'+curSec;
 
    return Current;
    }
    
    function onPanelChange(value, mode) {
      console.log(value, mode);
    }
    setInterval(() => {
        setTime(getCurDate())
      }, 1000);
      
    

  return (
    <LeftDateWrapper>
       <CardContentWrapper>
         <div className='top'>
           <img src="https://api.adicw.cn/uploads/DfImg/QQ%E5%9B%BE%E7%89%8720190417192123.jpg" alt="" />
         </div>
         <div className='bottom'></div>
         <div className='avatar'>
           <img src="http://www.zsygg.art:3000/users/1/avatar" alt="" />
         </div>
         <div className='time'>{time}</div>
       </CardContentWrapper>
    </LeftDateWrapper>
  )
})
