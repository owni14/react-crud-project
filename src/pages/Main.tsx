import { Link } from 'react-router-dom';
import * as S from './Main.styled';

const Main = () => {
  return (
    <>
      <S.MainText>안녕하세요! Front End 개발자 Owni입니다.</S.MainText>
      <S.SubBox>
        <S.SubText>
          이 프로젝트는 React를 이용해 CRUD를 구현한 프로젝트입니다.🌟
        </S.SubText>
        <S.SubText>Firebase를 이용해 백엔드를 구성하였습니다.📁</S.SubText>
        <S.SubText>자유롭게 글을 작성하고 서로의 의견을 나눠봐요!📝 </S.SubText>
        <S.SubText>
          저의
          <S.LinkText to='https://github.com/owni14/react-crud-project'>
            Github
          </S.LinkText>
          에서 코드를 확인하실수 있습니다.🔍
        </S.SubText>
      </S.SubBox>
    </>
  );
};

export default Main;
