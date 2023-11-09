import * as S from './style'
import * as I from 'asset/svg'

interface ImageFramePropsType {
  url?: string
}

export default function ImageFrame({ url }: ImageFramePropsType) {
  return <>{url ? <S.ImageFrameWrapper src={url} /> : <S.NullImageWrapper />}</>
}
