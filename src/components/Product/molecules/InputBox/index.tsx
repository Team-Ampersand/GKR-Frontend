import InputItem from 'components/Product/atom/InputItem'
import * as S from './style'

const InputBox = () => {
  return (
    <S.Wrapper>
      <InputItem
        title="기자재 이름"
        placeholder="기자재의 이름을 입력해주세요"
      />
      <InputItem title="기자재 설명" placeholder="기자재의 설명을 입력해주세요" />
    </S.Wrapper>
  )
}

export default InputBox
