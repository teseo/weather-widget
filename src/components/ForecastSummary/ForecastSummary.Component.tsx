import React, {Component} from 'react';
import styled from 'styled-components';
import ForecastUnit from '../ForecastUnit';
import {Forecast} from "../WeatherWidget/WeatherWidget.Component";

const ForecastSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;
const InfoText = styled.text`
  font-size: 11px;

`;

type MyProps = {
  list: Array<Forecast>
}
export default class ForecastSummary extends Component<MyProps, {}> {
  render() {
    let index = 0;
    let content;
    if (this.props.list){
      content = this.props.list.map((forecast) => {
          index++;
          return (<ForecastUnit key={index}
                                date={forecast.day.substring(0,3)}
                                icon={forecast.icon}
                                max={forecast.max}
                                min={forecast.min}
          />);
        }
      );
    }
    return (
      <ForecastSummaryContainer>
        {content}
      </ForecastSummaryContainer>
    );
  }
}

