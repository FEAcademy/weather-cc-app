import React from 'react';
import { Container, Text } from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container data-testid={FooterTestIds.Container}>
      <Text>
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currentYear}</span>
      </Text>
    </Container>
  );
};

export { Footer };
