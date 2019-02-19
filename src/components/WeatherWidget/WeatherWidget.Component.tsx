import React, {Component} from 'react';
import DateBasicInfo from '../DateBasicInfo'
import ConditionsInfo from '../ConditionsInfo'
import styled from 'styled-components';
import HourlyForecastSummary from '../HourlyForecastSummary';
const Title = styled.h1`
  color: goldenrod;
`;

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: coral;
    width: 500px;

`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
`;

const CurrentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;

`;

const ForeCastContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  background-color: olivedrab;
`;

const TemperaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkorange;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellowgreen;
`;


const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: orchid;
`;
export default class WeatherComponent extends Component {
  render() {
    return (
      <WidgetContainer>
        <TopContainer>
          <CurrentInfoContainer>
            <DateBasicInfo/>
            <ConditionsInfo/>
          </CurrentInfoContainer>
          <HourlyForecastSummary />
        </TopContainer>
        <BottomContainer>

        </BottomContainer>
      </WidgetContainer>
    );
  }
}

