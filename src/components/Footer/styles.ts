import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 24px;
  background: ${(props) => props.theme.background};
`;

export const Div = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;
`;
