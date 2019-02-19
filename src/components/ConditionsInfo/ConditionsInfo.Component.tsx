import React, {Component} from 'react';
import styled from 'styled-components';

const ConditionsInfoText = styled.text`
  color: rgb(135, 135, 135);
  font-family: arial, helvetica, sans-serif;
  font-size: 20px;
`;
const ConditionsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;
type MyProps = {
  rain: number;
  wind: number
}
export default class ConditionsInfo extends Component<MyProps, {}> {
  render() {
    const {rain, wind} = this.props;
    return (
      <ConditionsInfoContainer>
        <ConditionsInfoText>Rain in last 3h: {rain} mm</ConditionsInfoText>
        <ConditionsInfoText>Wind Speed: {wind} mps</ConditionsInfoText>
      </ConditionsInfoContainer>
    );
  }
}

