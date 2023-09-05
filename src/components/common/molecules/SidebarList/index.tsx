import { MenuData } from 'asset/data/MenuData';
import SidebarItem from 'components/common/atoms/SidebarItem';
import { usePathname } from 'next/navigation';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { roleType } from 'recoilAtoms';

const SidebarList = () => {
  const pathname = usePathname();
  const role = useRecoilValue(roleType);

  return (
    <S.Wrapper>
      {MenuData.map((menu, key) => {
        return (
          <SidebarItem
            key={key}
            icon={<menu.icon />}
            name={menu.title}
            active={pathname.includes(menu.routerName)}
            show={menu.show.includes(role)}
            url={menu.routerName}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default SidebarList;
