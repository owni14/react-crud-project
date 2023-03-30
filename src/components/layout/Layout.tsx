import Header from './Header';
import * as S from './Layout.styled';
import { IProps } from '../../../types/index';

const Layout = ({ children }: IProps) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

export default Layout;
