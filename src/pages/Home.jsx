/* import */

import styled from 'styled-components';
import { useState } from 'react';

// import - Components
import Average from '../components/Average';
import Day from '../components/Day';


function Home() {

  let RanScore = [ 0, 0, 0, 0, 0, 0, 0 ];
  let RanScoreList = RanScore.map( ( value ) => ( value = Math.floor( Math.random() * 6 )));
  
  // 1. 랜덤 숫자 만들기
  // 2. 랜덤 숫자를 props에 넣어주기

  const [num, setNum] = useState(RanScoreList);

  const handleResetClick = () => {
      let newArr = [];
      newArr = num.map((value)=>value = 0);
      setNum(newArr );
      console.log("123");
      console.log(newArr);
    };
  let GetDate = new Date();
  let GetWeek = ['일', '월', '화', '수', '목', '금', '토'];

  let ChangeDay = ["","","","","","",""];
  let DayList = ChangeDay.map( (value, index) => ( value = GetWeek[GetDate.getDay() + index] ));

  return (
    <HomeContainer>
      <Greeting>Weekly Mood Diary</Greeting>
      <div>
        <Day num = {num[0]} day = {DayList[0]}/>
        <Day num = {num[1]} day = {DayList[1]}/>
        <Day num = {num[2]} day = {DayList[2]}/>
        <Day num = {num[3]} day = {DayList[3]}/>
        <Day num = {num[4]} day = {DayList[4]}/>
        <Day num = {num[5]} day = {DayList[5]}/>
        <Day num = {num[6]} day = {DayList[6]}/>
      </div>
      <Average num = {num}/>
      <ResetButton onClick = {handleResetClick}>RESET</ResetButton>
    </HomeContainer>
  );
}

// Home - Main Container Design
const HomeContainer= styled.div`
  width : 400px;
  height : 650px;
  border-radius: 30px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 30px;
  border : solid 1px grey;
  background-color: var(--blue);
`;

const Greeting= styled.div`
  font-size: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  color : white;
`;


const ResetButton= styled.button`
  width : 80px;
  height : 80px;
  border-radius: 80px;
  background-color: #ff7b00;
  border : none;
  &:hover {
    background-color : white;
  }
`;


export default Home;