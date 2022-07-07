import React from 'react';
import {StylesDescription} from './WeatherDescription.styled';

type Props = {
  description: string | undefined,
}

const WeatherDescription = ({description}: Props) => {
  return (
    <StylesDescription>{description}</StylesDescription>
  );
};

export {WeatherDescription};
