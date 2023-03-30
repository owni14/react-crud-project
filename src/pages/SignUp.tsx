import Border from '../components/common/Border';
import * as S from './SignUp.styled';
import { SignUpText } from '../data/Text';

const SignUp = () => {
  return (
    <Border>
      <S.SignUpLayout>
        <S.Title>회원가입</S.Title>
        <S.TextContainer>
          {SignUpText.map((v, i) => (
            <S.TextBox key={i}>
              <S.Text>{v}</S.Text>
              <S.Input />
            </S.TextBox>
          ))}
        </S.TextContainer>
      </S.SignUpLayout>
    </Border>
  );
};

export default SignUp;
