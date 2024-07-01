import * as S from './style'
import Link from 'next/link'
import getRole from 'utils/getRole'

interface Props {
  icon: JSX.Element
  name: string
  active: boolean
  url: string
}

const SidebarItem = ({ icon, name, active, url }: Props) => {
  const role = getRole()

  return (
    <Link href={url}>
      <S.Wrapper checked={active} roleType={role}>
        <S.Content active={active}>
          <S.IconBox>{icon}</S.IconBox>
          <S.NameBox>{name}</S.NameBox>
        </S.Content>
      </S.Wrapper>
    </Link>
  )
}

export default SidebarItem
