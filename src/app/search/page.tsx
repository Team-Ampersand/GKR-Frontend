'use client'
import Rental from 'components/Home/organisms/Rental'
import { HomeTemplate } from 'components/Home/template/style'
import SearchField from 'components/common/molecules/SearchField'
import Sidebar from 'components/common/organisms/Sidebar'
import { CommonTemplate } from 'components/common/templates/style'

const SearchPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <HomeTemplate>
        <SearchField />
        <Rental />
      </HomeTemplate>
    </CommonTemplate>
  )
}
export default SearchPage
