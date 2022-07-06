import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 368px;
  height: 200px;
  align-items: center;

  div:nth-child(1) {
    padding-right: 17px;
  }

  img {
    width: 126px;
    height: 123px;
    display: inline-block;
    margin-left: 14px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
  }

  p:nth-child(1),
  p:nth-child(3) {
    font-size: 20px;

    span {
      font-size: 15px;
      font-weight: 100;
    }
  }

  p:nth-child(2) {
    font-size: 96px;
    margin-bottom: -10px;

    span {
      font-size: 48px;
      font-weight: 100;
    }
  }
`;

export { Container };
