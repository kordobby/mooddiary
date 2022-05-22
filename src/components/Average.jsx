import styled from 'styled-components';

function Average(props) {
  let NumArray = props.num;
  let AddNum = NumArray.reduce( (a, b) => ( a + b ) ) / 7;

  return ( 
    <AverageWrap>
      <AveragePoint>Average Score</AveragePoint>
      {/* props로 받은 num 총합 평균치 + 소숫점 정리 */}
      <AveragePoint>{AddNum.toFixed(1)}</AveragePoint>
    </AverageWrap> 
  );        
}


// Average Score Container, Design
const AverageWrap= styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

// Average Score - Span, Design
const AveragePoint = styled.span`
  color : white;
  font-size: 24px;
  margin-bottom : 10px;
  &:last-child {
    font-size : 32px;
    margin-bottom : 0px;
  }
`;

export default Average;