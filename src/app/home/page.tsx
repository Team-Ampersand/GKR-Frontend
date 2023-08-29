'use client';
import MenuList from 'components/Home/molecules/MenuList';
import { HomeTemplate } from 'components/Home/template/style';
import SearchField from 'components/common/molecules/SearchField';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';

const HomePage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <HomeTemplate>
        <SearchField />
        <MenuList />
      </HomeTemplate>
    </CommonTemplate>
  );
};
export default HomePage;
