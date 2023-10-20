import * as S from './style'

interface BtnProps {
  text: string
  onclick?: () => void
  fontsize?: string
  border?: boolean
  fontweight?: string
}

const Button = ({ text, onclick, fontsize, border, fontweight }: BtnProps) => {
  return (
    <S.Wrapper fontweight={fontweight} fontsize={fontsize} border={border}>
      {text}
    </S.Wrapper>
  )
}

export default Button
