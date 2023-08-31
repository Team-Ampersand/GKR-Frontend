import * as S from './style';
import { useRecoilState } from 'recoil';
import { ruleType } from 'recoilAtoms';

const RuleHeader = () => {
  const [active, setActive] = useRecoilState(ruleType);

  return (
    <S.Wrapper>
      <S.Text active={active === '연체'} onClick={() => setActive('연체')}>
        연체학생
      </S.Text>
      <S.Text active={active === '제재'} onClick={() => setActive('제재')}>
        제재학생
      </S.Text>
    </S.Wrapper>
  );
};

export default RuleHeader;
