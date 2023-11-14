import { useState } from 'react'
import * as S from './style'
import TextareaAutosize from 'react-textarea-autosize'
import { InputItemProps } from 'types/Product/ProductTypes'

const InputItem = ({ title, placeholder, value, setValue }: InputItemProps) => {
  const [content, setContent] = useState('')

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Input>
        <TextareaAutosize
          cacheMeasurements
          placeholder={placeholder}
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
        />
      </S.Input>
    </S.Wrapper>
  )
}

export default InputItem
