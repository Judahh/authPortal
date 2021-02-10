import styled from 'styled-components';
import { shade, transparentize } from 'polished';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Tag = styled.button`
  padding: 4px 16px;
  border-radius: 4px;
  transition: all 0.2s;
  margin-bottom: 16px;
  margin-right: 24px;

  background: ${(props) =>
    props.active ? props.theme.primary : 'rgba(202, 205, 209, 0.25)'};

  &:hover {
    background: ${(props) => shade(0.4, props.theme.primary)};
    h2 {
      color: ${(props) => props.theme.background} !important;
    }
  }

  // &:focus {
  //   background: ${(props) => props.theme.primary};
  //   h2 {
  //     color: ${(props) => props.theme.background} !important;
  //   }
  // }

  // &:first-child {
  //   margin-top: 24px;
  // }

  h2 {
    color: ${(props) =>
      props.active ? props.theme.background : props.theme.text};
  }
`;

export const Input = styled.input`
  padding: 15px;
  padding-left: 0;
  display: block;
  min-width: 300px;
  border-radius: 0;
  font-size: 2vh;
  font-family: Spartan-Light;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => transparentize(0.5, props.theme.text)};
  color: ${(props) => props.theme.text};
  letter-spacing: 1.2px;
  margin-bottom: 16px;

  &:focus {
    border-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
    &::-webkit-input-placeholder {
      color: ${(props) => transparentize(0.5, props.theme.primary)};
    }
  }

  &::-webkit-input-placeholder {
    color: ${(props) => transparentize(0.5, props.theme.primary)};
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 350px) {
    min-width: 100%;
  }

  &:last-child {
    margin-bottom: 30px;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  padding: 8px 68px;
  background: ${(props) =>
    props.disabled ? transparentize(0.5, props.theme.primary) : 'transparent'};
  border: 1px solid
    ${(props) =>
      props.disabled
        ? transparentize(0.9, props.theme.primary)
        : props.theme.primary};
  color: ${(props) =>
    props.disabled
      ? transparentize(0.5, props.theme.primary)
      : props.theme.primary};
  margin: 16px 0;
  margin-left: auto;
  border-radius: 4px;
  transition: all 0.2s;
  max-width: 500px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 2vh;

  &:hover {
    background: ${(props) =>
      props.disabled
        ? transparentize(0.5, props.theme.primary)
        : props.theme.primary};
    color: ${(props) =>
      props.disabled
        ? transparentize(0.5, props.theme.primary)
        : props.theme.background};
  }

  @media screen and (max-width: 500px) {
    min-width: 100%;
  }
`;

export const Button = styled.button`
  font-weight: normal;
  font-size: 15px;
  color: ${(props) => props.theme.primary};
  background-color: transparent;
  font-family: Spartan-Light;
  margin: 0 20px;
  position: relative;

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
