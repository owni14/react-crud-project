import * as S from './Header.styled';
import { ReactComponent as Logo } from '../../assets/owni.svg';
import { Link } from 'react-router-dom';
import { HeaderText } from '../../data/Text';

const Header = () => {
  return (
    <S.HeaderLayout>
      <Link to='/'>
        <Logo />
      </Link>
      <S.CategoryBox>
        {HeaderText.map((v, i) => (
          <Link to={v.link} key={i}>
            <S.CategoryText>{v.category}</S.CategoryText>
          </Link>
        ))}
      </S.CategoryBox>
    </S.HeaderLayout>
  );
};

export default Header;
