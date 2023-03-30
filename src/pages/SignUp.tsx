import Border from '../components/common/Border';
import * as S from './SignUp.styled';

const SignUp = () => {
  return (
    <Border>
      <S.SignUpLayout>
        <S.Title>회원가입</S.Title>
        <S.TextContainer>
          <S.TextBox>
            <S.Text>이메일</S.Text>
            <S.Input />
          </S.TextBox>
          <S.TextBox>
            <S.Text>닉네임</S.Text>
            <S.Input />
          </S.TextBox>
          <S.TextBox>
            <S.Text>비밀번호</S.Text>
            <S.Input />
          </S.TextBox>
          <S.TextBox>
            <S.Text>비밀번호확인</S.Text>
            <S.Input />
          </S.TextBox>
        </S.TextContainer>
      </S.SignUpLayout>
    </Border>
  );
};

export default SignUp;
