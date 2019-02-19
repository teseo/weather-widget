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
type MyProps = {
  degree: number,
  time: string,
};
export default class HourlyForecastUnit extends Component<MyProps, {}> {
  render() {
    return (
      <HourlyForecastUnitContainer>
        <ForecastUnitButton onClick={(event: React.MouseEvent<HTMLElement>) => {
          alert('Pepe');
        }}>
          <DegreeText>{this.props.degree}</DegreeText>
          <TimeText>{this.props.time}</TimeText>
        </ForecastUnitButton>
      </HourlyForecastUnitContainer>
    );
  }
}

