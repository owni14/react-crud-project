import styled from 'styled-components';

export const Main = styled.main<{ theme: string }>`
  /* background-color: ${({ theme }) => theme.colors.gray}; */
  min-height: 95%;
  text-align: center;
  font-size: 5rem;
`;
