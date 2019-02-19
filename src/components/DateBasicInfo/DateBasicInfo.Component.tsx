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
  padding: 10px;
`;

const ImageDegreeContainer = styled.div`
  display: flex;
  width: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default class DateBasicInfo extends Component {
  render() {
    return (
      <DateBasicInfoContainer>
        <CityText>Edinburgh, UK</CityText>
        <DateDescriptionText>Tuesday 11:00 </DateDescriptionText>
        <DateDescriptionText>Cloudy </DateDescriptionText>
        <ImageDegreeContainer>
          <WeatherImage src="http://openweathermap.org/img/w/10n.png"/>
          <DegreeText>8</DegreeText>
        </ImageDegreeContainer>

      </DateBasicInfoContainer>
    );
  }
}

