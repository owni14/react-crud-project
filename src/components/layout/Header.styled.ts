import styled from 'styled-components';

export const HeaderLayout = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  width: auto;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CategoryText = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
`;
