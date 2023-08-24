import * as S from './style';

interface Props {
  icon: JSX.Element;
  name: string;
  active: boolean;
}

const SidebarItem = ({ icon, name, active }: Props) => {
  return (
    <S.Wrapper checked={active}>
      <S.Content>
        <S.IconBox>{icon}</S.IconBox>
        <S.NameBox>{name}</S.NameBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default SidebarItem;
