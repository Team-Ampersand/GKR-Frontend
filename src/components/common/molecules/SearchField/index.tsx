import { useState, useEffect } from 'react'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import { roleType } from 'recoilAtoms'

const SearchField = () => {
  const role = useRecoilValue(roleType)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    
  }, [inputValue])

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <S.Label>
        <S.Input
          role={role}
          type="text"
          placeholder="검색어를 입력해주세요"
          value={inputValue}
          onChange={handleInputChange}
        />
      </S.Label>
    </>
  )
}

export default SearchField
