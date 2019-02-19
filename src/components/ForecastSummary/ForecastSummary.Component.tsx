import React, {Component} from 'react';
import styled from 'styled-components';
import ForecastUnit from '../ForecastUnit';
import {ForecastList} from "../WeatherWidget/WeatherWidget.Component";

const ForecastSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;
const InfoText = styled.text`
  font-size: 11px;

`;

type MyProps = {
  list: Array<ForecastList>
}
export default class ForecastSummary extends Component<MyProps, {}> {
  render() {
    let list: any = [];

    for (let key in this.props.list) {
      let forecast = this.props.list[key];
      list.push(forecast);
    }
    let index: number = 0
    const content = list.map((forecast) => {
        index++;
        return (<ForecastUnit key={index}
                              date={forecast.day.substring(0,3)}
                              icon={forecast.icon}
                              max={forecast.max}
                              min={forecast.min}
          />);
      }
    );
    return (
      <ForecastSummaryContainer>
        {content}
      </ForecastSummaryContainer>
    );
  }
}

