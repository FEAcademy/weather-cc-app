import React from 'react';
import { Container } from './TemperatureBox.styled';

const TemperatureBox = () => {
  return (
    <Container>
      <div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" />
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
