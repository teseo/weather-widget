import React, {Component} from 'react';
import styled from 'styled-components';


const WeatherImage = styled.img`
  width: 50px;
  height: 50px;
`;
const DateInfoText = styled.text`
  color: rgb(135, 135, 135);
  font-family: arial, sans-serif;
`;
const DegreeText = styled.text`
  color: rgb(33, 33, 33);
  font-family: arial, helvetica, sans-serif;
  font-size: 64px;
`;
const CityText = styled(DateInfoText)`
  font-size: 30px;
  font-weight: 100;
`;

const DateDescriptionText = styled(DateInfoText)`
  font-size: 20px;
`;

const DateBasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
`;

const ImageDegreeContainer = styled.div`
  display: flex;
  width: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

type MyProps = {
  cityName: string;
  day: string;
  description: string;
  icon: string;
  degrees: number;
}
export default class DateBasicInfo extends Component<MyProps, {}> {
  render() {
    const {cityName, day, description, icon, degrees} = this.props;
    const iconImage = "http://openweathermap.org/img/w/" + icon + ".png";
    return (
      <DateBasicInfoContainer>
        <CityText>{cityName}</CityText>
        <DateDescriptionText>{day}</DateDescriptionText>
        <DateDescriptionText>{description}</DateDescriptionText>
        <ImageDegreeContainer>
          <WeatherImage src={iconImage}/>
          <DegreeText>{degrees}</DegreeText>
        </ImageDegreeContainer>

      </DateBasicInfoContainer>
    );
  }
}

