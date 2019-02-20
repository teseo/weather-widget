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

type MyProps = {
  date: string,
  icon: string,
  min: number,
  max: number,
}
export default class HourlyForecastUnit extends Component<MyProps, {}> {
  render() {
    const {date, icon, max, min} = this.props;
    const iconImage = "http://openweathermap.org/img/w/"+ icon +".png"
    return (
      <ForecastUnitContainer>
        <ForecastUnitButton onClick={(event: React.MouseEvent<HTMLElement>) => {
          alert('Pepa');
        }}>
          <DateText>{date}</DateText>
          <WeatherImage src={iconImage}/>
          <TextContainer>
            <DegreeLeftText>{min}°</DegreeLeftText>
            <DegreeRightText>{max}°</DegreeRightText>
          </TextContainer>
        </ForecastUnitButton>
      </ForecastUnitContainer>
    );
  }
}

