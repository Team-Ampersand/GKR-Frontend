import DetailItem from 'components/common/atoms/DetailItem'
import TopBox from '../TopBox'
import * as S from './style'

interface Props {
  dummy: {
    id: number
    title: string
    imageUrl: string
    createNoticeDate: string
    content: string
  }[]
}

const DetailBox = ({ dummy }: Props) => {
  return (
    <S.Wrapper>
      {dummy.map((i) => (
        <DetailItem
          title={i.title}
          id={i.id}
          content={i.content}
          createNoticeDate={i.createNoticeDate}
          imgurl={i.imageUrl}
          key={i.id}
        />
      ))}
    </S.Wrapper>
  )
}

export default DetailBox
