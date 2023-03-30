import Header from './Header';
import * as S from './Layout.styled';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

export default Layout;
