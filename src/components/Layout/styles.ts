import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  box-sizing: border-box;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ::-webkit-scrollbar-track {
    background-color: #0e0e0e;
    position: absolute;
  }

  ::-webkit-scrollbar {
    width: 0.6vw;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ececec;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  border-right: 1px solid ${(props) => props.theme.holder};
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 1000px) {
    border: 0;
    padding: 100px 25px 25px;
    align-self: center;
  }

  @media screen and (max-width: 500px) {
    border: 0;
    padding: 100px 15px 15px;
    min-width: 200px;
    align-self: center;
  }
`;

export const Right = styled.div`
  padding-right: 50px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  // width: 600px;

  @media screen and (max-width: 1000px) {
    // width: 464px;
    max-width: 100%;
    padding: 15px 25px 25px;
    align-self: center;
  }
`;

export const IconList = styled.div`
  display: flex;
  padding-top: 16px;

  @media screen and (max-width: 380px) {
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  // width: 45px;
  height: 20px;
`;

export const LogoHolder = styled.div`
  transition: all 0.2s;
`;
