import { MenuData } from 'asset/data/MenuData';
import SidebarItem from 'components/common/atoms/SidebarItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './style';

const SidebarList = () => {
  const pathname = usePathname();

  return (
    <S.Wrapper onClick={() => console.log(pathname)}>
      {MenuData.map((menu, key) => {
        return (
          <Link href={menu.routerName} key={key}>
            <div>
              <SidebarItem
                icon={<menu.icon />}
                name={menu.title}
                active={pathname === menu.routerName}
              />
            </div>
          </Link>
        );
      })}
    </S.Wrapper>
  );
};

export default SidebarList;
