import styled from 'styled-components';

export const Flags = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 6px;
  top: 27.5px;

  button {
    margin: 5px;
    &:hover {
      // img {
      //   animation: 1.5s $ {bounceInAnimation};
      // }
    }
  }

  @media (max-width: 1166px) {
    margin-right: 40vw;
    top: 12.5px;
  }

  @media (max-width: 767px) {
    button {
      &:hover {
        // img {
        //   animation: 1.5s $ {flashAnimation};
        // }
      }
    }
  }
`;
