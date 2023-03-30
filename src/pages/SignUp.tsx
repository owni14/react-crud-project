import Border from '../components/common/Border';
import * as S from '../styles/common-style';
import { SignUpText } from '../data/Text';

const SignUp = () => {
  return (
    <Border>
      <S.SignLayout>
        <S.SignTitle>회원가입</S.SignTitle>
        <S.SignTextContainer>
          {SignUpText.map((v, i) => (
            <S.SignTextBox key={i}>
              <S.SignText>{v}</S.SignText>
              <S.SignInput />
            </S.SignTextBox>
          ))}
        </S.SignTextContainer>
      </S.SignLayout>
    </Border>
  );
};

export default SignUp;
