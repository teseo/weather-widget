import React, {Component} from 'react';
import styled from 'styled-components';
import HourlyForecastUnit from '../HourlyForecastUnit';

const HourlyForecastSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;

`;
const InfoText = styled.text`
  font-size: 11px;

`;
export default class HourlyForecastSummary extends Component {
  render() {
    return (
      <HourlyForecastSummaryContainer>
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
          <HourlyForecastUnit />
      </HourlyForecastSummaryContainer>
    );
  }
}

