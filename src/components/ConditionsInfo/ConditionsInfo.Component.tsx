import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.text`
  color: goldenrod;
`;

const ConditionsInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: chartreuse;
  margin-top: 150px;
`;

export default class ConditionsInfo extends Component {
  render() {
    return (
      <ConditionsInfoContainer>
        <Title>ConditionsInfo</Title>
      </ConditionsInfoContainer>
    );
  }
}

