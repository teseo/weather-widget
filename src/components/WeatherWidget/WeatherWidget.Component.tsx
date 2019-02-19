import React, {Component} from 'react';
import DateBasicInfo from '../DateBasicInfo'
import ConditionsInfo from '../ConditionsInfo'
import styled from 'styled-components';
import HourlyForecastSummary from '../HourlyForecastSummary';
import ForecastSummary from '../ForecastSummary';

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
    width: 500px;

`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
          <HourlyForecastSummary/>
        </TopContainer>
        <BottomContainer>
          <ForecastSummary/>
        </BottomContainer>
      </WidgetContainer>
    );
  }
}

