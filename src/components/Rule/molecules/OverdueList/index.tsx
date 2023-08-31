import OverdueItem from 'components/Rule/atom/OverdueItem';
import { useRecoilValue } from 'recoil';
import { ruleType } from 'recoilAtoms';
import * as S from './style';

const OverdueList = () => {
  const active = useRecoilValue(ruleType);

  return (
    <S.Wrapper>
      {active === '연체' ? (
        <>
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
          <OverdueItem />
        </>
      ) : (
        <>
          <OverdueItem reason="기한 초과" isOverdue={true} />
          <OverdueItem reason="기기 파손" isOverdue={true} />
          <OverdueItem reason="기타(...)" isOverdue={true} />
        </>
      )}
    </S.Wrapper>
  );
};

export default OverdueList;
