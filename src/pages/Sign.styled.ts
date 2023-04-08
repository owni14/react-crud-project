import { Link } from 'react-router-dom';
import styled from 'styled-components';

// SignUp, SignIn에서 사용되는 스타일
export const SignLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 2rem;
  padding: 6rem 4rem;
`;

// 하위 컴포넌트를 3개 이상 감쌀 때 Container란 이름 사용
export const SignTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  gap: 1rem;
`;

// 하위 컴포넌트 2개 이하일때 Box라는 이름 사용
export const SignTextBox = styled.div<{ align?: string; direction?: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'column')};
  align-items: ${({ align }) => (align ? `${align}` : 'flex-start')};
  justify-content: center;
  gap: 0.5rem;
`;

export const SignText = styled.p<{ size?: string }>`
  font-size: ${({ size }) => (size ? `${size}` : '1.2rem')};
  font-family: GmarketSansTTFMedium;
  margin: 0;
`;

export const SignInput = styled.input<{ theme: string }>`
  width: 99%;
  height: 1.8rem;
  border: 2px solid transparent;
  border-radius: 5px;
  &:hover {
    border: ${({ theme }) => `2px solid ${theme.colors.lightBlack}`};
  }
  &:focus {
    outline: none;
    border: ${({ theme }) => `2px solid ${theme.colors.lightBlack}`};
  }
`;

export const SignButton = styled.button<{ theme: string }>`
  border: px solid transparent;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  width: 10rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
  }
`;

export const LinkText = styled(Link)<{ theme: string }>`
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
