import InputItem from 'components/Product/atom/InputItem'
import * as S from './style'

const InputBox = () => {
  return (
    <S.Wrapper>
      <InputItem title="물품 이름" placeholder="ex) 노트북" />
      <InputItem
        title="기자재 주의사항"
        placeholder="ex) 사용할 때 파손 주의해주세요."
      />
      <InputItem title="기자재 상세 내용" placeholder="라즈베리파이..." />
    </S.Wrapper>
  )
}

export default InputBox
