import { useRecoilValue } from 'recoil';
import * as S from './style';
import { roleType } from 'recoilAtoms';
import Link from 'next/link';

interface Props {
  icon: JSX.Element;
  name: string;
  active: boolean;
  show: boolean;
  url: string;
}

const SidebarItem = ({ icon, name, active, show, url }: Props) => {
  const role = useRecoilValue(roleType);

  return (
    <Link href={url}>
      <div>
        <S.Wrapper checked={active} roleType={role} show={show}>
          <S.Content active={active}>
            <S.IconBox>{icon}</S.IconBox>
            <S.NameBox>{name}</S.NameBox>
          </S.Content>
        </S.Wrapper>
      </div>
    </Link>
  );
};

export default SidebarItem;
