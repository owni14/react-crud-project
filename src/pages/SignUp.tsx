import Border from '../components/common/Border';
import * as S from './Sign.styled';
import { SignUpText } from '../data/Text';

const SignUp = () => {
  return (
    <Border>
      <S.SignLayout>
        <S.SignTextContainer>
          {SignUpText.map((v, i) => (
            <S.SignTextBox key={i}>
              <S.SignText>{v}</S.SignText>
              <S.SignInput />
            </S.SignTextBox>
          ))}
        </S.SignTextContainer>
        <S.SignButton>회원가입</S.SignButton>
      </S.SignLayout>
    </Border>
  );
};

export default SignUp;
