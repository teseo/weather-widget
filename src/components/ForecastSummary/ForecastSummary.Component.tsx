import React, { Component } from "react";
import styled from "styled-components";
import ForecastUnit from "../ForecastUnit";
import { Forecast } from "../../types";

const ForecastSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
type MyProps = {
  list: Array<Forecast>;
};
export default class ForecastSummary extends Component<MyProps, {}> {
  render() {
    let index = 0;
    let content;
    if (this.props.list) {
      content = this.props.list.map(forecast => {
        index++;
        return (
          <ForecastUnit
            key={index}
            forecast={forecast}
          />
        );
      });
    }
    return <ForecastSummaryContainer>{content}</ForecastSummaryContainer>;
  }
}
