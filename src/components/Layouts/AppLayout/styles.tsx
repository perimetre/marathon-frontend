import styled from 'styled-components';

export const Main = styled.main.attrs(() => ({
  className: 'flex flex-col flex-grow'
}))`
  > * {
    flex-grow: 1;
  }
`;
