import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: ${(props) =>
    props.menu === 0 ? props.theme.background : 'transparent'};
  mix-blend-mode: ${(props) => (props.menu === 2 ? 'difference' : 'unset')};
  position: fixed;
  z-index: 999;
`;
