import styled from 'styled-components';

export const ItemHolder = styled.a`
  margin: 0;
  height: 70px;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid ${(props) => props.theme.holder};
  border-bottom: 1px solid ${(props) => props.theme.holder};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: none;

  &:visited {
    color: ${(props) => props.theme.text};
  }

  & + a {
    border-top: 0;
  }

  &: hover {
    background: ${(props) => props.theme.background};
    font-weight: bold;
    color: ${(props) => props.theme.bright};
  }

  span {
    margin-top: 25px;
    display: inline-block;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const DrawerMenu = styled.div`
  position: relative;
  top: -500%;
  display: node;
  animation: none;
  transition: all 0.2s ease;
  z-index: -10;
  opacity: 0;

  &.open {
    display: block;
    top: -70px;
    transition: all transform 0.2s ease;
    opacity: 1;
  }

  &.closed {
    display: none;
    top: -500%;
    transition: all transform 0.2s ease;
    opacity: 0;
  }
`;

export const DrawerWrapper = styled.div`
  width: 100%;
  left: 0;
  display: none;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  right: 5px;
  height: 100%;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Toggle = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  float: right;
  height: 50px;
  outline: none;
  padding: 0;
  pointer-events: initial;
  position: relative;
  vertical-align: middle;
  width: 50px;
  z-index: 1110;

  span {
    background-color: ${(props) => props.theme.primary};
    content: '';
    display: block;
    height: 2px;
    left: calc(50% - 13px);
    position: absolute;
    top: calc(50% - 1px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: background-color 0.2s ease-in-out,
      top 0.2s 0.2s ease-out, -webkit-transform 0.2s linear;
    transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,
      -webkit-transform 0.2s linear;
    transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,
      transform 0.2s linear;
    transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,
      transform 0.2s linear, -webkit-transform 0.2s linear;
    width: 26px;
  }

  span:before,
  span:after {
    background-color: ${(props) => props.theme.primary};
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: background-color 0.2s ease-in-out,
      top 0.2s 0.2s ease-out, -webkit-transform 0.2s linear;
    transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,
      -webkit-transform 0.2s linear;
    transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,
      transform 0.2s linear;
    transition: background-color 0.2s ease-in-out, top 0.2s 0.2s ease-out,
      transform 0.2s linear, -webkit-transform 0.2s linear;
    width: 26px;
  }
  span:before {
    top: 7px;
  }
  span:after {
    top: -7px;
  }
  &.active span {
    background-color: transparent;
    -webkit-transition: background 0.2s ease-out;
    transition: background 0.2s ease-out;
  }
  &.active span:before,
  &.active span:after {
    -webkit-transition: top 0.2s ease-out, -webkit-transform 0.2s 0.2s ease-out;
    transition: top 0.2s ease-out, -webkit-transform 0.2s 0.2s ease-out;
    transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out;
    transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out,
      -webkit-transform 0.2s 0.2s ease-out;
  }
  &.active span:before {
    top: 0;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
  }
  &.active span:after {
    top: 0;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
  }
`;
