import React, { Component } from "react";
import styled from "styled-components";
import { Forecast } from "../../types";

const HourlyForecastUnitContainer = styled.div``;

const ForecastUnitButton = styled.button`
  font-size: 11px;
  color: rgb(34, 34, 34);
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DegreeText = styled.text``;
const TimeText = styled.text``;
type MyProps = {
  forecast: Forecast;
  updateCurrentForecast(item: any, city: string): () => void;
};
export default class HourlyForecastUnit extends Component<MyProps, {}> {
  render() {
    const { item, city, degrees, hour } = this.props.forecast;

    return (
      <HourlyForecastUnitContainer>
        <ForecastUnitButton
          onClick={() => {
            this.props.updateCurrentForecast(item, city);
          }}
        >
          <DegreeText>{degrees}</DegreeText>
          <hr />
          <TimeText>{hour}</TimeText>
        </ForecastUnitButton>
      </HourlyForecastUnitContainer>
    );
  }
}
