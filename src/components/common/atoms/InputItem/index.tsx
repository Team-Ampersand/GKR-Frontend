import { useState } from 'react'
import * as S from './style'
import TextareaAutosize from 'react-textarea-autosize'
import { InputItemProps } from 'types/Product/ProductTypes'

const InputItem = ({ title, placeholder, value, setValue }: InputItemProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Input>
        <TextareaAutosize
          cacheMeasurements
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </S.Input>
    </S.Wrapper>
  )
}

export default InputItem
