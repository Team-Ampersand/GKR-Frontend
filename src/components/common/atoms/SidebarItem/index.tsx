import { useRecoilValue } from 'recoil';
import * as S from './style';
import { roleType } from 'recoilAtoms';

interface Props {
  icon: JSX.Element;
  name: string;
  active: boolean;
}

const SidebarItem = ({ icon, name, active }: Props) => {
  const role = useRecoilValue(roleType);

  return (
    <S.Wrapper checked={active} roleType={role}>
      <S.Content>
        <S.IconBox>{icon}</S.IconBox>
        <S.NameBox>{name}</S.NameBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default SidebarItem;
