import styled from 'styled-components';

// ======= SignUp, SignIn에서 공통으로 사용되는 스타일 =======
export const SignLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 2rem;
  padding: 6rem 4rem 8rem 4rem;
`;

export const SignTitle = styled.p`
  font-size: 2rem;
  font-family: GmarketSansTTFBold;
  text-align: center;
  margin: 0;
`;

export const SignTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  gap: 1rem;
`;

export const SignTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

export const SignText = styled.p`
  font-size: 1.2rem;
  font-family: GmarketSansTTFMedium;
  margin: 0;
`;

export const SignInput = styled.input`
  width: 99%;
  height: 1.8rem;
  border: 1px solid transparent;
  border-radius: 5px;
`;
// ====================================================
