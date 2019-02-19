import React, {Component} from 'react';
import styled from 'styled-components';

const HourlyForecastUnitContainer = styled.div`
`;

const ForecastUnitButton = styled.button`
  font-size: 11px;
  color: rgb(34,34,34);
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DegreeText = styled.text`

`;
const TimeText = styled.text`

`;
export default class HourlyForecastUnit extends Component {
  render() {
    return (
      <HourlyForecastUnitContainer>
        <ForecastUnitButton onClick={(event: React.MouseEvent<HTMLElement>) => {
          alert('Pepe');
        }}>
          <DegreeText>8</DegreeText>
          <TimeText>10:00</TimeText>
        </ForecastUnitButton>
      </HourlyForecastUnitContainer>
    );
  }
}

