import styled, { StyledComponent } from 'styled-components';

export const CenterContent = styled.div.attrs(() => ({
  className: 'flex flex-col items-center justify-center w-full h-full'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}))`` as StyledComponent<'div', any, Record<string, unknown>, never>;
