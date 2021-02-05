/* eslint-disable filenames/match-regex */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext } from 'react';
import styled from 'styled-components';
import LanguageContext from '../language/context';

const StyledNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  const { notFound } = useContext(LanguageContext);
  return (
    /* @ts-ignore*/
    <StyledNotFound>
      {/* @ts-ignore*/}
      <h1>{notFound.title}</h1>
      {/* @ts-ignore*/}
      <span>{notFound.description}</span>
    </StyledNotFound>
  );
};

export default NotFound;
