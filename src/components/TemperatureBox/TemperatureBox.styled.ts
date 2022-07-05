import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 368px;
  height: 200px;
  align-items: center;
  background-color: #eeeeee;

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
    //line-height: 24px;

    span {
      font-size: 15px;
      //line-height: 18px;
      font-weight: 100;
    }
  }

  p:nth-child(2) {
    font-size: 96px;
    //line-height: 96px;

    span {
      font-size: 48px;
      //line-height: 96px;
      font-weight: 100;
    }
  }
`;

export { Container };
