import styled from 'styled-components';

export const HeaderLayout = styled.section<{ theme: string }>`
  width: auto;
  max-height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: GmarketSansTTFBold;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CategoryText = styled.span<{ theme: string }>`
  font-size: 1.3rem;
  font-weight: 700;
  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
