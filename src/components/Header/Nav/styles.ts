import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 15px 30px;
  z-index: 1000;
  // border-bottom: ${(props) => props.theme.text} 1px solid;
  box-sizing: border-box;
`;

export const NavList = styled.div`
  display: flex;
`;
