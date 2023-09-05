import RequestItem from 'components/Request/atom/RequestItem';
import * as S from './style';

const RequestList = () => {
  return (
    <S.Wrapper>
      <RequestItem id={1} />
      <RequestItem id={1} />
      <RequestItem id={1} />
      <RequestItem id={1} />
      <RequestItem id={1} />
      <RequestItem id={1} />
    </S.Wrapper>
  );
};

export default RequestList;
