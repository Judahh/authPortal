import styled from 'styled-components';
export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  max-width: 100%;
  background: ${(props) => props.theme.background};
`;
