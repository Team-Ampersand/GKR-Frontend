import RequestList from '../../molecules/RequestList';
import * as S from './style';

const Request = () => {
  return (
    <S.Wrapper>
      <p>요청 학생 리스트</p>
      <RequestList />
    </S.Wrapper>
  );
};

export default Request;
