import Border from '../components/common/Border';
import * as S from './Sign.styled';
import { SignInText } from '../data/Text';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <Border>
      <S.SignLayout>
        <S.SignTextContainer>
          {SignInText.map((v, i) => (
            <S.SignTextBox key={i}>
              <S.SignText>{v}</S.SignText>
              <S.SignInput />
            </S.SignTextBox>
          ))}
        </S.SignTextContainer>
        <S.SignButton>로그인</S.SignButton>
        <S.SignTextBox align='center' direction='row'>
          <S.SignText size='1rem'>아직 회원이 아니신가요?</S.SignText>
          <S.LinkText to='/Sign-up'>회원가입</S.LinkText>
        </S.SignTextBox>
      </S.SignLayout>
    </Border>
  );
};

export default SignIn;
