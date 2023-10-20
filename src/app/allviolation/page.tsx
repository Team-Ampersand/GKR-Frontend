'use client';

import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/style';
import { RuleTemplate } from 'components/Rule/templates/style';
import RuleHeader from 'components/Rule/molecules/RuleHeader';
import Rule from 'components/Rule/organisms';

const Allviolation = () => {
  return (
    <>
      <CommonTemplate>
        <Sidebar />
        <RuleTemplate>
          <RuleHeader />
          <Rule />
        </RuleTemplate>
      </CommonTemplate>
    </>
  );
};

export default Allviolation;
