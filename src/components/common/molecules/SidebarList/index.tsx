import { MenuData } from 'asset/data/MenuData';
import SidebarItem from 'components/common/atoms/SidebarItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { roleType } from 'recoilAtoms';
import { Document } from 'asset/svg';

const SidebarList = () => {
  const pathname = usePathname();
  const role = useRecoilValue(roleType);

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

      {role === 'admin' && (
        <Link href="/Regist">
          <div>
            <SidebarItem
              icon={<Document />}
              name="Registration"
              active={pathname === '/Regist'}
            />
          </div>
        </Link>
      )}
    </S.Wrapper>
  );
};

export default SidebarList;
