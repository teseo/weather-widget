import React, {Component} from 'react';
import styled from 'styled-components';

const ForecastUnitContainer = styled.div`
  height: 90px;
  margin-top: 10px;
    border: 1px;

`;

const ForecastUnitButton = styled.button`
  color: rgb(34,34,34);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const DegreeText = styled.text`
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  font-family: arial, sans-serif;
`;
const DateText = styled.text`
  font-size: 18px;
  color: #bababa;
  padding-top: 7px;
  line-height: 15px;
  text-align: center;
  font-weight: 400;
`;

const DegreeLeftText = styled(DegreeText)`
  color: rgb(135,135,135);
  padding-right: 5px;

`;
const DegreeRightText = styled(DegreeText)`
  color: rgb(186,186,186);
`;
const WeatherImage = styled.img`
  width: 50px;
  height: 50px;
`;
export default class HourlyForecastUnit extends Component {
  render() {
    return (
      <ForecastUnitContainer>
        <ForecastUnitButton onClick={(event: React.MouseEvent<HTMLElement>) => {
          alert('Pepa');
        }}>
          <DateText>Tue</DateText>
          <WeatherImage src="http://openweathermap.org/img/w/10n.png"/>
          <TextContainer>
            <DegreeLeftText>9°</DegreeLeftText>
            <DegreeRightText>9°</DegreeRightText>
          </TextContainer>
        </ForecastUnitButton>
      </ForecastUnitContainer>
    );
  }
}

