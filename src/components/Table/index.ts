import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:not(:last-child) {
    margin-right: 24px;
  }

  @media screen and (max-width: 1033px) {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
