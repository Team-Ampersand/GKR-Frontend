import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchState } from 'recoilAtoms'
import { getData } from 'utils/apis/data'
import { EquipmentController } from 'utils/libs/requestUrls'
import * as S from './style'
import getRole from 'utils/getRole'

const SearchField = () => {
  const role = getRole()
  const [list, setList] = useRecoilState(searchState)
  const [inputValue, setInputValue] = useState('')
  const url = EquipmentController.serachEquipment()

  const { data, refetch } = useQuery(
    ['search', url],
    () => {
      return getData(url, { name: inputValue })
    },
    {
      refetchOnWindowFocus: false,
    },
  )

  useEffect(() => {
    let delayTimer: NodeJS.Timeout

    const delayedFetch = (): void => {
      clearTimeout(delayTimer)
      delayTimer = setTimeout(() => {
        refetch()
        if (data) setList(data?.data?.equipmentList)
      }, 200)
    }
    delayedFetch()

    return () => clearTimeout(delayTimer)
  }, [inputValue, refetch])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
