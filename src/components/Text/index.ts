/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from 'styled-components';
// @ts-ignore
import { default as lightTheme } from '../../styles/themes/light.json';
// @ts-ignore
import { default as darkTheme } from '../../styles/themes/dark.json';

export const CopyrightText = styled.span`
  color: ${(props) => props.theme.primary};
`;
export const Title = styled.span`
  width: 100%;
  text-align: center;
  font-size: 2vh;
  font-family: Spartan-Light;
  font-weight: bold;
  margin-bottom: 5vh;
  color: ${(props) => props.theme.primary};

  // @media screen and (max-width: 1000px) {
  //   font-size: 2vh;
  // }
`;

export const Subtitle = styled.h2`
  width: 100%;
  font-size: 2vh;
  font-family: Spartan-Light;
  font-weight: bold;
  color: ${(props) => props.theme.primary};

  text-align: justify;

  // @media screen and (max-width: 1000px) {
  //   font-size: 1.5vh;
  // }
`;

export const MainTitle = styled.h1`
  font-family: Spartan-Thin;
  font-weight: bold;
  font-size: 5vh;
  top: 15vh;
  // width: 100%;
  position: absolute;
  mix-blend-mode: ${(props) =>
    props.theme === darkTheme ? 'difference' : 'unset'};

  color: ${(props) => props.theme.primary};

  @media screen and (max-width: 767px) {
    font-size: 3vh;
  }

  @media screen and (max-width: 450px) {
    top: 80px;
  }
`;

export const MainSubtitle = styled.h2`
  display: block;
  font-family: Spartan-Light;
  font-weight: normal;
  font-size: 2vh;
  bottom: 10vh;
  text-align: center;
  width: 100%;
  mix-blend-mode: difference;
  position: absolute;

  color: ${(props) =>
    props.theme === lightTheme ? props.theme.background : props.theme.primary};

  @media screen and (max-width: 767px) {
    font-size: 1.5vh;
  }

  @media screen and (max-width: 450px) {
    bottom: 10px;
  }
`;

export const Text = styled.span`
  font-size: 2vh;
  max-width: 256px;
  margin: 8px 0;
  line-height: 150%;
`;

export const MediumText = styled(Text)`
  position: relative;
  font-weight: normal;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    height: 2px;
    bottom: -3px;
    left: 0;
    // visibility: hidden;
    width: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &:before {
      background-color: ${(props) => props.theme.primary};
      visibility: visible;
      width: 100%;
    }
  }
`;

export const Error = styled.span`
  font-size: 2vh;
  font-family: Spartan-ExtraLight;
  font-weight: 200;
  color: ${(props) => props.theme.error};
  max-width: 202px;
`;
export const Notification = styled.span`
  font-size: 2vh;
  font-family: Spartan-ExtraLight;
  font-weight: 200;
  color: ${(props) => props.theme.primary};
  max-width: 202px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  padding: ${(props) => (props.icon ? '15px' : '0')};
  margin: ${(props) => (props.icon ? '10px' : '0')};
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => (props.icon ? props.theme.primary : props.theme.text)};
  }

  &:first-child {
    padding-left: 0;
    margin-left: 0;
  }

  &:last-child {
    padding-right: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 380px) {
    &:first-child {
      padding: ${(props) => (props.icon ? '15px' : '0')};
      margin: ${(props) => (props.icon ? '10px' : '15px 0')};
    }

    &:last-child {
      padding: ${(props) => (props.icon ? '15px' : '0')};
      margin: ${(props) => (props.icon ? '10px' : '15px 0')};
    }
  }

  &:visited {
    color: ${(props) => props.theme.text};
  }
`;

export const FixedLink = styled.a`
  font-weight: normal;
  font-size: 15px;
  color: ${(props) => props.theme.primary};
  font-family: Spartan-Light;
  margin: 0 20px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    height: 2px;
    bottom: -3px;
    left: 0;
    // visibility: hidden;
    width: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &:before {
      background-color: ${(props) => props.theme.primary};
      visibility: visible;
      width: 100%;
    }
  }

  &:visited {
    color: ${(props) => props.theme.text};
  }
`;

export const P = styled.p`
  text-indent: 3ch;
  font-size: 1.75vh;
  margin-bottom: 1em;
  line-height: 150%;
`;
