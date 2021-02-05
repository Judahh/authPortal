import styled from 'styled-components';

export const BasicContentWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  top: 0;
`;

export const SimpleContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding: 160px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
`;
