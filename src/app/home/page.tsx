'use client';
import Filter from 'components/Home/molecules/Filter';
import Rental from 'components/Home/organisms/Rental';
import { HomeTemplate } from 'components/Home/template/style';
import SearchField from 'components/common/molecules/SearchField';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/style';

const HomePage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <HomeTemplate>
        <SearchField />
        <Filter />
        <Rental />
      </HomeTemplate>
    </CommonTemplate>
  );
};
export default HomePage;
