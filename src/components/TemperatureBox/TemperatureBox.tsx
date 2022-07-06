import React from 'react';
import rain from './rain.png';
import { Container } from './TemperatureBox.styled';

const TemperatureBox = () => {
  return (
    <Container>
      <div>
        <img src={rain} />
      </div>
      <div>
        <p>Partly cloudy</p>
        <p>
          16<span>&#8451;</span>
        </p>
        <p>
          feels like 16<span>&#8451;</span>
        </p>
      </div>
    </Container>
  );
};

export { TemperatureBox };
