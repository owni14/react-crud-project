import * as S from './Header.styled';
import { ReactComponent as Logo } from '../../assets/owni.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.HeaderLayout>
      <Link to='/'>
        <Logo />
      </Link>
      <S.CategoryBox>
        <Link to='/Post'>
          <S.CategoryText>게시판</S.CategoryText>
        </Link>
        <Link to='Writing'>
          <S.CategoryText>글쓰기</S.CategoryText>
        </Link>
        <Link to='Sign-in'>
          <S.CategoryText>로그인</S.CategoryText>
        </Link>
        <Link to='Sign-up'>
          <S.CategoryText>회원가입</S.CategoryText>
        </Link>
      </S.CategoryBox>
    </S.HeaderLayout>
  );
};

export default Header;
