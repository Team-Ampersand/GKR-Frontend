'use client'
import { HomeTemplate } from 'components/Home/template/style';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/style';

const Notice = () => {
    return (
        <CommonTemplate>
          <Sidebar />
          <HomeTemplate>
          </HomeTemplate>
        </CommonTemplate>
      );
}
export default Notice