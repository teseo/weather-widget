import React, {Component} from 'react';
import styled from 'styled-components';
import HourlyForecastUnit from '../HourlyForecastUnit';
import {ForecastList} from "../WeatherWidget/WeatherWidget.Component";

const HourlyForecastSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

`;
const InfoText = styled.text`
  font-size: 11px;

`;
type MyProps = {
  list: Array<ForecastList>
}
export default class HourlyForecastSummary extends Component<MyProps, {}> {
  render() {
    let list: any = [];

    for (let key in this.props.list) {
      let forecast = this.props.list[key];
      list.push(forecast);
    }
    let index: number = 0
    const content = list.map((forecast) => {
        index++;
        return (<HourlyForecastUnit key={index} degree={forecast.degrees} time={forecast.hour}/>
        );
      }
    );
    return (
      <HourlyForecastSummaryContainer>
        {content}
      </HourlyForecastSummaryContainer>
    );
  }
}

