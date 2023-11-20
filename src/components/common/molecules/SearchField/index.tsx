import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'
import { roleType, searchState } from 'recoilAtoms'
import { getData } from 'utils/apis/data'
import { EquipmentController } from 'utils/libs/requestUrls'
import * as S from './style'

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
  const [list, setList] = useRecoilState(searchState)
  useEffect(() => {
    const timer = setTimeout(() => {
      refetch()
      if (data) setList(data?.data?.equipmentList)
    }, 500)
    return () => clearTimeout(timer)
  }, [inputValue, refetch, setList, data])
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
