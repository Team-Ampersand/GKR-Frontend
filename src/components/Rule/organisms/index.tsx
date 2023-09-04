import { useRecoilValue } from 'recoil';
import { ruleType } from 'recoilAtoms';
import OverdueList from '../molecules/OverdueList';
import SanctionBoard from '../molecules/SanctionBoard';
import * as S from './style';

const Rule = () => {
  const active = useRecoilValue(ruleType);

  return (
    <S.Wrapper>
      <OverdueList />
      {active === '연체' ? <SanctionBoard /> : null}
    </S.Wrapper>
  );
};

export default Rule;
