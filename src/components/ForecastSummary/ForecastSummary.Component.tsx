import React, {Component} from 'react';
import styled from 'styled-components';
import ForecastUnit from '../ForecastUnit';

const ForecastSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;
const InfoText = styled.text`
  font-size: 11px;

`;
export default class ForecastSummary extends Component {
  render() {
    return (
      <ForecastSummaryContainer>
          <ForecastUnit />
          <ForecastUnit />
          <ForecastUnit />
          <ForecastUnit />
          <ForecastUnit />
      </ForecastSummaryContainer>
    );
  }
}

