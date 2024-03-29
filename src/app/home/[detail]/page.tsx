'use client'
import DetailBox from 'components/Detail/organisms/DetailBox'
import { DetailTemplate } from 'components/Detail/template/style'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const DetailPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <DetailTemplate>
        <DetailBox />
      </DetailTemplate>
    </CommonTemplate>
  )
}
export default DetailPage
