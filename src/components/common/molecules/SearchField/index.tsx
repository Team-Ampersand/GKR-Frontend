import { useState, useEffect } from 'react'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import { roleType } from 'recoilAtoms'
import { useQuery } from 'react-query'
import { EquipmentController } from 'utils/libs/requestUrls'
import { getData } from 'utils/apis/data'

const SearchField = () => {
  const role = useRecoilValue(roleType)
  const [inputValue, setInputValue] = useState('')
  const url = EquipmentController.serachEquipment()
  const { data, refetch } = useQuery(
    ['search', url],
    () => {
      const queryParams = { name: inputValue }
      return getData(url, queryParams)
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
    },
  )
  const searchList = data?.data?.equipmentList
  console.log(searchList)
  useEffect(() => {
    const timer = setTimeout(() => {
      refetch()
    }, 500)

    return () => clearTimeout(timer)
  }, [inputValue, refetch])

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <S.Label>
        <S.Input
          role={role}
          type="text"
          placeholder="찾고 싶은 기자재를 입력해주세요"
          value={inputValue}
          onChange={handleInputChange}
        />
      </S.Label>
    </>
  )
}

export default SearchField
