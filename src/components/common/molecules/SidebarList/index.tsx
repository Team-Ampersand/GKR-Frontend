import { MenuData } from 'asset/data/MenuData'
import SidebarItem from 'components/common/atoms/SidebarItem'
import { usePathname } from 'next/navigation'
import * as S from './style'
import cookieManager from 'utils/cookieManager'
import getRole from 'utils/getRole'

const SidebarList = () => {
  const { getCookie } = cookieManager()
  const role = getRole()
  const pathname = usePathname()

  return (
    <S.SidebarListWrapper>
      {MenuData.map((menu, key) => {
        return menu.show.includes(role) ? (
          <SidebarItem
            key={key}
            icon={<menu.icon />}
            name={menu.title}
            active={pathname.includes(menu.routerName)}
            url={menu.routerName}
          />
        ) : null
      })}
    </S.SidebarListWrapper>
  )
}

export default SidebarList
