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

type City = {
  name: string;
  country: string;
}
type ForecastMain = {
  temp_max: number;
  temp_min: number;
}
type ForecastRain = {
  '3h': number;
}
type ForecastWind = {
  speed: number;
}
type ForecastWeather = {
  description: string;
  main: string;
  icon: string;
}
type Forecast = {
  wind: ForecastWind;
  weather: ForecastWeather;
  main: ForecastMain;
  rain: ForecastRain;
  dt_text: string;
}
type MyState = {
  city: City;
  list: Array<Forecast>
  current: Forecast
}
export default class WeatherComponent extends Component<{}, MyState> {
  render() {
    return (
      <WidgetContainer>
        <TopContainer>
          <CurrentInfoContainer>
            <DateBasicInfo
              cityName="Edinburgh, UK"
              date="Tuesday 11:00"
              main="Cloudy"
              icon="10n"
              degrees={8}
            />
            <ConditionsInfo
              rain={0.09}
              wind={5.47}
            />
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

