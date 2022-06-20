import React from 'react';
import { Container, Text } from './Footer.styled';
import { FooterTestIds } from './Footer.TestIds';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Text data-testid={FooterTestIds.Container}>
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currentYear}</span>
      </Text>
    </Container>
  );
};
