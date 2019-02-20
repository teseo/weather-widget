import React, { Component } from "react";
import DateBasicInfo from "../DateBasicInfo";
import ConditionsInfo from "../ConditionsInfo";
import styled from "styled-components";
import HourlyForecastSummary from "../HourlyForecastSummary";
import ForecastSummary from "../ForecastSummary";
import { Forecast, ForecastList } from "../../types";

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

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

type MyState = {
  city: string;
  list: Array<ForecastList>;
  current: Forecast;
};
type MyProps = {
  fetchForecastList(): () => void;
  list: Array<ForecastList>;
  current: Forecast;
  weekly: Array<Forecast>;
  hourly: Array<Forecast>;
};
export default class WeatherComponent extends Component<MyProps, MyState> {
  componentWillMount(): void {
    this.props.fetchForecastList();
  }

  render() {
    return (
      <WidgetContainer>
        <TopContainer>
          <CurrentInfoContainer>
            {this.props.current &&
              this.props.list.length > 0 && (
                <DateBasicInfo
                  cityName={this.props.current.city}
                  day={this.props.current.day}
                  description={this.props.current.description}
                  icon={this.props.current.icon}
                  degrees={this.props.current.degrees}
                />
              )}
            {this.props.current &&
              this.props.list.length > 0 && (
                <ConditionsInfo
                  rain={this.props.current.rain}
                  wind={this.props.current.wind}
                />
              )}
          </CurrentInfoContainer>
          {this.props &&
            this.props.list.length > 0 && (
              <HourlyForecastSummary list={this.props.hourly} />
            )}
        </TopContainer>
        <BottomContainer>
          {this.props &&
            this.props.list.length > 0 && (
              <ForecastSummary list={this.props.weekly} />
            )}
        </BottomContainer>
      </WidgetContainer>
    );
  }
}
