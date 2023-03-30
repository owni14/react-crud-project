import { IProps } from '../../types';
import * as S from './Border.styled';

const Border = ({ children }: IProps) => {
  return <S.BorderLayout>{children}</S.BorderLayout>;
};

export default Border;
