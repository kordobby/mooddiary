import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Detail = (props) => {


  // Routes
  const { day } = useParams();

  /* 계획 단계의 고민들 */
  // Score 컴포넌트에 Id 값을 부여
  // onClick => 헤딩 컴포넌트의 Id 값을 저장, state 없데이트?
  // 그렇게 저장된 Id 값에 따라 다른 상태를 부여하면 어떤가
  // false - grey , true - red
  // 하 이것도 12345로 하면 빡셀거같다



  /* 점수 측정 각 원의 id값이 클릭 이벤트 발생 시 저장되도록 해서 className 값을 부여 */
  const [selectNum, setSelectNum] = useState(0);
  const SelectScoreHandler = (event) => {
    let IdValue = event.target.id;
    setSelectNum(IdValue);
  }

  return (
    <DetailContainer>
        <WrapDetailTitle>
          <DetailDay>{ day }요일</DetailDay>
          <span>평점 남기기</span>
        </WrapDetailTitle>
        <WrapCountScore id = "GetScore">
          <CountScore id = "1" onClick = {SelectScoreHandler} className = {selectNum}></CountScore>
          <CountScore id = "2" onClick = {SelectScoreHandler} className = {selectNum}></CountScore>
          <CountScore id = "3" onClick = {SelectScoreHandler} className = {selectNum}></CountScore>
          <CountScore id = "4" onClick = {SelectScoreHandler} className = {selectNum}></CountScore>
          <CountScore id = "5" onClick = {SelectScoreHandler} className = {selectNum}></CountScore>
        </WrapCountScore>
        <Link to={`/`}><RecordButton>평점 남기기</RecordButton></Link>
    </DetailContainer>
);
}

const DetailContainer= styled.div`
  width : 400px;
  height : 600px;
  border-radius: 30px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 30px;
  border : solid 1px grey;
  background-color: var(--blue);

  font-size : 20px;
  font-weight : 600;
`;

const WrapDetailTitle = styled.div`
  display : flex;
  justify-content: center;
  align-items : center;
  margin-bottom : 30px;
`;

const DetailDay = styled.span`
  background-color : var(--red);
  padding : 7px;
  border-radius : 5px;
  color : white;
  margin-right : 5px;
`;


const WrapCountScore =styled.div`
  display : flex;
  justify-contents : center;
  align-contents : center;
  margin-bottom : 30px;
`;

const CountScore= styled.div`
  width : 35px;
  height : 35px;
  border-radius: 35px;
  margin-left : 15px;
  margin-bottom : 15px;
  &:first-child{
    background-color: ${props => props.className <= 0 ? "white" : "var(--yellow)" };
  }
  &:nth-child(2){
    background-color: ${ props => props.className <= 1 ? "white" : "var(--yellow)" };
  }
  &:nth-child(3){
    background-color: ${ props => props.className <= 2 ? "white" : "var(--yellow)" };
  }
  &:nth-child(4){
    background-color: ${ props => props.className <= 3 ? "white" : "var(--yellow)" };
  }
  &:nth-child(5){
    background-color: ${ props => props.className <= 4 ? "white" : "var(--yellow)" };
  }
  &:hover{
    background-color: var(--yellow) };
    `;

const Comment = styled.p`
  color : white;
`;
const RecordButton = styled.button`
  width: 250px;
  height : 50px;
  border-radius : 50px;
  border : none;
  background-color : #ff7b00;
  &:hover {
    background-color: var(--green);
  }
`;
export default Detail;