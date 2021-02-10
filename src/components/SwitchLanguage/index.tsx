/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Flags } from './styles';

const SwitchLanguage = (props) => {
  return (
    <Flags>
      <button
        onClick={() => props.handlePT()}
        style={{ background: 'transparent' }}
        type="submit"
      >
        <img src={'/icons/br.png'} alt="br" />
      </button>

      <button
        onClick={() => props.handleEN()}
        style={{ background: 'transparent' }}
        type="submit"
      >
        <img src={'/icons/en.png'} alt="en" />
      </button>
    </Flags>
  );
};

export default SwitchLanguage;
