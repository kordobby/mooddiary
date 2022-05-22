/* import */
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Day(props) {

  return ( 
    <>
      <DayScoreWrap>
        { /* props로 받아온 해당 요일 표시 */ }
        <DayText>
          <p>{props.day}</p>
        </DayText>
        <ScoreBox>
          <Score num = {props.num} ></Score>
          <Score num = {props.num} ></Score>
          <Score num = {props.num} ></Score>
          <Score num = {props.num} ></Score>
          <Score num = {props.num} ></Score>
          <Link to={`/detail/${props.day}`}><Arrow ></Arrow></Link>
        </ScoreBox>
      </DayScoreWrap>
    </>
  );
        
};

const DayScoreWrap = styled.div`
  display : flex;
  height : 50px;
  justify-content: center;
  align-items: center;
`;

const DayText = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);

  font-size : 18px;
  color : white;
  font-weight : 600;
  width : 35px;
  height : 35px;
  border-radius: 35px;
`;

const ScoreBox = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
    `;

// Score Component - 점수 변화에 따른 색상 표현
const Score = styled.div`
  width : 35px;
  height : 35px;
  border-radius: 35px;
  margin-left : 15px;
  // props.num 의 크기에 따른 각 원의 색상 변화
  &:first-child{
    background-color: ${ props => props.num <= 0 ? "white" : "var(--yellow)" };
  }
  &:nth-child(2){
    background-color: ${ props => props.num <= 1 ? "white" : "var(--yellow)" };
  }
  &:nth-child(3){
    background-color: ${ props => props.num <= 2 ? "white" : "var(--yellow)" };
  }
  &:nth-child(4){
    background-color: ${ props => props.num <= 3 ? "white" : "var(--yellow)" };
  }
  &:nth-child(5){
    background-color: ${ props => props.num <= 4 ? "white" : "var(--yellow)" };
  }
    `;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 18px solid transparent;
  border-top: 18px solid transparent;
  border-left: 28px solid var(--green);
  border-right: 28px solid transparent;
  margin-left: 15px;
  &:hover {
    border-left: 28px solid var(--red);
  }
    `;

export default Day;