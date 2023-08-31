import SanctionInput from 'components/Rule/atom/SanctionInput';
import * as S from './style';
import Button from 'components/common/atoms/Button';

const SanctionBoard = () => {
  return (
    <S.Wrapper>
      <p>제재하기</p>
      <div>
        <SanctionInput title="대상" placeholder="대상을 선택해주세요" />
        <SanctionInput title="대여물품" />
      </div>
      <Button text="제재하기" />
    </S.Wrapper>
  );
};

export default SanctionBoard;
