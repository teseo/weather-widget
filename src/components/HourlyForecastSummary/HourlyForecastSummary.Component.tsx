import React, { Component } from "react";
import styled from "styled-components";
import HourlyForecastUnit from "../HourlyForecastUnit";
import { Forecast } from "../../types";

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
  list: Array<Forecast>;
};
export default class HourlyForecastSummary extends Component<MyProps, {}> {
  render() {
    let index: number = 0;
    const content = this.props.list.map(forecast => {
      index++;
      return (
        <HourlyForecastUnit
          key={index}
          degree={forecast.degrees}
          time={forecast.hour}
        />
      );
    });
    return (
      <HourlyForecastSummaryContainer>{content}</HourlyForecastSummaryContainer>
    );
  }
}
