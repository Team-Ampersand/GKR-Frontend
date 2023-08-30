'use client';

import Regist from 'components/Regist/organisms';
import { RegistTemplate } from 'components/Regist/templates/style';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/style';

const RegistPgae = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <RegistTemplate>
          <Regist />
        </RegistTemplate>
      </CommonTemplate>
    </>
  );
};

export default RegistPgae;
