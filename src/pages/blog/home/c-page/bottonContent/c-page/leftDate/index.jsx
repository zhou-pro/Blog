import React, { memo, useState } from 'react'

import { LeftDateWrapper,  CardContentWrapper} from './style'

import { Card , Calendar,Collapse  } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Meta } = Card;


  

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
     
    var Current= curYear+timeStr+curMonth+timeStr+curDay+' '+curHour+':'+curMinute+':'+curSec;
 
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
        <Card
    hoverable
    style={{ width: 220}}
  >
   <CardContentWrapper>
     <div   className='time'>
       {time}
     </div>   
     <div className='dot'>
     <Collapse accordion ghost>
    <Panel header="day1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="day2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="day3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
     </div>
     {/* <div>最新评论</div> */}
   </CardContentWrapper>
  </Card>
    </LeftDateWrapper>
  )
})
