import styled from 'styled-components';

export const BorderLayout = styled.div<{ theme: string }>`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 35rem;
  height: auto;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.6);
`;
