import React, {Component} from 'react';
import DateBasicInfo from '../DateBasicInfo'
import ConditionsInfo from '../ConditionsInfo'
import styled from 'styled-components';

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
  background-color: deeppink;
`;

const CurrentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  background-color: lightcoral;
  justify-content: space-between;

`;

const ForeCastContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export default class WeatherComponent extends Component {
  render() {
    return (
      <WidgetContainer>
        <TopContainer>
          <CurrentInfoContainer>
            <DateBasicInfo/>
            <ConditionsInfo/>
          </CurrentInfoContainer>
          <ForeCastContainer>
            <TemperaturesContainer>
              Degrees: 8
            </TemperaturesContainer>
            <TimeContainer>
              Time: 10:00
            </TimeContainer>
          </ForeCastContainer>
        </TopContainer>
      </WidgetContainer>
    );
  }
}

