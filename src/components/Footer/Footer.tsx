import React from 'react';
import { Wrapper } from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';

export const Footer = () => {
  return (
    <Wrapper data-testid={FooterTestIds.Footer}>
      <>
        <span>WEATHER</span>
        <span>LY</span>&nbsp;-&nbsp;<span data-testid={FooterTestIds.Year}>{new Date().getFullYear()}</span>
      </>
    </Wrapper>
  );
};
