import * as S from './style'

interface BtnProps {
  text: string
  onclick?: () => void
  fontsize?: string
  border?: boolean
  fontweight?: string
  width?: string
  height?: string
  color?: string
}

const Button = ({
  text,
  onclick,
  width,
  height,
  color,
  fontsize,
  border,
  fontweight,
}: BtnProps) => {
  return (
    <S.Wrapper
      onClick={onclick}
      color={color}
      width={width}
      height={height}
      fontweight={fontweight}
      fontsize={fontsize}
      border={border}
    >
      {text}
    </S.Wrapper>
  )
}

export default Button
