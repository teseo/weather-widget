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

export default class ConditionsInfo extends Component {
  render() {
    return (
      <ConditionsInfoContainer>
        <ConditionsInfoText>Rain in last 3h: 0.09 mm</ConditionsInfoText>
        <ConditionsInfoText>Wind Speed: 5.47 mps</ConditionsInfoText>
      </ConditionsInfoContainer>
    );
  }
}

