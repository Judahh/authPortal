import styled from 'styled-components';

export const Container = styled.div``;
export const Image = styled.img`
  // z-index: 2;
  position: relative;
  width: 100%;
  // transition: all 1s ease;
  // animation: 1s ease appear;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
  }
`;
export const BackgroundImage = styled.img`
  // z-index: 1;
  // animation: 0.5s ease appear;
  position: absolute;
  width: 100%;
  display: block;
  &::after {
    position: relative;
  }
`;
