'use client'
import { HomeTemplate } from 'components/Home/template/style'
import Search from 'components/Search'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const SearchPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <HomeTemplate>
        <Search />
      </HomeTemplate>
    </CommonTemplate>
  )
}
export default SearchPage
