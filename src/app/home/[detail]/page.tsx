'use client';
import RentalForm from 'components/Detail/organisms/RentalForm';
import { DetailTemplate } from 'components/Detail/templates/style';
import SearchField from 'components/common/molecules/SearchField';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/style';

const DetailPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <DetailTemplate>
        <SearchField />
        <RentalForm />
      </DetailTemplate>
    </CommonTemplate>
  );
};
export default DetailPage;
