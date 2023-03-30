import Border from '../components/common/Border';
import * as S from '../styles/common-style';
import { SignInText } from '../data/Text';

const SignIn = () => {
  return (
    <Border>
      <S.SignLayout>
        <S.SignTitle>로그인</S.SignTitle>
        <S.SignTextContainer>
          {SignInText.map((v, i) => (
            <S.SignTextBox key={i}>
              <S.SignText>{v}</S.SignText>
              <S.SignInput />
            </S.SignTextBox>
          ))}
        </S.SignTextContainer>
        <S.SignButton>로그인</S.SignButton>
      </S.SignLayout>
    </Border>
  );
};

export default SignIn;
