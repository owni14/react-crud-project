import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainText = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const SubBox = styled.div<{ theme: string }>`
  color: ${({ theme }) => theme.colors.lightBlack};
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 1.5rem;
  margin: 0.2rem;
`;

export const LinkText = styled(Link)<{ theme: string }>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
