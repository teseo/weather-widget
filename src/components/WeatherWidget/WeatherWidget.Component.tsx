import React, {Component} from 'react';
import DateBasicInfo from '../DateBasicInfo'
import ConditionsInfo from '../ConditionsInfo'
import styled from 'styled-components';
import HourlyForecastSummary from '../HourlyForecastSummary';
import ForecastSummary from '../ForecastSummary';
import ApiService from "../../utils";

const MAX_HOURLY_DISPLAY_DATE = 8;
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
export type Forecast = {
  city: string;
  day: string;
  degrees: number;
  description: string;
  hour: string;
  icon: string;
  max: number;
  min: number;
  rain: number;
  wind: number;
}
export type ForecastList = {
  [index: string]: Forecast;
}
type MyState = {
  city: string;
  list: Array<ForecastList>
  current: Forecast
}
export default class WeatherComponent extends Component<{}, MyState> {

  componentDidMount(): void {
    this.loadWeatherForecast();
  }

  loadWeatherForecast = async (): Promise<void> => {
    const weatherData = await ApiService.getWeatherForecast();
    this.processWeatherForecastData(weatherData);

  };

  processWeatherForecastData(weatherData: any): void {

    const list = weatherData.list;

    let totalDays: any = [];
    let currentDate: any = [];
    let cityName: string = '';
    let currentWeather: Forecast = {
        city: '',
        day: '',
        degrees: 0,
        description: '',
        hour: '',
        icon: '',
        max: 0,
        min: 0,
        rain: 0,
        wind: 0,
      }
    ;
    list.map((item: any) => {

        const dateData = item.dt_txt.split(' ');
        const day = new Date(item.dt_txt).toLocaleDateString('EN-GB', {weekday: 'long'});
        const hourRaw = dateData[1];
        const hour = dateData[1].slice(0, -3);
        cityName = weatherData.city.name + ' ' + weatherData.city.country,
          currentDate[item.dt_txt] = {
            day,
            city: cityName,
            rain: item.rain['3h'],
            icon: item.weather[0].icon,
            description: item.weather[0].description,
            hour: dateData[1].slice(0, -3),
            max: Math.round(item.main.temp_max),
            min: Math.round(item.main.temp_min),
            wind: Math.round(item.wind.speed),
            degrees: Math.round(item.main.temp)
          };
        if (currentWeather.city === '') {
          currentWeather = currentDate[item.dt_txt];
        }
        if (totalDays[day] === undefined) {
          totalDays[day] = [];
        }
        totalDays[day][hour] = [];
        totalDays[day][hour] = currentDate[item.dt_txt];
      }
    );
    this.setState({
      list: totalDays,
      city: cityName,
      current: currentWeather
    })
  }

  render() {
    let HourlyForecastSummaryList: any = [];
    let ForecastSummaryList: any = [];
    let forecast: any = [];
    if (this.state && this.state.list) {
      for (let key in this.state.list) {
        let forecast = this.state.list[key];
        for (let keyForecast in forecast) {
          let dayData = forecast[keyForecast];
          if (HourlyForecastSummaryList.length <= MAX_HOURLY_DISPLAY_DATE) {
            HourlyForecastSummaryList.push(dayData);
          }
          if(ForecastSummaryList[key] == undefined){
            ForecastSummaryList[key] = dayData;
          }
        }
      }
    }
    return (
      <WidgetContainer>
        <TopContainer>
          <CurrentInfoContainer>
            {this.state !== null
            &&
            <DateBasicInfo
                cityName={this.state.current.city}
                day={this.state.current.day}
                description={this.state.current.description}
                icon={this.state.current.icon}
                degrees={this.state.current.degrees}
            />
            }
            {this.state !== null
            &&
            <ConditionsInfo
                rain={this.state.current.rain}
                wind={this.state.current.wind}
            />
            }

          </CurrentInfoContainer>
          {this.state &&
          this.state.list != null &&
          this.state.list[this.state.current.day] !== []
          &&
          <HourlyForecastSummary list={HourlyForecastSummaryList}/>
          }
        </TopContainer>
        <BottomContainer>
          <ForecastSummary list={ForecastSummaryList}/>
        </BottomContainer>
      </WidgetContainer>
    );
  }
}

